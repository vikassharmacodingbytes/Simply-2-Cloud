# Generated by Django 4.0.3 on 2024-05-22 05:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('intern_profile_job', '0011_rename_education_internjobprofile_experience'),
    ]

    operations = [
        migrations.AddField(
            model_name='internjobprofile',
            name='github_profile',
            field=models.URLField(blank=True, null=True),
        ),
    ]
