const options = require('../options/db_sqlite');
const knex = require('knex')(options);

knex.schema
    .hasTable('products')
    .then((exists) => {
        if (!exists) {
            return knex.schema
                .createTable('products', (table) => {
                    table.increments('id');
                    table.string('name');
                    table.string('description');
                    table.integer('code');
                    table.string('image');
                    table.integer('price');
                    table.integer('stock');
                })
                .then(() => console.log('table created'))
                .catch((err) => {
                    console.error(err);
                    throw err;
                });
        }else{
            console.log('table already exists');
        }
    })
    .catch((err) => {
        console.error(err);
        throw err;
    })
    .finally(() => knex.destroy());
