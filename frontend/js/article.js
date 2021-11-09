/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 */
class Article{
    constructor(jsonArticle){
        // this.id = jsonArticle.id;
        // this.title = jsonArticle.title;
        // this.publicationDate = jsonArticle.publicationDate;
        // this.image = jsonArticle.image;
        // this.content = jsonArticle.content;
        
        jsonArticle && Object.assign(this,jsonArticle)
    }

    getFormatedDateArticle = (article) => {
        let timestamp = Date.parse(this.publicationDate);
        let date = new Date(timestamp);

        return date.toLocaleDateString();
    }
}