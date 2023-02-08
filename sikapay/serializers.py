from .models import table
from rest_framework import serializers

class TableSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=table
        fields =['url','id','Firstname', 'Lastname', 'surname', 'Email', 'Phone_number', 'Age', 'Gender', 'nationality', 'City', 'country', 'address1', 'Address2', 'PostalCode', 'Password']

