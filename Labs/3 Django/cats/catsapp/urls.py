from django.urls import path 
from .import views 

app_name = 'catsapp'

urlpatterns = [
    path('index/', views.index, name= 'index')
]

