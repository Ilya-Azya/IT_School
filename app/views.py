from django.shortcuts import render, HttpResponse
# from .forms import FormSendlerForm
# from .models import FormSendler
from django.http import JsonResponse


# Create your views here.

def index(request):
    # # if request.method == "POST":
    # #     form = FormSendlerForm(request.POST)
    # #     if form.is_valid():
    # #         form.save()
    # # else:
    # #     form = FormSendlerForm()
    #
    # form = FormSendlerForm()
    # data = {
    #     'form' : form
    # }
    return render(request, 'app/index.html')


