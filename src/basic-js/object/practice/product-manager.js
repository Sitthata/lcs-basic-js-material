export default class ProductManager {
    constructor() {
    this.products = [];
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
