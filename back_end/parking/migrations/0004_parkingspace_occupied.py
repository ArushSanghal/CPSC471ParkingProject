# Generated by Django 4.2.11 on 2024-04-16 22:34

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("parking", "0003_alter_payment_cc_number_alter_payment_cvc"),
    ]

    operations = [
        migrations.AddField(
            model_name="parkingspace",
            name="occupied",
            field=models.BooleanField(default=False),
        ),
    ]
