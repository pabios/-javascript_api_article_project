/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

 fetch('http://localhost:4000/api/article/')
 .then(data => data.json() )
 .then(jsonListArticle => {
     for(let jsonArticle of jsonListArticle){
         let article = new Article(jsonArticle);
         document.querySelector('.container').innerHTML += `
           <div class="col-12 mt-5>
                <div class = "card article">
                    <div class = "card-header">
                        <h5 class="card-title d-flex justify-content-between"> 
                            ${article.title}
                        </h5>
                    </div>
                    
                    <div>
                        ${article.getFormatedDateArticle()}
                    </div>
                    <div>
                        <img src="http://localhost:4000/${article.image}"  class="card-img-top"/>
                    </div>
                    <span class="fa-stack fa-2x addFavorite" data-id="${article.id}">
                        <i class="fas fa-star fa-stack-1x"></i>
                        <i class="far fa-star fa-stack-1x"></i>
                    </span>
                    <div class="card-body">
                        <p class="card-text">${article.content}</p>
                    </div>
                </div>
           </div>
         `
     }
     document.querySelectorAll('.addFavorite').forEach(star =>{
         star.addEventListener('click',function(){
            addFavorite(this.dataset.id);
            this.setAttribute('class','fa-stack fa-2x addFavorite activated')
         })
     })
 })