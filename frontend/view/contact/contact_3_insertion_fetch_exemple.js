/**
 * fichier Revision
 */

//ce fichier ne fait pas partie de la specification du projet
// exemple  insert avec une api post
let result = document.querySelector('#info')

// // // direBonjour = () => {
// // //     fetch("https://mockbin.com/request?greetings=salut")
// // //     .then((res)=>{
// // //         if(res.ok){
// // //             return res.json();
// // //         }
// // //     })
// // //     .then((value) =>{
// // //         console.log(value)
// // //          result.innerText = value.queryString.greetings;
// // //     })
// // // }

// // // let hello = document.getElementById('ask-hello');
// // // hello.addEventListener('click',direBonjour)


/**
 * api post envoyer par fomulaire
 */
let nom = document.querySelector('#nom')
let leForm = document.querySelector('#inscription')
send = (e) => {
    e.preventDefault();
    fetch('https://mockbin.com/request',
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({value: nom.value})// on convertie notre envoit en json
        }
    ).then((res) =>{
        if(res.ok){
            return res.json();
        }
    }).then((value) => {
        result.innerHTML = value.postData.text;
        console.log(value);
    })
}
leForm.addEventListener('submit',send)

