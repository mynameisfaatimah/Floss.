from django.db import models
from bootstrap_datepicker_plus.widgets import DatePickerInput

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=32)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField()

class Symptoms(models.Model):
    PAIN_LEVEL_CHOICES = (
        ('M', 'Moderate'),
        ('L', 'Mild'),
        ('S', 'Severe'),
    )
    pain_level = models.CharField(
        max_length=1,
        choices=PAIN_LEVEL_CHOICES, 
        default='L',
    )
    PAIN_LOCATION_CHOICES = (
        ('UF', 'Upper Jaw Front'),
        ('UB', 'Upper Jaw Back'),
        ('LF', 'Lower Jaw Front'),
        ('LB', 'Lower Jaw Back'),
        ('N', 'none'),
    )
    pain_location = models.CharField(
        max_length=2,
        choices=PAIN_LOCATION_CHOICES,
        default='N'
    )   
    PAIN_TYPE_CHOICES = (
        ('T', 'throbbing'),
        ('A', 'aching'),
        ('BG', 'bleeding gums'),
        ('SW', 'swelling'),
        ('TS', 'temperature sensitive'),
        ('N', 'none')
    )
    pain_type = models.CharField(
        max_length=100,
        choices=PAIN_TYPE_CHOICES,
        default='N'
    )
    date = models.CharField(
        max_length=100,
        default=''

    )


class Treatment(models.Model):
    Symptom = models.ForeignKey(Symptoms, on_delete=models.CASCADE, related_name='treatment')
    treatment_name = models.CharField(max_length = 150)
    treatment_description = models.CharField(max_length=500)



    