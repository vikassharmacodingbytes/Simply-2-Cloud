# Generated by Django 4.0.3 on 2024-07-15 05:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('batch', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='batchmodel',
            name='batch_days',
            field=models.JSONField(),
        ),
    ]
