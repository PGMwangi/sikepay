from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import table, client_update_profile
from django.contrib.auth.models import User
from django.contrib import messages

def login(request):
    return render(request, 'login.html')

# def sighup(request):
#     context={}
#     context={}
#     context['form']=User
#     return render(request,'signup.html',context)
#     if request.method=='post':
        

#         else:
#         form=User()
# return render(request,'signup.html',{'form':form});

def signup(request):
     if request.method == 'POST':
         Firstname = request.POST['first-name']
         Lastname = request.POST['last-name']
         surname = request.POST['surname']
         Email = request.POST['email']
         Phone_number = request.POST['phone-number']
         Age = request.POST['age']
         Gender = request.POST['gender']
         nationality = request.POST['nationality']
         City = request.POST['city']
         country = request.POST['country']
         address1 = request.POST['address1']
         Address2 = request.POST['address2']
         PostalCode = request.POST['postal-code']
         Password = request.POST['create-password']
         confirmPassword = request.POST['confirm-password']

         if Password == confirmPassword:
            if table.objects.filter(Email=Email).exists():
                messages.info(request,'Email already used')
                return redirect('signup.html')

            elif table.objects.filter(Phone_number=Phone_number).exists():
                messages.info(request,'phonenumber already exists')
                return redirect('signup.html')
            else:
                user=table.objects.create(Firstname=Firstname, Lastname=Lastname, surname=surname, Email=Email,Phone_number=Phone_number,Age=Age, Gender=Gender,nationality=nationality, City=City,country=country,address1=address1,Address2=Address2,PostalCode=PostalCode,Password=Password)
                user.save()
                return redirect('dashboard.html')
         else:
            messages.info(request,'password is not the same')
            return redirect('signup.html')
     else:
        return render(request, 'signup.html')
def dashboard(request):
    return render(request, 'dashboard.html')

def aboutus(request):
    return render(request, 'about-us.html')

def businessregform(request):
    return render(request, 'business reg form.html')

def choose_wallet(request):
    return render(request, 'choosewallet.html')

def client_profile(request):
    return render(request, 'client_profile.html')

def client_update_profile(request):
    
    return render(request, 'client_update_profile.html')


def client_update(request):
    return render(request, 'client_update.html')

def demo(request):
    return render(request, 'demo.html')

def faqs(request):
    return render(request, 'faqs.html')

def features(request):
    return render(request, 'features.html')

def forgot_password(request):
    return render(request, 'forgot_password.html')

def helpcenter(request):
    return render(request, 'helpcenter.html')

def HELPLINE(request):
    return render(request, 'HELPLINE.html')

def history(request):
    return render(request, 'history.html')

def index(request):
    return render(request, 'index.html')

def nav(request):
    return render(request, 'nav.html')

def pay(request):
    return render(request, 'pay.html')

def rateus(request):
    return render(request, 'rateus.html')

def remove_wallet(request):
    return render(request, 'removewallet.html')

def services(request):
    return render(request, 'services.html')

def shop_ver_page(request):
    return render(request, 'shop varification page.html')

def side(request):
    return render(request, 'side.html')

def transaction(request):
    return render(request, 'transaction.html')

def update_shop_profile(request):
    return render(request, 'update shop profile.html')

def verification_page(request):
    return render(request, 'verification_page.html')

def add_wallet(request):
    return render(request, 'add-wallet.html')

def shopvarificationpage(request):
    return render(request, 'shopvarificationpage')




    

    
    
