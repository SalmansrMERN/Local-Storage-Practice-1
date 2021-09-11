const productName = document.getElementById("product_name")
const ul = document.getElementById("product_list")
const add_item = () => {
    const productNameValue = productName.value;
    if (!productNameValue) {
        return;
    }

    displayOnUi(productNameValue);
    // ==== display data to UI ======

    addDataToLocal(productNameValue);

    // === add data to local storage ====

    productName.value = ""

}

const displayOnUi = name => {
    const li = document.createElement("li");
    li.innerText = name;
    ul.appendChild(li);
}

// ====== display input data on UI ======

const getDataFromLocal = () => {
    const cart = localStorage.getItem('product');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {};
    }
    return cartObj;
}
// ====== get data from local storage ========

const addDataToLocal = name => {
    const cart = getDataFromLocal();
    if (cart[name]) {
        cart[name] = cart[name] + 1;

    }

    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('product', cartStringified)

}

// ====== add data to local storage ========


const displayLocalStorgeData = () => {
    const cart = getDataFromLocal();
    for (const name in cart) {
        displayOnUi(name)
    }
}

const place_order = () => {
    ul.innerText = ""

}
// ====== display thatlocal storage data on UI ========

displayLocalStorgeData()