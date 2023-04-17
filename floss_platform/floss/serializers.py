from rest_framework import serializers
from .models import Symptoms
from .models import Treatment

class SymptomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        view_name='symptoms_detail',
        model = Symptoms
        fields = ['id', 'pain_level', 'pain_location', 'date']

class TreatmentSerializer(serializers.ModelSerializer):

    Symptom = serializers.SlugRelatedField(
        # view_name='symptoms_detail',
        many=False,
        read_only=True,
        slug_field='date'

    )

    Symptom_id = serializers.PrimaryKeyRelatedField(
        queryset=Symptoms.objects.all(),
        source='Symptom',
    )

    class Meta: 
        view_name='treatment_detail',
        model = Treatment
        fields = ['Symptom', 'treatment_name', 'treatment_description', 'Symptom_id']
        depth = 1
        read_only_fields = ['Symptom_id'] #also add this


