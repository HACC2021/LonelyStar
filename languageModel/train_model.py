import numpy as np 
import pandas as pd
import math
import torch
from torch import nn
import torch.nn.functional as F
from torch.nn import TransformerEncoder, TransformerEncoderLayer
from torch.utils.data import DataLoader, Dataset
from collections import Counter
from torch.nn.utils.rnn import pad_sequence
from torchvision.transforms import ToTensor, Lambda, Compose
import random
from transformers import AutoModel, AutoTokenizer, BertTokenizer, AutoConfig
import os

def seed_everything(seed=1234):
    random.seed(seed)
    os.environ['PYTHONHASHSEED'] = str(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    torch.cuda.manual_seed(seed)
    torch.backends.cudnn.deterministic = True
seed_everything(seed=1326)

# HYPERPARAMETERS
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
num_classes = 13
batch_size = 16
epochs = 35 # The number of epochs
embedding_dim = 300
MODEL_NAME =  'distilroberta-base'

# LOAD DATAFRAME
df = pd.read_csv('OHABotData.csv',sep=',').sample(frac = 1)
df = df.dropna()
df = df.astype({"Questions ": str, "Answers": int})

# OHA DATASET
class OHADataset(Dataset):
    def __init__(self, df):
        self.df = df 
        
    def __len__(self):
        return len(self.df)
    
    def __getitem__(self, idx):
        label = self.df.iloc[idx][1]
        text = self.df.iloc[idx][0]     
        return text, label


# TRANSFORMER MODEL
class OHAModel(nn.Module):
    def __init__(self,path):
        super(OHAModel,self).__init__()
        self.config = AutoConfig.from_pretrained(path)
        self.config.update({'output_hidden_states':True})
        self.bert = AutoModel.from_pretrained(path,output_hidden_states=False)
        

        self.linear = nn.Linear(768,num_classes)
        self.dropout = nn.Dropout(0.50)
        self.lrelu = nn.LeakyReLU()
        self.logSoftmax = nn.LogSoftmax()
    

    def forward(self,xb):
        # x = self.bert(**xb)[1]
        x = self.bert(**xb)[1]
        # print(f'x shape is {x.size()}')
        x = self.dropout(x)
        x = self.linear(x)
        x = self.logSoftmax(x)
        return x
    
    
model = OHAModel(MODEL_NAME).to(device)
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)

# DEFINING THE TRAIN AND EVAl 

train_data = OHADataset(df)
train_loader = DataLoader(train_data, batch_size = batch_size, shuffle = True)

val_data = OHADataset(df)
val_loader = DataLoader(val_data, batch_size = batch_size, shuffle = True)

import time

bptt = 35

# We use NLLL loss so that it is easier during inference time. logSoftmax is already applied to output
criterion = nn.NLLLoss()
lr = 0.00002 # learning rate
optimizer = torch.optim.Adam(model.parameters(), lr=lr, weight_decay= 1e-5)
# scheduler = torch.optim.lr_scheduler.StepLR(optimizer, 1, gamma=0.95, verbose = True)
scheduler = torch.optim.lr_scheduler.StepLR(optimizer, 1, gamma=0.95)


def train(model):
    model.train() # Turn on the train mode
    return_loss = []
    total_loss = 0.
    start_time = time.time()
#     src_mask = model.generate_square_subsequent_mask(bptt).to(device)
    batch = 0
    for data, targets in train_loader:
        model.train()
        optimizer.zero_grad()
      
        data = tokenizer.batch_encode_plus([*data],pad_to_max_length='max_length', return_tensors='pt').to(device)
        final_output = model(data)
        targets = targets.to(device)
        final_output = torch.squeeze(final_output.float())
        loss = criterion(final_output, targets)


        loss.backward()
#         torch.nn.utils.clip_grad_norm_(model.parameters(), 0.5)
        optimizer.step()

        total_loss += loss.item()
        return_loss.append(loss.item())
        log_interval = 100
        batch += 1
        total_loss = 0
        start_time = time.time()
        
    return torch.mean(torch.tensor(return_loss))

def evaluate(eval_model):
#     losses = []
    eval_model.eval() # Turn on the evaluation mode
#     total_loss = 0.
    total_loss = []
    with torch.no_grad():
        for data, targets in val_loader:
            
            data = tokenizer.batch_encode_plus([*data],pad_to_max_length='max_length', return_tensors='pt').to(device)
            final_output = model(data)
            targets = targets.to(device)
            final_output = torch.squeeze(final_output.float())
#             loss = criterion(final_output, targets)
            currLoss = criterion(final_output, targets).item()
#             total_loss += len(data) * currLoss
            total_loss.append(currLoss)

#     return total_loss
    return torch.mean(torch.tensor(total_loss))

torch.save(model, 'OHABotModel')


# TRAINING!!!!!

train_data = OHADataset(df)
train_loader = DataLoader(train_data, batch_size = batch_size, shuffle = True)



for epoch in range(1, epochs + 1):
        print('-' * 89)
        print(f'Starting epoch {epoch}')
        epoch_start_time = time.time()
        train_loss = train(model)
        print(f'| end of epoch: {epoch} | time: {time.time() - epoch_start_time}s  | train loss: {train_loss} |')
        print('-' * 89)


torch.save(model, 'OHABotModel')
torch.save(model.state_dict(), '../backend/ml/OHABotModelWeights')

# For testing purposes
# model.eval()
# while True:
#     with torch.no_grad():
#         query = input('Please enter a question')
#         data = tokenizer.encode_plus(query,pad_to_max_length='max_length', return_tensors='pt').to(device)
# #         output = nn.Softmax()(model(data)).cpu()
#         output = model(data).cpu()
#         print(output)
#         pred = np.argmax(np.array(output))
#         print(2 ** output[0][pred])
#         print(pred)
    