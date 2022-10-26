from django.db import models


# Create your models here.

class Servicefifteen(models.Model):
    pay_id = models.IntegerField("Pay ID", max_length=10)
    date = models.DateTimeField("Date and Time")

