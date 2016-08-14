# django-ng2-starter
Boilerplate featuring Angular2 and Django.

## Project Setup
```python
#Create a new Virtual Environment.
virtualenv ng2env
cd ng2env

#Install django
pip install django

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