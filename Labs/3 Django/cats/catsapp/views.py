from django.shortcuts import render
from django.http import HttpResponse
import requests

def index(request):
    response = requests.get('https://api.thecatapi.com/v1/categories')
    response_json = response.json()
    # cat = (response_json[0]['url'])
    context = {
        'url': '',
        'categories': response_json
    }
    print(response_json)
        
# post logic
    if request.method == "POST":
        categ = request.POST['category']
        new_response = requests.get('https://api.thecatapi.com/v1/images/search?category_ids='+ categ)
        cat_pic = new_response.json()[0]['url']
        context['url']=cat_pic








    return render(request, 'catsapp/index.html', context)



