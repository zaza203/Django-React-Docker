from django.shortcuts import render
from django.contrib.auth.decorators import login_required

from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer

class ArticleListView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    # @login_required
    # def post(self, request, *args, **kwargs):
    #     return super().create(request, *args, **kwargs)

class ArticleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    # @login_required
    # def put(self, request, *args, **kwargs):
    #     return super().update(request, *args, **kwargs)
    
    # @login_required
    # def patch(self, request, *args, **kwargs):
    #     return super().partial_update(request, *args, **kwargs)
    
    # @login_required
    # def delete(self, request, *args, **kwargs):
    #     return super().destroy(request, *args, **kwargs)

