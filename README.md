# django-ng2-starter
Boilerplate featuring Angular2 and Django.

This repository is based on the following tutorial series.

[Django and Angular2 Tutorial - Getting Staretd](https://4sw.in/blog/2016/django-angular2-tutorial/) 

and
 
[Django and Angular2 Tutorial part 2 - Rendering Templates](https://4sw.in/blog/2016/django-angular2-tutorial-part-2/)




## Project Setup
```python
#Create a new Virtual Environment.
virtualenv ng2env
cd ng2env

#Install django
pip install -r requirements.txt

#Fork or clone this repo.
git clone https://github.com/aswinkp/django-ng2-starter.git
cd django-ng2-starter/ngApp/

#install NPM dependencies
npm install
#start npm
npm start

#Open a new terminal window
cd ../
#Run Django Development Server
python manage.py runserver
```

Though we use django server npm should be running behind to compile typescript to javascript instantly. 