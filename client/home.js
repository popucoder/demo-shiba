const token = getCookie('token');
if(token != '') {
    const req = {
        action: 'verify token'
    }
    const url = BASE_API_URL + API_AUTHEN;
    sendRequest('POST', url, req, (res) => {
        if(res.status == 1) {
            $('.navbar__user').innerHTML = `
                <h4 class="navbar__username">${res.user.fullname}</h4>
            `
        }
    })
}

const ProductComponent = function (product) {
    return `
    <div class="product" data-id="${product.id}">
        <div class="product__imgbox">
            <img class="product__img" src="./product.jpg" alt="Picture Of Product">
        </div>

        <div class="product__desr">
            <h3 class="product__name">${product.name}</h3>
            ${
                product.sale != 0 &&  `<span class="product__price">${product.price}</span>`
            }
            <span class="product__sale">${product.price * (1-product.sale/100)}</span>
        </div>

        <div class="product__control">
            <div class="product__amount">
                <button class="btn product__amount-add">+</button>
                <input class="product__amount-val" type="number" value="1">
                <button class="btn product__amount-sub">-</button>
            </div>

            <button class="btn product__add-to-cart">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </div>
    `
}

{
    const url = BASE_API_URL + API_STORE;
    sendRequest('GET', url, {}, (res) => {
        const htmls = res.storeList.map(store => {
            return `
                <option value="${store.id}">${store.address}</option>
            `
        }).join('');

        $('.select-store').innerHTML = htmls;
    })
}

{
    const url = BASE_API_URL + API_PRODUCT;
    sendRequest('GET', url, {}, (res) => {
        const htmls = res.productList.map(product => {
            return ProductComponent(product);
        }).join('');

        $('.product-list').innerHTML = htmls;
        ProductComponentEvent.init();
    })
}

$('.btn-login').onclick = () => {
    window.location.href = BASE_URL + 'login';
}

$('.select-store').onchange = (e) => {
    const url = BASE_API_URL + API_PRODUCT + `?store=${e.target.value}`;
    sendRequest('GET', url, {}, (res) => {
        const htmls = res.productList.map(product => {
            return ProductComponent(product);
        }).join('');

        $('.product-list').innerHTML = htmls;
        ProductComponentEvent.init();
    })
}

//Product
const ProductComponentEvent = {
    control() {
        $$('.product__amount-add').forEach(ele => {
            ele.onclick = (e) => {
                let amountValue = e.target.parentElement.querySelector('.product__amount-val');
                let amount = amountValue.value;
                amountValue.value = ++amount;
            }
        })

        $$('.product__amount-sub').forEach(ele => {
            ele.onclick = (e) => {
                let amountValue = e.target.parentElement.querySelector('.product__amount-val');
                let amount = amountValue.value;
                if(amount == 1) return;
                amountValue.value = --amount;
            }
        })

    },

    addToCart() {
        $$('.product__add-to-cart').forEach(ele => {
            ele.onclick = (e) => {
                let product = getParent(e.target,'.product');
                let amount = product.querySelector('.product__amount-val').value;
                let storeId = $('.select-store').value;

                const req = {
                    action: 'add',
                    productId: product.dataset.id,
                    amount,
                    storeId,
                }
                
                const url = BASE_API_URL + API_CART;
                sendRequest('POST', url, req, (res) => {
                    
                })

            }
        })
    },

    init() {
        this.control();
        this.addToCart();
    }
}