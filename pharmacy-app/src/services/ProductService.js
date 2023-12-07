class ProductService {
    constructor() {
      this.initializeProducts();
    }
  
    initializeProducts() {
      
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
        console.log(JSON.stringify(initialProducts));
        localStorage.setItem("productList", JSON.stringify(initialProducts));
        localStorage.setItem("manufacturerList", JSON.stringify(initialManufacturers));
      
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
  }
  
  export default new ProductService();
  