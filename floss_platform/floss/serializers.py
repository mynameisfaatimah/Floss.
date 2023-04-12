from rest_framework import serializers
from .models import Symptoms
from .models import Treatment

class SymptomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        view_name='symptoms_detail'
        model = Symptoms
        fields = ['url', 'id', 'pain_level', 'pain_location']

class TreatmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        view_name='treatment_detail',
        model = Treatment
        fields = ['Symptom', 'treatment_name', 'treatment_description']
        depth = 1

