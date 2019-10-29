# Jsonphdemo

Uses the jsonserver-api Online REST API for Testing and Prototyping under https://jsonplaceholder.typicode.com/.

Used ressources for demo:

/todos	  200 todos

/users	  10 users
 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

# Publish app to github

with angular-cli-ghpages

``ng build --prod --base-href "https://marclabud.github.io/jsonphdemo/"``

for angular 6+

```npx ngh --dir=dist/jsonphdemo```

# Publish app to Docker



Dockerfile

```
FROM nginx
WORKDIR /usr/share/nginx/html
COPY /dist/jsonphdemo .
 ```
Build Production Version
 
```ng build --prod```

## commands in terminal

Build image ng-jsonphdemo

```docker image build -t ng-jsonphdemo .```

Run Image on port 3000

```docker run -p 3000:80 --rm ng-jsonphdemo```

Navigate to localhost:3000 in Browser to run the app.

## docker-compose

start

```docker-compose up```

stop

```docker-compose down```

literature:

[Medium Article: Your Angular apps as Docker containers](https://medium.com/@DenysVuika/your-angular-apps-as-docker-containers-471f570a7f2)
