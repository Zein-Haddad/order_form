let totalElem;
let tempatPesan;
let Products = [
    {
        name: "Cappucino",
        price: "35000",
        active: false
    },
    {
        name: "Green Tea Latte",
        price: "40000",
        active: false
    },
    {
        name: "Fish and Chips",
        price: "50000",
        active: false
    },
    {
        name: "Tuna Sandwhich",
        price: "45000",
        active: false
    },
    {
        name: "Mineral Water",
        price: "8000",
        active: false
    },
    {
        name: "French Fries",
        price: "18000",
        active: false
    }
];

document.addEventListener("DOMContentLoaded", function () {
    totalElem = document.getElementById('total');
    tempatPesan = document.getElementById('tempat-pesan');
    loadPesanan();
});

function loadPesanan () {
    let productsElem = '';

    Products.forEach (function (product, i) {
        let additionalElem = (product.active) ? 'text-white bg-success' : '';

        productsElem += `<div class="card card-hover mb-2 ${additionalElem}" onclick="order(${i})">
                            <div class="card-body card-size d-flex justify-content-between">
                                <p class="lead">${product.name}</p>
                                <p class="lead">Rp${product.price}</p>
                            </div>
                        </div>`;
    });

    tempatPesan.innerHTML = productsElem;
    totalElem.innerHTML = "Rp" + calcTotalPrice();
}

function order (id) {
    Products[id].active = !Products[id].active;
    loadPesanan();
}

function calcTotalPrice () {
    let total = 0;
    Products.forEach (function (product) {
        if (product.active) total += Math.floor(product.price);
    });
    return total;
}