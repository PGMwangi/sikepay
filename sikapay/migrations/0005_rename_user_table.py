# Generated by Django 4.1.5 on 2023-02-05 04:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sikapay', '0004_rename_county_user_country'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='user',
            new_name='table',
        ),
    ]
