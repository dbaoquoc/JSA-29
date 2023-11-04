let products = {
    data: [
        {
            id: 1,
            name: "1899",
            price: "25$",
            image: "image/1899.jpg"
        },

        {
            id: 2,
            name: "ANT MAN",
            price: "25$",
            image: "image/ant_man.jpg"
        },
        
        {
            id: 3,
            name: "AQUAMAN",
            price: "25$",
            image: "image/aquaman.jpg"
        },

        {
            id: 4,
            name: "ARROW",
            price: "25$",
            image: "image/arrow.jpg"
        },

        {
            id: 6,
            name: "BLACK ADAM",
            price: "25$",
            image: "image/Black_Adam.jpg"
        },

        {
            id: 7,
            name: "GAJAMAN",
            price: "25$",
            image: "image/gajaman.jpg"
        },

        {
            id: 8,
            name: "GAME OF THRONES",
            price: "25$",
            image: "image/game_of_thrones.jpg"
        },

        {
            id: 9,
            name: "INTERCEPTOR",
            price: "25$",
            image: "image/Interceptor.jpg"
        },

        {
            id: 10,
            name: "JOHN WICK",
            price: "25$",
            image: "image/john_wick.jpg"
        },

        {
            id: 11,
            name: "PLANE",
            price: "25$",
            image: "image/plane.jpg"
        },

        {
            id: 12,
            name: "THOR",
            price: "25$",
            image: "image/Thor.jpg"
        },

        {
            id: 13,
            name: "MEG",
            price: "25$",
            image: "image/meg.jpg"
        },

        {
            id: 14,
            name: "WEDNESDAY",
            price: "25$",
            image: "image/wednesday.jpg"
        },

        {
            id: 15,
            name: "MONEY HEIST",
            price: "25$",
            image: "image/money_heist.jpg"
        },
    ]
}


for (let items of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "addToCart(" + items.id + ")")
    btn.innerHTML = "Add to cart"
    container.appendChild(btn)

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function byGetProductById(id) {
    for (let items of products.data) {
        if (id == items.id) {
            return items;
        }
    }
}

var cart = []
// cart = [
//     {product: {id:1, name:'s', giaica:11}, quantity:1}
// ]
function addToCart(id) {
    let storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage);
    }

    let product = byGetProductById(id);
    let itemDetails = cart.find(items => items.product.id == id)
    if (itemDetails) {
        itemDetails.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

function showAll() {
    console.log("aa")
    var list = `<tr><th>Item</th><th>Value</th><th>Count</th><th>Delete</th><th>Update</th></tr>`
    for (var i =0; i <= localStorage.length - 1; i++) {
        if(localStorage.key(i)=="cart"){
            console.log("đúng")
            JSON.parse(localStorage.getItem('cart')).forEach(element => {
                list += `<tr><td>` + element.product.name + `</td><td>`
                    + element.product.price + `</td><td><input type="number" id="quantity` + element.product.id + `" value="` + element.quantity + `"</><td><button onclick="removeItem(` + element.product.id + `)">Xoa<button><th><button type="button" onclick="updateItem(` +element.product.id+ `)">Cập nhật<button/></th></tr>`;
            });
        }

        document.getElementById('list').innerHTML = list;
    }
}

/////////////////////////////////

function clearAll(){
    localStorage.removeItem('cart');
    document.getElementById('list').innerHTML = `<tr><th>Item</th><th>Value</th><th>Count</th></tr>`;
}

function removeItem(id){
    let storage = localStorage.getItem("cart");
    if(storage){
        cart = JSON.parse(storage);
    }
    console.log("After delete" + cart);
    cart = cart.filter(item => item.product.id != id);
    console.log("Before delete" + cart);
    localStorage.setItem('cart', JSON.stringify(cart))
}

function updateItem(id){
    let storage = localStorage.getItem('cart');
    if(storage){
        cart = JSON.parse(storage);
    }

        // let cartItem = '';

        // JSON.parse(localStorage.getItem('cart')).forEach(element =>{
        //     if(element.product.id == id){
        //         console.log("old" + element.quantity)
        //         let newvalue = document.getElementById("quantity" + JSON.parse(element.product.id)).value;
        //         console.log(newvalue);
        //         element.quantity = document.getElementById("quantity" + JSON.parse(element.product.id)).value;
        //         console.log("new" + element.quantity);
        //     }
        //     console.log(cart);
        //     localStorage.setItem('cart', JSON.stringify(cart))
        // }}
        // console.log("after update: " + cart);
        // console.log(cart);



    cart = cart.filter(item => item.product.id == id ? item.quantity = document.getElementById("quantity" + JSON.parse(item.product.id)).value : item)
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart))
}


// let shop = document.getElementById("shop");

// let basket = JSON.parse(localStorage.getItem("data")) || [];

// let generateShop = () => {
//   return (shop.innerHTML = shopItemsData
//     .map((x) => {
//       let { id, name, price, desc, img } = x;
//       let search = basket.find((x) => x.id === id) || [];
//       return `
//     <div id=product-id-${id} class="item">
//         <img width="220" src=${img} alt="">
//         <div class="details">
//           <h3>${name}</h3>
//           <p>${desc}</p>
//           <div class="price-quantity">
//             <h2>$ ${price} </h2>
//             <div class="buttons">
//               <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
//               <div id=${id} class="quantity">
//               ${search.item === undefined ? 0 : search.item}
//               </div>
//               <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;
//     })
//     .join(""));
// };

// generateShop();

// let increment = (id) => {
//   let selectedItem = id;
//   let search = basket.find((x) => x.id === selectedItem.id);

//   if (search === undefined) {
//     basket.push({
//       id: selectedItem.id,
//       item: 1,
//     });
//   } else {
//     search.item += 1;
//   }

//   // console.log(basket);
//   update(selectedItem.id);
//   localStorage.setItem("data", JSON.stringify(basket));
// };
// let decrement = (id) => {
//   let selectedItem = id;
//   let search = basket.find((x) => x.id === selectedItem.id);

//   if (search === undefined) return;
//   else if (search.item === 0) return;
//   else {
//     search.item -= 1;
//   }
//   update(selectedItem.id);
//   basket = basket.filter((x) => x.item !== 0);
//   // console.log(basket);
//   localStorage.setItem("data", JSON.stringify(basket));
// };
// let update = (id) => {
//   let search = basket.find((x) => x.id === id);
//   // console.log(search.item);
//   document.getElementById(id).innerHTML = search.item;
//   calculation();
// };

// let calculation = () => {
//   let cartIcon = document.getElementById("cartAmount");
//   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
// };

// calculation();
