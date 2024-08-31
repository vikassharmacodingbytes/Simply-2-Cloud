from django.contrib import admin
from django.urls import path
from simply2cloudwebhook.views import MessageWebHooks, SendFirstMessage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('test/',SendFirstMessage.as_view(), name=""),
    path('webhook/', MessageWebHooks.as_view(), name="webhook")
]
