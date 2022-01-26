# Angular Client
Autor: Tim Schrader Datum: 22.10.2020

---

[[_TOC_]]

## TLDR
**Angular** ist ein **Webapplikationsframework** welches auf **Typescript** basiert weiter Infos findet man auf [WIKI](https://de.wikipedia.org/wiki/Angular)

Dieses Projekt basiert auf der [AngularCLI](https://github.com/angular/angular-cli) Version 10.1.7

## Developing

Zum Starten Befehle ausführen:

`npm install underscore --save` (Underscore Package wird von ANgular sonst nicht mit installiert)

`ng serve --proxyConfig=src/config/proxy-dev.json`

## Vorwort
Wir wollen mit diesem Framework eine kleine GUI zu dem Projekt Patienten und PatientenHistorie erstellen. Angula CLI ist ein Tool mit dessen Hilfe ein Projekt Grundgerüst generiert wird, sowie beim Starten ein Server mit Autoreload. Damit lassen sich Codeänderungen live verfolgen.

## Docker Entwicklungsumgebung
Ein Docker Container hilft uns beim Entwickeln. Durch ein Dockerfile, sowie Docker-Compose File lässt sich das Projekt erstellen. Nach dem erstellen wird das Dockerfile so umgeschrieben, das andere Entwickler nur die Dockerfile ausführen müssen, die Dependencies werden dann aus dem *package.json* ausgelesen und wieder mit installiert.

## Erstellung des Projektes in Docker 
Vorliegende Ordnerstruktur:

├── angular-client

│   ├── "ANGULAR_APP_NAME" **<-Wird von Angular erzeugt**

│   ├── Dockerfile

├── docker-compose.yml
└──.dockerignore

Zum *erstellen* eines Projekters wird folgende *Dockerfile* benötigt:
```
FROM node:14-alpine                 # Image welches verwendet wird
ENV ANGULAR_APP_NAME=client         # ENV der Name der Applikation  
EXPOSE 4200                         # Port erreichbar über localhost:(PORT)
RUN npm install -g @angular/cli     # AngularCLI Global installieren
CMD ng new ${ANGULAR_APP_NAME} --routing=true --style=scss \
    && sleep 3600                   # Erstellt ein neues Projekt mit Namen vorher festgelegt über ENV
                                    # Sleep wird nur zum erstellen benötigt um weitere Abhängigkeiten manuell über die Shell hinzuzufügen
```
Und die dazugehörige *Docker-Compose*
```
  angular-client:
    container_name: angular
    build:
      context: ./angular-client
      dockerfile: Dockerfile
    ports:
      - '4200:4200'
    volumes:
      - ./angular-client:/angular-client
```

Nach dem *Docker-Compose up* ausgeführt wurde, wird auf dem image angularCLI installiert und ein neues Projekt in dem gemountet Verzeichnis erstellt. Im nächsten Schritt verbindet man sich nun, durch den sleep Befehl noch laufenden Container, und kann weiter Dependecies installieren.
Wir führen dazu folgenden Befehle in der Shell aus:
```
cd /${ANGULAR_APP_NAME} # In das Projekt Verzeichnis wechseln
npm install animate.css --save
npm i -s @angular/flex-layout @angular/cdk
```

Später wird der Node_Modules Ordner nicht mitgepusht aber angular installiert die Dependencies automatisch mit, da diese in der *package.json* angegebn wurden.

Nun kann der Docker Container beendet werden und die *Dockerfile* sowie *Composefile* auf den Entwicklungsprozess angepasst werden

## Arbeiten mit Angular Projekt in Docker

Das *Dockerfile* sowie *Composefile* muss angepasst werden, zudem wird eine *.dockerignore* file hinzugefügt.

Ander Entwickler müssen nur das Repo pullen und können in der gleichen Umgebung entwickeln, Dependecies+Modules werden automatisch hinzugefügt.

**Dockerfile**
```
FROM node:14-alpine
WORKDIR /angular-client/client
COPY client/package*.json ./
EXPOSE 4200
RUN npm install -g @angular/cli \
    && npm install                  # über npm Install werden die Dependencies aus package.json installiert
CMD ng serve --host 0.0.0.0 --disableHostCheck --watch=true --liveReload=true --poll=2000
  # ng serve starten den Applikations Server und Relaoded bei änderungen am Code automtisch
```

**docker-compose.yml**
```
  angular-client:
    container_name: angular
    build:
      context: ./angular-client
      dockerfile: Dockerfile
    ports:
      - '4200:4200'
    volumes:
      - ./angular-client:/angular-client
      - /angular-client/client/node_modules
```

Zusätzlich wird noch eine *.dockerignore* erstellt um zu verhindern das die Modules vom Lokalen Verzeichnis mit ins Docker Image geschoben wird.

**.dockerignore**
```
*/node_modules
```

`Docker-Compose up` startet Angular Server, änderungen an Code sollten automatisch zu sehen sein, auf `http://localhost:4200`
