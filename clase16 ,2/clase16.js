const div= document.createElement("div");
document.body.appendChild(div);

async function getData(){
    let url= "https://jsonplaceholder.typicode.com/albums/1/photos"
    try{
        const resp = await fetch(url);
        const datos =await resp.json();
        return datos;
    }catch{
        console.log("error");
    }
} 

async function getMap(){
    try{
        const data = await getData();

        data.map((element)=>{
            obj(element.title, element.url, element.thumbnailUrl)
        })

    }catch{
console.log("error")
    }
}

function obj(title,url1,url2){
const divObj= document.createElement("div");
const titleObj= document.createElement("h1");
const urlUno=document.createElement("img");
const urlDos=document.createElement("img");
divObj.className="objetos";

div.appendChild(divObj);
divObj.appendChild(titleObj);
divObj.appendChild(urlUno);
divObj.appendChild(urlDos);

titleObj.textContent=`${title}`;
urlUno.setAttribute("src", `${url1}`);
urlDos.setAttribute("src", `${url2}`);

}

getMap();