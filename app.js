// Récuperation des sous ID et l'implémentation des textes , navbar et footer , card

var nt = document.querySelector("#nav_title");
nt.innerHTML='JAVASCRIPT TASK BY ABID SAIF';

var ft = document.querySelector("#footer_title");
ft.innerHTML='Copyright ABID SAIF';

 const productList = document.querySelector('#card_articles');

//  supprimer des articles



// load product items content from JSON File

 fetch("products.json")
   .then(response => response.json())
   .then(data => {
     let html = '';
       data.forEach(product => {
         html += `
       <span id="card">
         <div id="id">${product.id}</div>
         <div id="img"><img src="${product.image}"></div>
         <div id="nom">${product.name}</div>
         <div id="category">${product.category}</div>
         <div id="color">${product.color}</div>
         <div id="size">${product.size}</div>
         <div id="price">${product.price}$</div>
         <div id="edit">edit</div>
         <div id="delete">delete</div>
      </span>  `;
       });
        productList.innerHTML = html;
   })