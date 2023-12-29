// Product class represents a product with an ID and a name
class Product {
    // Constructor method to create a new Product instance
    // Takes two parameters: id (product ID) and name (product name)
    constructor(id, name) {
        // Assign the provided id and name to the instance properties
        this.id = id;
        this.name = name;
    }
}

// Export the Product class to make it accessible from other modules
module.exports = Product;
