# LonelyStar

Thank you for checking out team LonelyStar's project! 
<br><br>


## Running the project

To run this prototype please follow the commands in your terminal. Note that to make it easier to install everything, the project is run using docker and there is also a bash script that starts the entire project. Please install docker if you don't have it in your machine, make sure your environment can run bash scripts and run the following commands: 

<br><br>
Clone the git repo of the project:
```
git clone https://github.com/HACC2021/LonelyStar.git 
```

<br><br>
Go to project directory
```
cd LonelyStar 
```

<br><br>
At this step, please make sure to have docker and bash. The startup script will now handle starting the project. This is gonna take a while so please relax and maybe enjoy some coffee for a few min and come back.
```
bash project_startup.sh
```

<!-- <br><br>
Finally, the script included will start both the client and the server. This might take a few minutes as it also trains the model locally.
```
bash project_startup.sh
``` -->

<br><br>
At this point, the project should now be running and you can access the prototype in your browser at <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a>

<br>
If you would like to access the django api you can do so at  <a href="http://127.0.0.1:8000/api/chat" target="_blank">http://127.0.0.1:8000/api/chat</a>