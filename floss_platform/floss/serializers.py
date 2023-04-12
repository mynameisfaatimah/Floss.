from rest_framework import serializers
from .models import Symptoms
from .models import Treatment

class SymptomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Symptoms
        fields = ['url', 'id', 'pain_level', 'pain_location', ]

class TreatmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = Treatment
        fields = ['name', 'description']
