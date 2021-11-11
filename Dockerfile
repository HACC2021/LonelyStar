FROM ubuntu:20.04

RUN apt-get update && apt-get install -y software-properties-common gcc && \
    add-apt-repository -y ppa:deadsnakes/ppa

RUN apt-get update && apt-get install -y python3.8 python3-distutils python3-pip python3-apt

RUN  apt-get update \
  && apt-get install -y wget \
  && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y \
curl && apt-get install -y unzip && apt-get install -y p7zip-full



# installing node
ENV NODE_VERSION=16.13.0
# RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

COPY . .
RUN pip install -r requirements.txt
# RUN wget --no-check-certificate 'https://docs.google.com/uc?export=download&id=1B4VyZPQ0GGeInMErYzeYI7KgjbMhgKMv' -O ./backend/ml/OHABotModelWeights
# RUN cd ./backend/ml && 7z x OHABotModelWeights
RUN cd frontend && npm install 





