const cards = document.querySelector(".cards");
let descriptionText;
function getData() {
    fetch('https://dummyjson.com/products')
        .then(data => data.json())
        .then(res => {
           res.products.map((item)=>{
            descriptionText =item?.description?.slice(0,50)
            cards.innerHTML+=`
            <div class="card">
                    <img src=${item.images[0]} alt="itemImg">
                    <h3>${item.title}</h3>
                    <p  id=${item.id}>${descriptionText}...<button onclick="loadMore('${item.description.replace(/'/g, "\\'")}','${item.id}')">More</button></p>
                    <span>${item.price}</span>
                </div>
            
            `
           })



        })

}
getData();



function changeMode(){
    if(document.body.style.backgroundColor=='black'){
        document.body.style.backgroundColor='white'
        document.querySelector('h1').style.color='black'
        document.querySelector('h2').style.color='black'
        document.querySelector('button').style.color='black'
        document.querySelector('footer').style.color='black'
        document.querySelector('header').style.backgroundColor='white'



    }
    else{
        document.body.style.backgroundColor='black'
        document.querySelector('h1').style.color='white'
        document.querySelector('h2').style.color='white'
        document.querySelector('button').style.color='white'
        document.querySelector('footer').style.color='white'
        document.querySelector('header').style.backgroundColor='black'



    }
}


function loadMore(text,id){
document.getElementById(id).innerHTML=text
}