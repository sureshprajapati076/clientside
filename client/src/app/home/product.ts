class Product {

    constructor() {

    }

    id: BigInteger
    name: String
    description: String
    expiryDate: Date
    quantity: BigInteger
    vendor: { id: BigInteger, address: String, phone: String }


}