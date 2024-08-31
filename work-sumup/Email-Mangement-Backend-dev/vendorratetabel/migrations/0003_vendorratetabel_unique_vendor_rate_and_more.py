# Generated by Django 4.0.3 on 2024-07-04 08:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendorratetabel', '0002_alter_vendorratetabel_company_id'),
    ]

    operations = [
        migrations.AddConstraint(
            model_name='vendorratetabel',
            constraint=models.UniqueConstraint(fields=('company_id', 'vendor_rate_name'), name='unique_vendor_rate'),
        ),
        migrations.AddConstraint(
            model_name='vendorratetabel',
            constraint=models.UniqueConstraint(fields=('company_id', 'vendor_prefix'), name='unique_vendor_customer_prefix'),
        ),
    ]
