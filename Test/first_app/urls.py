from django.urls import path, include
from . import views
# from .views import article_list, article_details
# from .views import ArticleList, ArticleDetails

from .views import ArticleViewSet, UserViewSet
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet, basename='users')

urlpatterns = [
    path('', include(router.urls)),
]

'''

# TOPICS: (1) Class Based API Views, (2) Mixins & Generics

    # path('articles/',           ArticleList.as_view(),          name = "Articles"),
    # path('articles/<int:id>/',  ArticleDetails.as_view(),       name = "Specific Article Details"),
    
# TOPICS: (1) Function Base API Views, (2) API View Decorators

    # path('',                    views.Index,        name = "Index / Home"),
    # path('articles/',           article_list,       name = "Articles"),
    # path('articles/<int:pk>/',  article_details,    name = "Specific Article Details"),

'''