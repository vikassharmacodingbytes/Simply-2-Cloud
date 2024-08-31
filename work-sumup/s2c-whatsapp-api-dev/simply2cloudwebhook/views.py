from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
import requests
from rest_framework import status



# Create your views here.

def sendMessage(user_phone, message):
    my_phone_number = '7078177495'
    whatsapp_api_url = f'https://graph.facebook.com/v13.0/{my_phone_number}/messages'
    whatsapp_token = 'token'

    # API Data
    headers = {
        "Authorization" : f'Bearer {whatsapp_token}',
        'Content-Type': 'application/json',
    }

    payload = {
        'messaging_product' :  "whatsapp",
        'to' : user_phone,
        "text": {
            "body": message
        }
    }

    try:
        response = requests.post(whatsapp_api_url, headers=headers, json=payload)
        if response.status_code == 200:
            return Response({'status': 'success', 'message_id': response['messages'][0]['id']})
        else:
            return Response({'status': 'error', 'error': response.json()}, status=response.status_code)
    except Exception as e:
        return Response({'error' : "Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class SendFirstMessage(APIView):
    def post(self, request, id = None):
        try:
            if request.data.get('phone_number') is None:
                return Response({"error" : "Please Provide Phone Number"},status=status.HTTP_400_BAD_REQUEST)
            return sendMessage(request.data.get('phone_number'), "Thankyou for choosing Coding Bytes for python Courses")
        except Exception as e:
            return Response({"error" : "Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


class MessageWebHooks(APIView):
    def post(self, request, id = None):
        user_phone = request.data.get('phone_number')
        message = "Thank you for joining Python courses with us. Thank you from Simply 2 Cloud."
        return sendMessage(user_phone, message)
        
        
