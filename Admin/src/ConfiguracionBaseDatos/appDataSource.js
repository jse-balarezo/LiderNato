const typeorm = require("typeorm");

const dataSource = new typeorm.DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DATABASEUSER,
  database: process.env.DATABASENAME,
 
  synchronize: true,
  logging: false,
  entities: [
    require("../entidades/UserSchema"),
    require("../entidades/RoleSchema"),
    require("../entidades/ArtistSchema"),
    require("../entidades/ProductSchema"),
    require("../entidades/ArtistCatalogueSchema"),
    require("../entidades/RequestSchema"),
  ],
});
dataSource.initialize();
module.exports = {
  dataSource,
};
