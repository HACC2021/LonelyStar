from ml.inference  import infer
import json
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['POST'])
def chat(request):
    response_data = {}
    # model_output = infer(request.data['question'])
    # response_data['answer'] = model_output[0]
    # response_data['probability'] = model_output[1]
    response_data['answer'] = str(infer(request.data['question'])[0])
    response_data = json.dumps(response_data)
    return Response(response_data)



