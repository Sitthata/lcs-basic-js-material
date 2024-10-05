import ProductManager from "./product-manager";
import productList from "./products.json";

const main = () => {
  test();
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
  const productManager1 = new ProductManager();
  const productManager2 = new ProductManager();
  productList.forEach((product) => productManager1.addProduct(product));

  console.log(productManager1.products);
  console.log(productManager2.products);

  // console.log(productManager.products)
};

main();
