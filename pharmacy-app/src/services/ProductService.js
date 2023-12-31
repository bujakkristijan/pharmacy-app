class ProductService {

  initializeProducts() {
    const isInitialized = localStorage.getItem('isInitialized');
    if (isInitialized !== "true") {
      const initialProducts = [
          
              {
                id: "1",
                name: "Product 1",
                manufacturer: {
                  id: "m1",
                  name: "Manufacturer 1",
                },
                price: 19.99,
                expiryDate: "2023-12-31",
              },
              {
                id: "2",
                name: "Product 2",
                manufacturer: {
                  id: "m2",
                  name: "Manufacturer 2",
                },
                price: 29.99,
                expiryDate: "2023-12-31",
              },
              {
                id: "3",
                name: "Product 3",
                manufacturer: {
                  id: "m3",
                  name: "Manufacturer 3",
                },
                price: 39.99,
                expiryDate: "2023-12-31",
              },
              {
                id: "4",
                name: "Product 4",
                manufacturer: {
                  id: "m4",
                  name: "Manufacturer 4",
                },
                price: 49.99,
                expiryDate: "2023-12-31",
              }
      ];
      const initialManufacturers = [
          {
            "id": "m1",
            "name": "Manufacturer 1"
          },
          {
            "id": "m2",
            "name": "Manufacturer 2"
          },
          {
            "id": "m3",
            "name": "Manufacturer 3"
          },
          {
            "id": "m4",
            "name": "Manufacturer 4"
          }
        ];
      localStorage.setItem("productList", JSON.stringify(initialProducts));
      localStorage.setItem("manufacturerList", JSON.stringify(initialManufacturers));
      localStorage.setItem('isInitialized', 'true');
      }

  }

  getProducts() {
    const storedProducts = localStorage.getItem("productList");
    return storedProducts ? JSON.parse(storedProducts) : [];
  }

  getManufacturers(){
    const storedManufacturers = localStorage.getItem("manufacturerList");
    return storedManufacturers ? JSON.parse(storedManufacturers) : [];
  }

  saveProducts(products) {
    localStorage.setItem("productList", JSON.stringify(products));
  }

  addProduct(newProduct) {
    const products = this.getProducts();
    this.saveProducts([...products, newProduct]);
  }

  getProductById(id) {
      const products = this.getProducts();
      return products.find((product) => product.id === id) || null;
    }
    // problem je bio samo zato sto filter vraca listu a find objekat, pa nisam dobro setovao state u EditProductComponent
    // async getProductById(id) {
    //   return new Promise((resolve, reject) => {
    //     try {
    //       const products = this.getProducts();
    //       const filteredProduct = products.find((product) => product.id === id);
  
    //       if (filteredProduct) {
    //         resolve(filteredProduct);
    //       } else {
    //         resolve(null); // Resolve with null if product not found
    //       }
    //     } catch (error) {
    //       reject(error);
    //     }
    //   });
    // }
}

export default new ProductService();
