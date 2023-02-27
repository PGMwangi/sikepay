from .models import business
from rest_framework import serializers


class BusinessSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=business
        fields=[ 'url','id','business_name', 'contact_number', 'email', 'country','street_address','streetaddress2','city','region','postalcode','password','confirmpassword']
