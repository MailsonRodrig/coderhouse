class ProductManager {
 constructor() {
     this.products = [];
     this.currentId = 1;
 }

 addProduct(title, description, price, thumbnail, code, stock) {
     if (!title || !description || !price || !thumbnail || !code || !stock) {
         console.error("Todos os campos são obrigatórios.");
         return;
     }

     const existingProduct = this.products.find(product => product.code === code);
     if (existingProduct) {
         console.error("Código já existente.");
         return;
     }

     const newProduct = {
         id: this.currentId++,
         title,
         description,
         price,
         thumbnail,
         code,
         stock
     };

     this.products.push(newProduct);
 }

 getProductById(id) {
     const product = this.products.find(product => product.id === id);
     if (!product) {
         console.error("Não encontrado");
         return;
     }
     return product;
 }
}


const manager = new ProductManager();

manager.addProduct("Produto 1", "Descrição 1", 100, "thumbnail1.png", "ABC123", 10);
manager.addProduct("Produto 2", "Descrição 2", 200, "thumbnail2.png", "DEF456", 20);

console.log(manager.getProductById(1)); 
console.log(manager.getProductById(2)); 
console.log(manager.getProductById(3)); 
