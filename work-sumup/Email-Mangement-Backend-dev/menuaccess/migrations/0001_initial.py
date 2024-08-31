# Generated by Django 4.0.3 on 2024-07-06 05:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('submenu', '0002_alter_submenu_label_alter_submenu_link'),
        ('menu', '0002_alter_menu_name'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='MenuAccess',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('company_id', models.ForeignKey(limit_choices_to={'company_admin': True}, on_delete=django.db.models.deletion.CASCADE, related_name='company_id_menu_access', to=settings.AUTH_USER_MODEL)),
                ('menu_id', models.ManyToManyField(to='menu.menu')),
                ('sub_menu', models.ManyToManyField(to='submenu.submenu')),
                ('user_id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
