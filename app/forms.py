# from django import forms
# from .models import FormSendler
#
#
# class FormSendlerForm(forms.ModelForm):
#     class Meta:
#         model = FormSendler
#         fields = ['name', 'phone_num', 'user_mail']
#
#         widgets = {
#             "name": forms.TextInput(attrs={
#                 'class': 'form-control',
#                 'placeholder': 'Ваше имя'
#             }),
#             "phone_num": forms.TextInput(attrs={
#                 'class': 'form-control',
#                 'placeholder': 'Номер телефона'
#             }),
#             "user_mail": forms.EmailInput(attrs={
#                 'class': 'form-control',
#                 'placeholder': 'Адрес электронной почты'
#             })
#         }
