const fs = require('fs');


class Product {
    
    constructor(options, table) {
        this.knex = require('knex')(options);
        this.table = table;

    }
    
    async save(product) {
        try {
            let newProduct = await this.knex.insert(product).into(this.table)
            return newProduct[0];
        } catch (error) {
            console.error(error);
        }
    }
    
    async getAll() {
        try {
            return await this.knex.from(this.table).select('*');
        } catch (error) {
            console.error(error);
        }
    }

    async getById(id) {
        try {
            let product = await this.knex.from(this.table).where('id', id)
            return product.length == 0 ? null : product;
        } catch (error) {
            console.error(error);
        }
    }

    async updateById(id, product) {
        try {
            let productUpdated = await this.knex(this.table).where({id}).update(product, ['id', 'name']);
            if (productUpdated === 0) {
                return null;
            }
            return `Product with ID: ${id} Updated`;

        } catch (error) {
            console.error(error);
        }
    }
    
    
    async deleteById(id) {
        try {
            let productDeleted = await this.knex(this.table).where({id}).del(['id', 'title']);
            if (productDeleted === 0) {
                return 'Product not found';
            }
            return 'Product Deleted'

        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Product;