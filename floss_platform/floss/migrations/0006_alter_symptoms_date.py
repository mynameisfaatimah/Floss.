# Generated by Django 4.2 on 2023-04-17 00:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('floss', '0005_symptoms_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='symptoms',
            name='date',
            field=models.CharField(default='', max_length=100),
        ),
    ]