# Generated by Django 4.2 on 2023-04-11 19:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('floss', '0003_symptoms_pain_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='symptoms',
            name='pain_description',
        ),
    ]
