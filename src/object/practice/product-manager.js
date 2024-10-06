import { product } from "../../exports/node-export";

export default class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    const newProductKey = JSON.stringify(Object.keys(product));
    const validKey = JSON.stringify([
      "id",
      "name",
      "category",
      "price",
      "quantity",
    ]);
    if (newProductKey !== validKey) {
      console.log("Enter valid product details");
      return;
    }
    return this.products.push(product);
  }

  getProduct(id) {
    // Invalid
    if (typeof id !== "string") {
      console.log("Please enter a valid ID");
      return;
    }

    return this.products.find((product) => product.id === id);
  }

  updateProduct(id, newProduct) {
    const position = this.products.findIndex((product) => product.id === id)
    const product = this.products.find((product) => product.id === id);
    const updated = { ...product, ...newProduct}
    const allProduct = { ...this.products, ...updated}
    this.products[position] = updated
    return this.products
  }

  deleteProduct(id) {
    if (typeof id != "string") {
      return console.log("Please enter a valid ID");
    }
    const product = this.products.findIndex((product) => product.id === id)
    const deleted = this.products.splice(product, 1)
    return this.products.filter((product) => product != deleted)
  };

  clearProduct() {
    this.products.length = 0
    return this.products
  }

  averagePrice() {
    const listOfPrice = this.products.map((product) => product.price)
    const sum = listOfPrice.reduce((accumulator, currentValue) => accumulator + currentValue)
    return sum / listOfPrice.length
  }

  filterProductsByCategory(category) {
    return this.products.filter((product) => product.category === category)
  }

  sortedProductByPrice(order) {
    if (order === "asc") {
      return this.products.sort((a, b) => a.price - b.price)
    } else if (order === "desc") {
      return this.products.sort((a, b) => b.price - a.price)
    } else {
      return console.log("Please enter only 'asc' or 'desc'");
    }
  }

  getLowInventoryProducts(threshold) {
    return this.products.filter((product) => product.quantity < threshold)
  }
  // updateProduct(id, newProduct) => ("p001", { name: "Test", price: 10 })
  /* 
- Create a Product - Add a new product to the inventory.
- Read (Get) Product - Retrieve details of a specific product by its `id`.
- Update a Product - Update the details of an existing product.
- Delete a Product - Remove a product from the inventory by its `id`.
- Clear All Product - Clear all existing products on the list

---- Additions ----
- Calculate Average Price
- Filter Products by Category
- Method: `filterProductsByCategory(category: string): Product[]`
- Sort Products by Price: Return an array of products sorted by their price in ascending or descending order.
- Method: `sortProductsByPrice(order: 'asc' | 'desc'): Product[]`
- Find Products with Low Inventory: Return an array of products where the quantity is below a certain threshold.
- Method: `getLowInventoryProducts(threshold: number): Product[]`
    */
}
