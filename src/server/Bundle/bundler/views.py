# -*- coding: utf-8 -*-


from __future__ import unicode_literals
from django.shortcuts import render
import sys

filePath = 'bundler.html'
with open(filePath) as f:
    lines = f.readLines()
html = '\n'.join(lines)
from django.http import HttpResponse
def index(request):
    return HttpResponse(html)