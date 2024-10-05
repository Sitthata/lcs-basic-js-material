import ProductManager from "./product-manager";
import data from './products.json'

const main = () => {
    testProduct();
}


const testProduct = () => {
    const productManager = new ProductManager();
    data.forEach((product) => productManager.addProduct(product));

    console.log(productManager.products)
}

main()