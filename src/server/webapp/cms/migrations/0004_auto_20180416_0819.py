# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-04-16 08:19
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0003_auto_20180416_0815'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='test2',
            name='test_ptr',
        ),
        migrations.AddField(
            model_name='test',
            name='header',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='cms.Header'),
        ),
        migrations.DeleteModel(
            name='Test2',
        ),
    ]