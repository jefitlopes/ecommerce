function criarCards(list) {

    let ul = document.querySelector('.product');
    ul.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
        let products = list[i];

        let liProduct = document.createElement('li');
        liProduct.setAttribute('class', 'liProduct');
        ul.appendChild(liProduct);

        let img = document.createElement('img');
        img.src = products.img;
        img.alt = products.nameItem;

        liProduct.appendChild(img);

        let categorie = document.createElement('small');
        categorie.setAttribute('class', 'categorie');
        categorie.innerHTML = products.tag;
        liProduct.appendChild(categorie);

        let h3 = document.createElement('h3');
        h3.innerHTML = products.nameItem;
        liProduct.appendChild(h3);


        let description = document.createElement('p');
        description.setAttribute('class', 'description');
        description.innerHTML = products.description;
        liProduct.appendChild(description);

        let value = document.createElement('p');
        value.setAttribute('class', 'value');
        value.innerHTML = `R$ ${products.value}`;
        liProduct.appendChild(value);

        let btnProduct = document.createElement('button');
        btnProduct.setAttribute('id', products.id)
        btnProduct.setAttribute('class', 'btnProduct');
        btnProduct.innerHTML = products.addCart;
        liProduct.appendChild(btnProduct)
    }
}
criarCards(data);


let favCount = 0;
let valueFinal = 0

function filterPrincipal() {
    let buttons = document.querySelectorAll('.btnProduct');

    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];

        button.addEventListener('click', function (e) {
            let idElement = e.target.id;
            let id = idElement;
            let product = searchProduct(id);

            let card = productCart(product);

            let productsCart = document.querySelector('.productsOnCart');
            productsCart.appendChild(card);

            favCount++;

            document.querySelector('.amountNumber').innerHTML = `${favCount}`;

            valueFinal += product.value;
            document.querySelector('.totalNumber').innerHTML = `R$ ${valueFinal}`
        })
    }

    function searchProduct(id) {
        for (let i = 0; i < data.length; i++) {
            let product = data[i];
            if (id == product.id) {
                return product;
            }
        }
    }

    function productCart(product) {

        let productOnCart = document.createElement('li');
        productOnCart.setAttribute('class', 'productOnCart')

        let imgContainer = document.createElement('div');
        imgContainer.setAttribute('class', 'imgContainer');

        let imgOnCart = document.createElement('img');
        imgOnCart.setAttribute('class', 'imgOnCart');
        imgOnCart.src = product.img;
        imgOnCart.alt = product.nameItem;

        let infoContainer = document.createElement('div');
        infoContainer.setAttribute('class', 'infoContainer');

        let nameOnCart = document.createElement('h3');
        nameOnCart.setAttribute('class', 'nameOnCart');
        nameOnCart.innerHTML = product.nameItem;


        let priceOnCart = document.createElement('p');
        priceOnCart.setAttribute('class', 'priceOnCart')
        priceOnCart.innerHTML = `R$ ${product.value}`;

        let removeProduct = document.createElement('button');
        removeProduct.setAttribute('id', 'prod_' + product.id)
        removeProduct.setAttribute('class', 'removeProduct');
        removeProduct.innerHTML = 'Remover';

        productOnCart.id = 'prod_' + product.id;

        removeProduct.addEventListener('click', function (e) {
            productOnCart.remove()

            favCount--;

            document.querySelector('.amountNumber').innerHTML = `${favCount}`;

            valueFinal -= product.value;
            document.querySelector('.totalNumber').innerHTML = `R$ ${valueFinal}`

        });


        productOnCart.appendChild(imgContainer);
        imgContainer.appendChild(imgOnCart);
        productOnCart.appendChild(infoContainer);
        infoContainer.appendChild(nameOnCart);
        infoContainer.appendChild(priceOnCart);
        infoContainer.appendChild(removeProduct);

        return productOnCart;
    }
}
filterPrincipal()

let todos = document.querySelector('.menu1');
let acess = document.querySelector('.menu2');
let calca = document.querySelector('.menu3');
let camis = document.querySelector('.menu4');

acess.addEventListener('click', function (e) {
    let li = document.querySelectorAll('.liProduct');
    for (let i = 0; i < li.length; i++) {
        li[i].remove();
    }
    criarCards(acessorios)
    e.preventDefault()
    filterPrincipal()
    console.log(criarCards(acessorios))
})

todos.addEventListener('click', function (e) {
    let li = document.querySelectorAll('.liProduct');
    for (let i = 0; i < li.length; i++) {
        li[i].remove();
    }
    criarCards(data)
    e.preventDefault()
    filterPrincipal()
    console.log(criarCards(data))
})

calca.addEventListener('click', function (e) {
    let li = document.querySelectorAll('.liProduct');
    for (let i = 0; i < li.length; i++) {
        li[i].remove();
    }
    criarCards(calcados)
    console.log(criarCards(calcados))
    e.preventDefault()
    filterPrincipal()
    console.log(criarCards(calcados))
})

camis.addEventListener('click', function (e) {
    let li = document.querySelectorAll('.liProduct');
    for (let i = 0; i < li.length; i++) {
        li[i].remove();
    }
    criarCards(camisetas)
    console.log(criarCards(camisetas))
    e.preventDefault()
    filterPrincipal()
    console.log(criarCards(camisetas))
})

