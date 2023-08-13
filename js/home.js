// @ts-nocheck

function search() {
    //= getAllProduct
    var promise = axios({
        method: "GET",
        url: "https://shop.cyberlearn.vn/api/Product"
    });
    promise
        .then(function (result) {
            renderProducts(result.data.content)//dau vao la mang


        })
        .catch(function (err) {
            console.log(err);
        });
}
search();
function renderProducts(data) {
    //input: dau vao co data, du lieu goi tu  API
    //
    // output: render ra danh sach(mang) product tu data

    //Du lieu object tu API goi ve
    var content = '';
    for (var i = 0; i < data.length; i++) {
        const product = new Product(data[i])
        content += `
        <div class="col-lg-4  col-sm-12  mt-5">
            <div  class="card product_item w-sm-auto">
             <a class="text-dark " href="./detail.html?productid=${product.id}">
                <img class="img-fluid" src=${product.image}  alt=${product.name}>
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.shortDescription}
                </p>
                </div>
                            </a>
                <div class="card-footer">
                <div class="d-flex">
                    <button class="btn btn-warning btn_buynow w-75 rounded-0">Buy now</button>
                    <div class="btn_price p-2 bg-secondary text-white w-25 h-100 fw-bold">${product.price}$</div>
                </div>
                </div>
            </div>
            </div>
    `
    }

    document.getElementById("showProduct").innerHTML = content

}