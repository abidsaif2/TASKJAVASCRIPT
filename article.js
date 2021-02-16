function Products(id,category,name,image,size,color,price){
    this.id = id,
    this.name = name,
    this.category = category,
    this.image = image,
    this.size = size,
    this.color = color,
    this.price = price
}

const product1 = new Products(1,"jeans","Ripped jeans","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg","XL","blue",20.99);
const product2 = new Products(2,"jeans","Boyfriend jeans","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg","S","blue",24.99);
const product3 = new Products(3,"shirts","Ripped sweatshirt","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg","XL","white",29.99);
const product4 = new Products(4,"jackets","Denim Jacket","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg","M","grey",40.99);
const product5 = new Products(5,"shirts","Longsleeve","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg","L","black",120.99);
const product6 = new Products(6,"jeans","Ripped jeans","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg","XL","blue",20.99);
const product7 = new Products(7,"jeans","Boyfriend jeans","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg","S","blue",24.99);
const product8 = new Products(8,"shirts","Ripped sweatshirt","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg","XL","white",29.99);
const product9 = new Products(9,"jackets","Denim Jacket","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg","M","grey",40.99);
const product10 = new Products(10,"shirts","Longsleeve","https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg","L","black",120.99);

let products = [];
products.push(product1,product2,product3,product4,product5,product6,product7,product8,product9,product10);

function populateTableList(){
    let listOfProducts = "";

    products.forEach(prod=>
        listOfProducts += `
        <tr class="text-center">
        <td><img src=${prod.image} class="img-fluid"></td>
            <th class="w-25 align-middle">${prod.id}</th>
            <th class="w-25 align-middle">${prod.category}</th>
            <th class="w-25 align-middle">${prod.name}</th>
            <th class="w-25 align-middle">${prod.size}</th>
            <th class="w-25 align-middle">${prod.color}</th>
            <th class="w-25 align-middle">${prod.prize}€</th>
          </tr>
          `   
      )
     
    document.getElementById('productList').innerHTML = listOfProducts;

}

 