from rest_framework import serializers
from .models import Article

from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token



class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'description']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        # In accessing USERS, the password field is initially available for viewing.
        # This code restricts the password to be viewed.
        extra_kwargs = {'password:': {
            'write-only': True,
            'required': True
        }}

    # Passwords must be hashed / encrypted.
    # Tokens must be dynamically generated in every user.
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user = user)
        return user

    






# class ArticleSerializer(serializers.Serializer):
#     title = serializers.CharField(max_length=100)
#     description = serializers.CharField(max_length=400)     # Serializers don't have TextField

#     def create(self, validated_data):
#         return Article.objects.create(validated_data)
    
#     def update(self, instance, validated_data):
#         instance.title = validated_data.get('title', instance.title)
#         instance.description = validated_data.get('description', instance.description)