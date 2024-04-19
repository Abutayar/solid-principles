/* 
  This class represents a shop that sells cakes.
  If additional products are added to the shop in the future, modifications to this class will be necessary.
*/
class Shop {
    /**
     * Sells the provided cake if it is in stock.
     * @param {Cake} cake - The cake to be sold.
     */
    sell(cake) {
        if (cake.inStock()) {
            console.log('Selling cake.');
        }
    }
}

/* 
  This class represents a cake.
  Additional methods or properties can be added here to extend its functionality.
*/
class Cake {
    /**
     * Checks if the cake is in stock.
     * @returns {boolean} - True if the cake is in stock, false otherwise.
     */
    inStock() {
        return true; // or false
    }
}
