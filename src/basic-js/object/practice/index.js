import ProductManager from "./product-manager";
import productList from "./products.json";

const main = () => {
  testProduct();
};

const test = () => {
  const productManager = new ProductManager();
  console.log(
    productManager.addProduct({
      id: "p005",
      name: "Notebook",
      category: "Stationery",
      quantity: 200,
      brah: "brah",
    })
  );
  console.log(productManager.products);
};

const testProduct = () => {
  const productManager = new ProductManager();
  productList.forEach((product) => productManager.addProduct(product));

  //console.log(productManager.products);
};

main();
