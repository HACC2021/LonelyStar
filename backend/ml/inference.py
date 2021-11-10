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
from transformers import logging
import os


logging.set_verbosity_error()
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
num_classes = 13
# batch_size = 16
# epochs = 35 # The number of epochs
MODEL_NAME =  './distilroberta-base'

class_to_label = {
    1: 'Scholarships',
    2: 'Verifying ancestry',
    3: 'Loans General',
    4: 'Business Loans',
    5: 'Personal Loans',
    6: 'Emergency financial assistance',
    7: 'OHA board meeting',
    8: 'Connect with OHA',
    9: 'Careers at OHA',
    10: 'Kuleana Land Tax exemption',
    11: 'OHA Database',
    12: 'Island Trustee',
}

class OHAModel(nn.Module):
    def __init__(self,path):
        super(OHAModel,self).__init__()
        self.config = AutoConfig.from_pretrained(path)
        self.config.update({'output_hidden_states':True})
        self.bert = AutoModel.from_pretrained(path,output_hidden_states=False)
        

        self.linear = nn.Linear(768,num_classes)
        self.dropout = nn.Dropout(0.50)
        self.lrelu = nn.LeakyReLU()
        self.logSoftmax = nn.LogSoftmax(dim = 1)
    

    def forward(self,xb):
        # x = self.bert(**xb)[1]
        x = self.bert(**xb)[1]
        # print(f'x shape is {x.size()}')
        x = self.dropout(x)
        x = self.linear(x)
        x = self.logSoftmax(x)
        return x
    
    
model = OHAModel(MODEL_NAME).to(device)
# model = torch.load('../languageModel/OHABotModel')
# torch.load('OHABotModelWeights')

# fileName = 'OHABotModelWeights'
# while not os.path.isfile(fileName):
#     fileName = input("Whoops! No such file! Please enter the name of the file you'd like to use.")

# for root, dirs, files in os.walk("./ml", topdown=False):
#     print(root)
#     print(dirs)
#     print(files)
#     print('*' * 89)

# print(os.getcwd())

model.load_state_dict(torch.load('./ml/OHABotModelWeights'))
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model.eval()


def infer(question):
    with torch.no_grad():
        data = tokenizer.encode_plus(question,padding=True, return_tensors='pt').to(device)
        # output = nn.Softmax()(model(data)).cpu()
        output = model(data).cpu()
        # print(output)
        pred = np.argmax(np.array(output))
        # This is to inverse logSoftmax so we see only softmax probability of the model's answer
        probability = 2 ** output[0][pred]
        # print(probability)
        # print(pred)
        return pred,probability

