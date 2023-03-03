from django.db import models


# Create your models here.

class FormSendler(models.Model):
    name = models.CharField('Имя', max_length=50)
    phone_num = models.CharField('Номер телефона', max_length=50)
    user_mail = models.EmailField('Почта')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'
