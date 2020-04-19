from django.shortcuts import render
import Templates
# Create your views here.

def index(arg):
    return render(arg,'index.html', {})