// Base class representing an item
class Item {
    // Method to check if the item is in stock
    inStock() { 
        throw new Error('Method "inStock" must be implemented');
    }
}

// Derived class representing a cake, inheriting from Item
class Cake extends Item {
    // Implementation of the inStock method for cakes
    inStock() {
        return true; // Placeholder logic, should check actual stock
    }
}

// Shop class responsible for selling items
class Shop {
    /**
     * Method to sell an item
     * @param {Item} item - The item to be sold
     */
    sell(item) {
        if (item.inStock()) {
            console.log('Selling item:', item.constructor.name); // Log the item being sold
        } else {
            console.log('Sorry, item is out of stock.'); // Inform if item is out of stock
        }
    }
}
