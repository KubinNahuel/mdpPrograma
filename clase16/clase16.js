const div= document.createElement("div");
document.body.appendChild(div)

async function getData(){
    let url="https://jsonplaceholder.typicode.com/posts";
    try{
        const resp= await fetch(url);
        return await resp.json()
    }catch{
console.log("error")
    }
}

async function getPhoto(){
    let url="https://jsonplaceholder.typicode.com/albums/1/photos";
    try{
        const resp= await fetch(url);
        return await resp.json()
    }catch{
console.log("error")
    }
}

async function getMap(){
    try{
        const data= await getData();
        const dataPhoto= await getPhoto();

        data.map((element, key)=>{
        objeto(element.title,element.body,element.userId)
        
        })
        dataPhoto.map((e)=>{
objetoPhoto(e.url)
        })
    }catch{
        console.log("error")
    }
}

function objeto(title, body, id){
const divObj= document.createElement("div");
divObj.className="objetos";

const titulo= document.createElement("h1");
const cuerpo= document.createElement("p");
const userId= document.createElement("p");

titulo.textContent=`${title}`;
cuerpo.textContent=`${body}`;
userId.textContent=`${id}`;

div.appendChild(divObj);
divObj.appendChild(titulo);
divObj.appendChild(cuerpo);
divObj.appendChild(userId);

}
function objetoPhoto(imagen){
    const divObj= document.createElement("div");
    const foto= document.createElement("img");
    foto.setAttribute("src",`${imagen}`)
    
    div.appendChild(divObj);
    divObj.appendChild(foto);
    
    }

getMap();