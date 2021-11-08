# Article Api 
L'api back a été concus par Aurélien Vaast 
mon but c'est juste de maniler ces donnees et de travailler sur la partie fronts du projet. 
*Formation issus du webinaire openclassrooms

# Specifications

* A l’arrivée sur le site, les utilisateurs doivent voir les derniers articles
publiés par le site, avec le nom de l’article, sa date de publication, et
son contenu (image + texte). Les articles doivent apparaître du plus
récent au plus ancien.
* Sur chaque article est présente une étoile blanche. Si l’utilisateur
clique dessus, elle devient jaune et l’article est ajouté dans le
localstorage pour être conservé par l’utilisateur. Il doit être possible
de re-cliquer sur l’étoile pour retirer l’article des favoris.

## Téléchargement
Copier l'url du repository et faire un : 
* git clone https://github.com/mostuf/Javanews.git

## Installation
Vous devez avoir installé nodejs et npm sur votre machine : https://www.npmjs.com/get-npm
Positionnez vous sur le dossier backend à partir du projet
```
> cd ./backend/
```
Vous devrez probablement redémarrer l'ordinateur après installation.
Ensuite, installez les composants du projet.
```
> npm install
```
Vous pouvez maintenant lancer le projet en local pour l'utiliser
```
> node server
```
Le serveur sera accessible sur http://localhost:4000 par défaut.

Un fichier Javanews.json est présent dans le repository github, il sert à configurer l'outil Talend Api Tester pour envoyer des requêtes http vers le serveur.

Vous pouvez télécharger cette extension pour google chrome ici : https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm

Ce fichier de configuration peut aussi être chargé dans Postman, mais il peut y avoir des problèmes de compatibilité.

## API
Il y a actuellement 3 api sur le serveur :

Elles traitent toutes des articles. Un article est au format suivant : 

> {  
> &nbsp;&nbsp;&nbsp;"id" : int,  
> &nbsp;&nbsp;&nbsp;"title": string,  
> &nbsp;&nbsp;&nbsp;"publicationDate" : string,  
> &nbsp;&nbsp;&nbsp;"image" : string,  
> &nbsp;&nbsp;&nbsp;"content" : string  
> }  

### GetAll
```
GET /api/article
```
> Récupération des articles
> Format de retour :  
> [  
> &nbsp;&nbsp;&nbsp;{article},  
> &nbsp;&nbsp;&nbsp;...  
> ] 

### GetById
```
GET /api/article/:id
```
> Récupération d'un article par son id
> Format de retour :  
> {article}

### GetFavorites
```
POST /api/article/
@body 
{
    "favorites": [id]
}
```
> Récupération des articles favoris (non triés)  
> Format de retour :  
> [  
> &nbsp;&nbsp;&nbsp;{article},  
> &nbsp;&nbsp;&nbsp;...  
> ]  # javascript_api_article_project
# -javascript_api_article_project
