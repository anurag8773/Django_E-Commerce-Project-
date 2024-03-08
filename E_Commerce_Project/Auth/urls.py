from django.urls import path
from Auth import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
]