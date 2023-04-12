
# from django.urls import path
# from . import views
from rest_framework.routers import DefaultRouter
# from .views import  SymptomRetrieveUpdateDestroyView

# urlpatterns = [
#     path('treatments/', views.TreatmentList.as_view(), name='treatment_list'),
#     path('symptoms/', views.SymptomList.as_view(), name='symptom_list'),
#     path('symptoms/<int:pk>/', SymptomRetrieveUpdateDestroyView.as_view(), name='symptom_detail'),


# ]
# urls.py

from django.urls import path
from .views import TreatmentList, TreatmentDetail, SymptomList, SymptomDetail

urlpatterns = [
    path('treatments/', TreatmentList.as_view(), name='treatment_list'),
    path('treatments/<int:pk>/', TreatmentDetail.as_view(), name='treatment_detail'),
    path('symptoms/', SymptomList.as_view(), name='symptoms_list'),
    path('symptoms/<int:pk>/', SymptomDetail.as_view(), name='symptoms_detail'),
]
