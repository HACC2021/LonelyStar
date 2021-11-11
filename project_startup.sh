#!/bin/sh
docker run -i -p 3000:3000 lonelystar bash client_startup.sh &
docker run -i -p 8000:8000 lonelystar bash server_startup.sh &