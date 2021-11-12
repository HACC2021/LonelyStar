#!/bin/sh
docker pull timothynicdao/lonelystar
docker run -i -p 3000:3000 timothynicdao/lonelystar bash client_startup.sh &
docker run -i -p 8000:8000 timothynicdao/lonelystar bash server_startup.sh &