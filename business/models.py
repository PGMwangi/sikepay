from django.db import models

# Create your models here.
class business(models.Model):
    business_name = models.CharField(max_length=30)
    contact_number = models.IntegerField(blank=False)
    email = models.EmailField(max_length=100)
    country = models.CharField(max_length=100)
    street_address = models.CharField(max_length=100)
    streetaddress2 = models.CharField(max_length=100)
    city = models.CharField(max_length=30)
    region = models.CharField(max_length=30)
    postalcode = models.CharField(max_length=100)
    password = models.CharField(max_length=30)
    confirmpassword = models.CharField(max_length=30)

    def __str__(self):
        return self.business_name

    def __str__(self):
        return self.contact_number

    def __str__(self):
        return self.email

    def __str__(self):
        return self.country

    def __str__(self):
        return self.street_address

    def __str__(self):
        return self.streetaddress2

    def __str__(self):
        return self.city

    def __str__(self):
        return self.region

    def __str__(self):
        return self.postalcode

    def __str__(self):
        return self.password
