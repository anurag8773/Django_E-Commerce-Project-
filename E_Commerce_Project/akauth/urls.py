from django.urls import path
from akauth import views

urlpatterns = [
    path('signup', views.signup, name='signup'),
    path('login/', views.handlelogin, name='handlelogin'),
]