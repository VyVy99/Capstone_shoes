
// hia bao lop doi tuong
function Product(data) {
        this.id = data.id,//number
        this.name = data.name,//string
        this.alias = data.alias,//string
        this.price = data.price,// number
        this.description = data.description,
        this.size = data.size,//array<number>,
        this.shortDescription = data.shortDescription,
        this.quantity = data.quantity,//number
        this.deleted = data.deleted,//boolean
        this.categories = data.categories,//array<{id: string, category: string}>
        this.relatedProducts = data.relatedProducts,// array<number>
        this.feature = data.feature, // boolean
        this.image = data.image//string

}


