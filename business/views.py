from django.shortcuts import render,redirect
from .models import business
from django.contrib import messages
from rest_framework import viewsets
from .serializers import BusinessSerializers

# Create your views here.
class BusinessViewSet(viewsets.ModelViewSet):
    queryset =business.objects.all()
    serializer_class = BusinessSerializers

def businessregform(request):
    if request.method == 'POST':
         business_name = request.POST['business name']
         contact_number = request.POST['contact number']
         email = request.POST['email']
         country = request.POST['Country']
         street_address = request.POST['Street Address']
         streetaddress2 = request.POST['Street address 2']
         city = request.POST['city']
         region = request.POST['Region']
         postalcode = request.POST['Postal/Zip code']
         password = request.POST['password']
         confirmpassword = request.POST['confirm password']

         if password == confirmpassword:
            if business.objects.filter(email=email).exists():
                messages.info(request,'Email already used')
                return redirect('business reg form')
            elif business.objects.filter(contact_number=contact_number).exists():
                messages.info(request,'phonenumber already exists')
                return redirect('business reg form')
            else:
                user=business.objects.create(business_name=business_name, contact_number=contact_number, email=email, region=region,postalcode=postalcode, city=city,country=country,street_address=street_address,streetaddress2=streetaddress2,password=password)
                user.save()
                return redirect('dashboard')
         else:
            messages.info(request,'password is not the same')
            return redirect('business reg form')
    else:
        return render(request, 'business reg form.html')

def dashboard(request):
    return render(request, 'dashboard.html')

