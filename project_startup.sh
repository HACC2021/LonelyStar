#!/bin/sh
docker run -p 3000:3000 -it lonelystar bash client_startup.sh &
docker run -p 8000:8000 -it lonelystar bash server_startup.sh &