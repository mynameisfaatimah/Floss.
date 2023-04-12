
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from .views import SymptomListCreateView, SymptomRetrieveUpdateDestroyView

urlpatterns = [
    path('treatments/', views.TreatmentList.as_view(), name='treatment_list'),
    path('symptoms/', views.SymptomList.as_view(), name='symptom_list'),
    path('symptoms/<int:pk>/', SymptomRetrieveUpdateDestroyView.as_view(), name='symptom_detail'),
    path('symptoms/', SymptomListCreateView.as_view(), name='symptom_list')

]