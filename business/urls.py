from django.urls import path,include
from . import views
from rest_framework import routers
from .views import *
from django.contrib import admin

router= routers.DefaultRouter()
router.register(r'business',BusinessViewSet)

urlpatterns=[
    path('',include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='api')),
    path('business reg form', views.businessregform, name='business reg form'),
    path('dashboard', views.dashboard, name='dashboard')
]