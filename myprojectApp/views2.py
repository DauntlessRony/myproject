from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def views2(request):
  return HttpResponse("Hello I am from myprojectApp views2")
