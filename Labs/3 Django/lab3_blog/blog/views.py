from django.shortcuts import render, reverse
from django.http import HttpResponse, HttpResponseRedirect
from .models import Blogpost
from django.utils import timezone



def index(request):
    context = {
        'posts': Blogpost.objects.all().order_by('-date_created')
    }
    return render(request, 'blog/index.html', context)

def create(request):
    return render(request, 'blog/create.html')

def save(request):
    title = request.POST['title']
    post = request.POST['body']
    url = request.POST['url']
    public = 'public' in request.POST
    blogpost = Blogpost(title=title, post=post, url=url, public=public, user=request.user)
    blogpost.save()
    print(request.POST)
    return HttpResponseRedirect(reverse('blog:blog-home'))


def edit(request, edit_post_id):
    edit_posts = Blogpost.objects.get(id= edit_post_id)
    context = {
        'edit_posts': edit_posts
    }
    
    print(context)
    return render(request, 'blog/edit.html', context)


def edit_save(request, edit_post_id):
    print(request.POST)
    edit_post = Blogpost.objects.get(id=edit_post_id)
    edit_post.title = request.POST['title']
    edit_post.post = request.POST['body']
    print(edit_post.post)
    edit_post.save()
    return HttpResponseRedirect(reverse('users:profile'))


def delete(request, edit_post_id):
    delete_post = Blogpost.objects.get(id=edit_post_id)
    delete_post.delete()
    return HttpResponseRedirect(reverse('users:profile'))
    

