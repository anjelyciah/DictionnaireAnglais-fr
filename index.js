let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let inputSynonyme =document.querySelector('.input2')
let bntSyno = document.querySelector('.btn-syno')
let inputAntonyme =document.querySelector('.input3')
let btnAnto = document.querySelector('.btn-anto')


//recherche de definitions
btn.addEventListener('click' , chercher)

function chercher(){

    let value = input.value
    let resultat = document.querySelector('.resultat')
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+value

    fetch(url)
    .then((Response)=>Response.json())
    .then ((data)=>{

        data.map((element)=>{

            let Definition = element.meanings[0].definitions
            Definition.forEach(index => {
           
                    let li = document.createElement('li')
                    resultat.appendChild(li)
                    li.textContent = index.definition
                    
            });
        })

    })

    .catch((error)=>{
         alert("la definition de ce mot n'existe plus dans mot dictionnaire")

        })

    }

// recherche de Synonymes
bntSyno.addEventListener('click' , cherche)

function cherche(){

    let value = inputSynonyme.value
    let resultat2 = document.querySelector('.resultat2')
        
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+value
        fetch(url)
            
        .then((Response)=>Response.json())
        .then ((data)=>{
        
            data.map((element)=>{
        
                let Synonyme = element.meanings[0].synonyms
                Synonyme.forEach(index => {
                   
                    let li = document.createElement('li')
                    resultat2.appendChild(li)
                    li.textContent = index
                          
                            
                        
                });
            })
                
        })


        .catch((error)=>{
            alert("la synonyme de ce mot n'existe plus dans mot dictionnaire")

        })


    }
//recherche de antonyme
btnAnto.addEventListener('click' , cherch)

function cherch(){

    let value = inputAntonyme.value
    let resultat3 = document.querySelector('.resultat3')
        
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+value
        fetch(url)
            
        .then((Response)=>Response.json())
        .then ((data)=>{
        
            data.map((element)=>{
        
                let Synonyme = element.meanings[0].antonyms
                Synonyme.forEach(index => {
                   
                    let li = document.createElement('li')
                    resultat3.appendChild(li)
                    li.textContent = index
                          
                            
                        
                });
            })
            console.log(data)
                
        })


        .catch((error)=>{
            alert("l'antonymes de ce mot n'existe plus dans mot dictionnaire")

        })

    }