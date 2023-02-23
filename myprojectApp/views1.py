from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse


def views1(request):
  return HttpResponse("Hello I am from myprojectApp views1")

def emp_info(request):
    return render (request,'emp_info.html')
