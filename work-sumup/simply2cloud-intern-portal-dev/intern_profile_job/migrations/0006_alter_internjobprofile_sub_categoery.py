# Generated by Django 4.0.3 on 2024-02-19 07:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sub_categoery', '0001_initial'),
        ('intern_profile_job', '0005_alter_internjobprofile_available_skills_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='internjobprofile',
            name='sub_categoery',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sub_categoery.subcategory'),
        ),
    ]
