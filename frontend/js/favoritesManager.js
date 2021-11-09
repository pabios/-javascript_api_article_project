/**
 * Gestion des favoris, enregistrement d'un article en favoris, retrait d'un article des favoris et récupération de la liste des favoris
 */

addFavorite = (articleId) => {
    let listFavorites = getFavorites();
    listFavorites.push(articleId);
    saveFavorite(listFavorites);
}
saveFavorite =(listFavorites) => {
    localStorage.setItem('listFavorites',JSON.stringify(listFavorites));
}

getFavorites = () => {
    let listFavorites = localStorage.getItem('listFavorites');
    if(listFavorites == null){
        return [];
    }else{
        return JSON.parse(listFavorites);//desserealiser au format json
    }
}
