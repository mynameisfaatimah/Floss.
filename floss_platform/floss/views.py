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
    authentication_classes = []
    permission_classes = []


class TreatmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Treatment.objects.all()
    serializer_class = TreatmentSerializer
    authentication_classes = []
    permission_classes = []


class SymptomList(generics.ListCreateAPIView):
    queryset = Symptoms.objects.all()
    serializer_class = SymptomSerializer
    authentication_classes = []
    permission_classes = []


class SymptomDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Symptoms.objects.all()
    serializer_class = SymptomSerializer
    authentication_classes = []
    permission_classes = []





    
