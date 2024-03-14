from django.urls import path
from .views import (
    post_list_and_create,
)

app_name ='posts'

urlpatterns = [
    path('posts/', post_list_and_create, name='main-board'), 
]