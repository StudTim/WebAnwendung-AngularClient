### STAGE 1: Build ###
FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY ./client/package.json ./package.json
COPY ./client/package-lock.json ./package-lock.json
RUN npm i -g @angular/cli
RUN npm install
COPY ./client .
RUN ng build --prod

### STAGE 2: Run ###
FROM nginx:mainline-alpine
COPY ./client/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/client /usr/share/nginx/html




# FROM node:14-alpine

# WORKDIR /angular-client/client

# COPY client/package*.json ./

# EXPOSE 4200

# RUN npm install -g @angular/cli \
#     && npm install 

# # Serve auf dem Localhost zum Dev. poll checkt alle 2sek nach änderung
# CMD ng serve --host 0.0.0.0 --disableHostCheck





# # Folgenden Dockerfile Lines zum Projekt erzeugen
# FROM node:14-alpine
# ENV ANGULAR_APP_NAME=client
# EXPOSE 4200
# RUN npm install -g @angular/cli
# CMD ng new ${ANGULAR_APP_NAME} --routing=true --style=scss \
#     && sleep 3600
#
# # Sleep wird nur zum erstellen benötigt um weitere Abhängigkeiten über Shell hinzuzufügen
# # Dann über shell zum Container connecten und Nachträglich in sh ausführen:
# ng new ${ANGULAR_APP_NAME} --routing=true --style=scss
# cd /${ANGULAR_APP_NAME}
# npm install animate.css --save
# npm i -s @angular/flex-layout @angular/cdk