// Récuperation des sous ID et l'implémentation des textes , navbar et footer , card

var nt = document.querySelector("#nav_title");
nt.innerHTML='JAVASCRIPT TASK BY ABID SAIF';

var ft = document.querySelector("#footer_title");
ft.innerHTML='Copyright ABID SAIF';

// load product items content from JSON File

const productList = document.querySelector('#card_articles');

 fetch("products.json")
   .then(response => response.json())
   .then(data => {
     let html = '';
       data.forEach(product => {
         html += `
       <span id="card">
         <div id="id_card">${product.id}</div>
         <div id="img_card"><img src="${product.image}"></div>
         <div id="nom_card">${product.name}</div>
         <div id="category_card">${product.category}</div>
         <div id="color_card">${product.color}</div>
         <div id="size_card">${product.size}</div>
         <div id="price_card">${product.price}$</div>
      </span>  `;
       });
        productList.innerHTML = html;
   });

//  création des document objects model

function create_items() {
const card = document.createElement('span');
card.id = 'card';

const id_card = document.createElement('div');
id_card.id ='id_card';
document.querySelector('#card').appendChild(id_card);

const img_card = document.createElement('div');
img_card.id ='img_card';
document.querySelector('#card').appendChild(img_card);

const nom_card = document.createElement('div');
nom_card.id ='nom_card';
document.querySelector('#card').appendChild(nom_card);

const category_card = document.createElement('div');
category_card.id ='category_card';
document.querySelector('#card').appendChild(category_card);

const color_card = document.createElement('div');
color_card.id ='color_card';
document.querySelector('#card').appendChild(color_card);

const size_card = document.createElement('div');
size_card.id ='size_card';
document.querySelector('#card').appendChild(size_card);

const price_card = document.createElement('div');
price_card.id ='price_card';
document.querySelector('#card').appendChild(price_card);

const edit_button = document.createElement('button');
edit_button.id ='edit';
document.querySelector('#card').appendChild(edit_div);

const delete_button = document.createElement('button');
delete_button.id ='delete';
document.querySelector('#card').appendChild(delete_div);
};

// delete button + supprimer des articles
function delete_items() {
 
};
