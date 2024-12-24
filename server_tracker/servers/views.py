from rest_framework.viewsets import ModelViewSet
from .models import Server
from .serializers import ServerSerializer

class ServerViewSet(ModelViewSet):
    queryset = Server.objects.all()
    serializer_class = ServerSerializer