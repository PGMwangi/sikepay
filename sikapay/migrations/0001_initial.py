# Generated by Django 4.1.5 on 2023-01-27 06:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='signup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Firstname', models.CharField(max_length=30)),
                ('Lastname', models.CharField(max_length=30)),
                ('surname', models.CharField(blank=True, max_length=30)),
                ('Email', models.EmailField(max_length=100)),
                ('Gender', models.CharField(max_length=10)),
                ('nationality', models.CharField(max_length=100)),
                ('City', models.CharField(max_length=100)),
                ('County', models.CharField(max_length=100)),
                ('address1', models.CharField(max_length=50)),
                ('Address2', models.CharField(max_length=50)),
                ('PostalCode', models.CharField(max_length=50)),
                ('Password', models.CharField(max_length=500)),
            ],
        ),
    ]
