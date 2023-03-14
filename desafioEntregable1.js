class ProductManager{
    constructor(){
        this.products = [];
        this.id = 0;
        
    }


    addProduct(title, description, price, thumbnail, code, stock) {
        if(this.products.some(product => product.code === code)) {
            console.log(`Lo siento, el código: ${code} ya existe, por favor coloque otro código.`);
            return;
        }else{
            this.id++;
            this.products.push({
                title:title,
                description:description,
                price:price,
                thumbnail:thumbnail,
                code:code,
                stock:stock,
                id:this.id
            });
            console.log(`Producto agregado exitosamente.`)
        }
    }

    getProducts(){
        return this.products;
    }

    getProductsById(id){
        const product = this.products.find(product => product.id === id);
        if(product){
            return product;
        } else {
            console.log("No se encontro el ID especificado");
            return null;
        }
    }
}

///////////////////////////////

//////////////////////////////

const yerba = new ProductManager();
const cocaCola = new ProductManager();
//se llama a la instancia recien creada, devuelve un arreglo vacio.
console.log(yerba.getProducts());
//se llama al metodo addProduct.
yerba.addProduct("Yerba Mate Amanda","1kg, edicion especial.",600,"https://carrefourar.vtexassets.com/arquivos/ids/209355-800-auto?v=637644769314600000&width=800&height=auto&aspect=true",`AB${647}C`,127);
//se llama getProducts() y muestra el producto recien agregado.
console.log(yerba.getProducts());
//se llama a addProducts con el mismo codigo de arriba y arroja un error.
yerba.addProduct("Yerba Mate Amanda","1kg, edicion especial.",600,"https://carrefourar.vtexassets.com/arquivos/ids/209355-800-auto?v=637644769314600000&width=800&height=auto&aspect=true",`AB${647}C`,127);
//Se llama a getProductById().
yerba.getProductsById(1);
