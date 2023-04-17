from django.db import models
from bootstrap_datepicker_plus.widgets import DatePickerInput

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=32)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField()

class Symptoms(models.Model):
    PAIN_LEVEL_CHOICES = (
        ('Moderate', 'Moderate'),
        ('Mild', 'Mild'),
        ('Severe', 'Severe'),
    )
    pain_level = models.CharField(
        max_length=20,
        choices=PAIN_LEVEL_CHOICES, 
        default='L',
    )
    PAIN_LOCATION_CHOICES = (
        ('Upper Jaw Front', 'Upper Jaw Front'),
        ('Upper Jaw Back', 'Upper Jaw Back'),
        ('Lower Jaw Front', 'Lower Jaw Front'),
        ('Lower Jaw Back', 'Lower Jaw Back'),
        ('None', 'none'),
    )
    pain_location = models.CharField(
        max_length=25,
        choices=PAIN_LOCATION_CHOICES,
        default='None'
    )   
    PAIN_TYPE_CHOICES = (
        ('Throbbing', 'throbbing'),
        ('Aching', 'aching'),
        ('Bleeding Gums', 'bleeding gums'),
        ('Swelling', 'swelling'),
        ('Temp. Sensitive', 'temperature sensitive'),
        ('None', 'none')
    )
    pain_type = models.CharField(
        max_length=100,
        choices=PAIN_TYPE_CHOICES,
        default='None'
    )
    date = models.CharField(
        max_length=100,
        default=''

    )


class Treatment(models.Model):
    Symptom = models.ForeignKey(Symptoms, on_delete=models.CASCADE, related_name='treatment')
    treatment_name = models.CharField(max_length = 150)
    treatment_description = models.CharField(max_length=500)



    