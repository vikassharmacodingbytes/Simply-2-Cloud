# Generated by Django 4.0.3 on 2024-05-21 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('intern_experience', '0001_initial'),
        ('intern_profile_job', '0009_internjobprofile_short_desc'),
    ]

    operations = [
        migrations.AddField(
            model_name='internjobprofile',
            name='education',
            field=models.ManyToManyField(blank=True, to='intern_experience.jobexperience'),
        ),
    ]
