# Generated by Django 4.1.5 on 2023-02-02 08:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sikapay', '0003_rename_signup_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='County',
            new_name='Country',
        ),
    ]
