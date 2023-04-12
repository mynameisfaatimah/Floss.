# from rest_framework import generics
# from .models import Treatment, Symptoms
# from .serializers import TreatmentSerializer, SymptomSerializer

# class TreatmentList(generics.ListCreateAPIView):
#     queryset = Treatment.objects.all()
#     serializer_class = TreatmentSerializer

# class SymptomList(generics.ListCreateAPIView):
#     queryset = Symptoms.objects.all()
#     serializer_class = SymptomSerializer

# class SymptomRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Symptoms.objects.all()
#     serializer_class = SymptomSerializer


# views.py

from rest_framework import generics
from .models import Treatment, Symptoms
from .serializers import TreatmentSerializer, SymptomSerializer


class TreatmentList(generics.ListCreateAPIView):
    queryset = Treatment.objects.all()
    serializer_class = TreatmentSerializer


class TreatmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Treatment.objects.all()
    serializer_class = TreatmentSerializer


class SymptomList(generics.ListCreateAPIView):
    queryset = Symptoms.objects.all()
    serializer_class = SymptomSerializer


class SymptomDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Symptoms.objects.all()
    serializer_class = SymptomSerializer





    
