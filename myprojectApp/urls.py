
from django.urls import path
#now import the views.py file into this code
from . import views1, views2

urlpatterns= {
    # path('views1/', views1.views1),
    path('views1/', views1.emp_info),
    path('views2/', views2.views2),
}