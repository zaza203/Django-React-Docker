from django.urls import path

from .views import *

urlpatterns = [
    path('api/articles/', ArticleListView.as_view(), name='article-list'),
    path('api/articles/<int:pk>/', ArticleDetailView.as_view(), name='article-detail'),
]
