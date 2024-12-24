from django.db import models

class Server(models.Model):
    name = models.CharField(max_length=100)
    team = models.CharField(max_length=100)
    application = models.CharField(max_length=100)
    cpu = models.CharField(max_length=50)
    storage = models.CharField(max_length=50)
    ram = models.CharField(max_length=50)
    os = models.CharField(max_length=100)
    installed_packages = models.TextField()
    date_put_in_service = models.DateField()
    date_to_retire = models.DateField()
    description = models.TextField()

    def __str__(self):
        return self.name