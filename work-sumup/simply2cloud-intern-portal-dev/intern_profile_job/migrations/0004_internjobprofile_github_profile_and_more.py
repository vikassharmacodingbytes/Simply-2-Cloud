# Generated by Django 4.0.3 on 2024-02-15 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('intern_profile_job', '0003_alter_internjobprofile_available_skills_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='internjobprofile',
            name='github_profile',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='internjobprofile',
            name='linkedin_profile',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='internjobprofile',
            name='portfolio_link',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='internjobprofile',
            name='user_image',
            field=models.ImageField(blank=True, null=True, upload_to='job_profiles/'),
        ),
    ]
