/**
 * Gère l'affichage et les interactions de la page de contact
 */
let leForm = document.querySelector('.form')
let envoyer = document.querySelector('#envoyer')
let champs = document.querySelectorAll('.form-group > input,.form-group > textarea')
envoyer.addEventListener('click',function(){
    //leForm.reportValidaty();

        for(let input of champs){
            console.log(input)
            //input.reportValidaty();
        }

        // finir

    }
)