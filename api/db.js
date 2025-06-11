import { Sequelize, DataTypes } from "sequelize";


const db = {
  NAME: "Proiect_An_Vue_API",
  USERNAME: "Proiect_An_Vue_API",
  PASSWORD: "Proiect_An_Vue_API",
  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: "mysql.Proiect_An_Vue_API", 
    port: 3306,
    logging: str => console.log(str),
  },
};

export const sequelize = new Sequelize(db.NAME, db.USERNAME, db.PASSWORD, db.options);


export const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }, 
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    paranoid: true,
  }
);


export const CartItem = sequelize.define(
  "CartItem",
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    freezeTableName: true,
    paranoid: true,
  }
);

export const User = sequelize.define(
  "User",{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export const Order = sequelize.define(
  "Order", {
     total: {
      type: DataTypes.FLOAT,
      allowNull: false,
     },
});

export const OrderItem = sequelize.define(
  "OrderItem", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue: 1,
    },
    price: {
       type: DataTypes.FLOAT,
        allowNull: false,
    },
});


Order.belongsTo(User);
User.hasMany(Order);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

OrderItem.belongsTo(Product);
Product.hasMany(OrderItem);

Product.hasMany(CartItem);
CartItem.belongsTo(Product);

CartItem.belongsTo(User);
User.hasMany(CartItem);