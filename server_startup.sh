#!/bin/sh
cd languageModel
python3 train_model.py
cd ../backend
python3 manage.py runserver


