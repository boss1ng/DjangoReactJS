from django.contrib import admin
from .models import Article

# Register your models here.

# admin.site.register(Article)

# To customize admin dashboard database table:
@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('id', 'title', 'description')
    list_display = ('id', 'title', 'description')
    # date_hierarchy = 
    # ordering = 
    