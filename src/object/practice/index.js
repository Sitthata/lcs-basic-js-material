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

  //const noNeed = productManager.deleteProduct("p001")
  //console.log(noNeed);
  
  //productManager.clearProduct()
  //console.log(productManager.products);

  productManager.updateProduct("p002", {name: "Laptop"})
  //console.log(productManager.products);
  
  //console.log(productManager.averagePrice());
  //console.log(productManager.filterProductsByCategory("Electronic"));
  //console.log(productManager.sortedProductByPrice("descending"));
  console.log(productManager.getLowInventoryProducts(100));
};

main();
