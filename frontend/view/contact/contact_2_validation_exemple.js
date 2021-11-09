/**
 * fichier Revision
 */

// ce fichier  ne fais pas partie de la specification du projet
/**
 * permet de bloquer le bouton envoi 
 * tant que le code est invalide
 */
let leForm = document.querySelector('.form');

let email = document.querySelector('#email');
let code = document.querySelector('#code');
let info = document.querySelector('#info');
let message = document.querySelector('#message');
let envoyer = document.querySelector('#envoyer')



disableSubmit  = (disabled)=>{
    if(disabled){
        envoyer.setAttribute('disabled',true)
    }else{
        envoyer.removeAttribute('disabled')
    }
}

isValid = (code) => {
    return /^code-[0-9]{3,}/.test(code);
}

func_event_form = (e) => {
     if(/^code-[0-9]{3,}/.test(e.target.value)){
          info.innerText = 'code valide';
          disableSubmit(false);
     }else{
         info.innerText = 'code invalide | exemple valid code-123 ';
        disableSubmit(true)
    }


}


leForm.addEventListener('input',func_event_form)