from django.db import models

class ContactMessage(models.Model):
    full_name = models.CharField(max_length=100)
    looking_for = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)  # optional, to track time

    def __str__(self):
        return f"{self.full_name} - {self.looking_for}"