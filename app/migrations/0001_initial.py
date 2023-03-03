# Generated by Django 4.1.6 on 2023-02-07 22:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FormSendler',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Имя')),
                ('phone_num', models.IntegerField(max_length=20, verbose_name='Номер телефона')),
                ('user_mail', models.EmailField(max_length=254, verbose_name='Почта')),
                ('date', models.DateTimeField(verbose_name='Дата')),
            ],
        ),
    ]