from rest_framework import serializers
from .models import Symptoms
from .models import Treatment

class SymptomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        view_name='symptoms_detail',
        model = Symptoms
        fields = ['id', 'pain_level', 'pain_location']

class TreatmentSerializer(serializers.HyperlinkedModelSerializer):

    # symptom = serializers.HyperlinkedRelatedField(
    #     view_name='symptoms_detail',
    #     many=False,
    #     read_only=True
    # )

    class Meta: 
        view_name='treatment_detail',
        model = Treatment
        fields = ['symptom', 'treatment_name', 'treatment_description']
        depth = 1

