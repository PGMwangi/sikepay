from django.db import models

# Create your models here.
class table(models.Model):
    Firstname = models.CharField(max_length=30)
    Lastname = models.CharField(max_length=30)
    surname = models.CharField(max_length=30, blank=True)
    Email = models.EmailField(max_length=100)
    Phone_number = models.IntegerField(blank=False)
    Age = models.IntegerField(blank=True)
    Gender = models.CharField(max_length=10)
    nationality = models.CharField(max_length=100)
    City = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    address1 = models.CharField(max_length=50, blank=True)
    Address2 = models.CharField(max_length=50, blank=True)
    PostalCode = models.CharField(max_length=50, blank=True)
    Password = models.CharField(max_length=500)

    def __str__(self):
        return self.Firstname

    def __str__(self):
        return self.Lastname
 
    def __str__(self):
        return self.surname

    def __str__(self):
        return self.Email

    def __str__(self):
        return self.Phonenumber

    def __str__(self):
        return self.Age

    def __str__(self):
        return self.Gender

    def __str__(self):
        return self.nationality

    def __str__(self):
        return self.City

    def __str__(self):
        return self.County

    def __str__(self):
        return self.address1

    def __str__(self):
        return self.Address2

    def __str__(self):
        return self.PostalCode

    def __str__(self):
        return self.Password
    
    