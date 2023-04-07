from django.shortcuts import render, HttpResponse

from django.views.decorators.csrf import csrf_exempt
from .models import Article
from .serializers import ArticleSerializer
from django.http import JsonResponse
# from rest_framework.parsers import JSONParser

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from rest_framework.decorators import APIView

from rest_framework import generics
from rest_framework import mixins

from rest_framework import viewsets
from django.shortcuts import get_object_or_404

from rest_framework.authentication import TokenAuthentication
# from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User
from .serializers import UserSerializer




# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



                                                                                                                    # TOPIC:
                                                                                                                    # ViewSets & Routers
class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    # permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )

'''
                                                                                                                    # TOPIC:
                                                                                                                    # ViewSets & Routers
class ArticleViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

'''


'''
                                                                                                                    # TOPIC:
                                                                                                                    # ViewSets & Routers
class ArticleViewSet(viewsets.ViewSet):
    def list(self, request):
        article = Article.objects.all()
        serializers = ArticleSerializer(article, many = True)
        return Response(serializers.data)
    
    def create(self, request):
        serializers = ArticleSerializer(data = request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status = status.HTTP_201_CREATED)
        return Response(serializers.errors, status = status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk = None):
        queryset = Article.objects.all()
        article = get_object_or_404(queryset, pk = pk)
        serializers = ArticleSerializer(article)
        return Response(serializers.data)

    def update(self, request, pk = None):
        article = Article.objects.get(pk = pk)
        serializers = ArticleSerializer(article, data = request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status = status.HTTP_201_CREATED)
        return Response(serializers.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk = None):
        article = Article.objects.get(pk = pk)
        article.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
'''



'''
                                                                                                                    # TOPIC:
                                                                                                                    # Mixins & Generics

class ArticleList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get(self, request):
        return self.list(request)
    
    def post(self, request):
        return self.create(request)

class ArticleDetails(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    # REQUIERD. There will be an error once this specific code will not be incldued.
    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id = id)

    def put(self, request, id):
        return self.update(request, id = id)
    
    def delete(self, request, id):
        return self.delete(request, id = id)

'''


'''
                                                                                                                    # TOPIC:
                                                                                                                    # Class Based API Views

class ArticleList(APIView):
    
    def get(self, request):
        article = Article.objects.all()     # GET all articles from the database
        serializers = ArticleSerializer(article, many = True)
        return Response(serializers.data)
    
    def post(self, request):
        serializers = ArticleSerializer(data = request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status = status.HTTP_201_CREATED)
        return Response(serializers.errors, status = status.HTTP_400_BAD_REQUEST)

class ArticleDetails(APIView):

    def get_object(self, id):
        try:
            return Article.objects.get(id = id)

        except Article.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        article = self.get_object(id)
        serializers = ArticleSerializer(article)
        return Response(serializers.data)
    
    def put(self, request, id):
        article = self.get_object(id)
        serializers = ArticleSerializer(article, data = request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        return Response(serializers.errors, status = status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        article = self.get_object(id)
        article.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)

'''




'''
                                                                                                                    # TOPIC:
                                                                                                                    # API View Decorators
                                                                                                                    # Function Base API Views

def Index(request):
    return HttpResponse("It is working.")



# @csrf_exempt
@api_view(['GET', 'POST'])
def article_list(request):
    if request.method == 'GET':
        article = Article.objects.all()     # GET all articles from the database
        serializers = ArticleSerializer(article, many = True)
        return Response(serializers.data)

    elif request.method == 'POST':
        serializers = ArticleSerializer(data = request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data, status = status.HTTP_201_CREATED)
        return Response(serializers.errors, status = status.HTTP_400_BAD_REQUEST)



# @csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def article_details(request, pk):
    try:
        article = Article.objects.get(pk = pk)

    except Article.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializers = ArticleSerializer(article)
        return Response(serializers.data)

    elif request.method == 'PUT':   # PUT is Update
        serializers = ArticleSerializer(article, data = request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        return Response(serializers.errors, status = status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        article.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)

'''
