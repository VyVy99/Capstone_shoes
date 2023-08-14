// @ts-nocheck
const mapIDDetail = {
    "product_image": "product_image",
    "product_name": "product_name",
    "product_deps": "product_deps",
    "product_size": "product_size",
    "product_price": "product_price"

}

function getIdProduct(id) {
    const promise = axios({
        method: "GET",
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`

    })
    promise
        .then(function (result) {
            renderProduct(result.data.content)
        })
        .catch(function (err) {
            console.log(err);
        })
}

function renderProducts(data) {
    //input: dau vao co data, du lieu goi tu  API
    //
    // output: render ra danh sach(mang) product tu data

    //Du lieu object tu API goi ve

    var content = '';
    for (var i = 0; i < data.length; i++) {
        content += `
        <div class="col-lg-4 col-sm-12 mt-5">
            <div  class="card product_item" >
             <a class="text-dark " href="./detail.html?productid=${data[i].id}">
                <img class="img-fluid" src=${data[i].image}  alt=${data[i].name}>
                <div class="card-body">
                <h5 class="card-title">${data[i].name}</h5>
                <p class="card-text">${data[i].shortDescription}
                </p>
                </div>
                            </a>
                <div class="card-footer">
                <div class="d-flex">
                    <button class="btn btn-warning btn_buynow w-75 rounded-0">Buy now</button>
                    <div class="btn_price p-2 bg-secondary text-white w-25 h-100 fw-bold">${data[i].price}$</div>
                </div>
                </div>
            </div>
            </div>
    `
    }

    document.getElementById("showProduct").innerHTML = content;
}

function renderProduct(data) {
    
    const product = new Product(data);
    const productSize = product.size;
    let renderSize = () => {
        let content = '';
        for (i = 0; i < productSize.length; i++) {
            content += `
                <button type="button" class="mx-1 btn btn-info">${productSize[i]}</button>
            `;
        }
        return content;
    };

    if(product){
        document.getElementById(mapIDDetail.product_image).src = product.image;
        document.getElementById(mapIDDetail.product_name).innerHTML = product.name;
        document.getElementById(mapIDDetail.product_deps).innerHTML = product.description;
        document.getElementById(mapIDDetail.product_size).innerHTML = renderSize();
        document.getElementById(mapIDDetail.product_price).innerHTML = product.price;

        renderProducts(product.relatedProducts);
        console.log(product.size);
    }
}

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('productid');
    // console.log('search',window.location.search);
    getIdProduct(id)
    // console.log('id', id);
}