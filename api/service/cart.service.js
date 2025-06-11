import { sequelize, Order, OrderItem, CartItem, Product } from "../db.js";

// Obține toate produsele, cu filtrare și sortare opționale
export const getProducts = async (filter = {}, sort = []) => {
  return Product.findAll({
    where: filter,
    order: sort.length ? [sort] : undefined,
  });
};


export const addProduct = async (data) => {
  return Product.create(data);
};


export const deleteProduct = async (id) => {
  return Product.destroy({ where: { id } });
};


export const updateProduct = async (id, data) => {
  return Product.update(data, { where: { id } });
};

export const placeOrder = async (userId) => {
  const t = await sequelize.transaction();
  try {
     const cartItems = await CartItem.findAll({ where: { UserId: userId }, include: [Product], transactions: t });
     if(!cartItems.length) throw new Error("Cosul este gol");

     const total = cartItems.reduce((sum, item) => sum + item.quantity * item.Product.price, 0);

     const order = await Order.create({ UserId: userId, total }, { transaction: t});

     for (const item of cartItems){
       await OrderItem.create({
         OrderId: order.id,
         ProductId: item.ProductId,
          quantity: item.quantity,
        price : item.Product.price,
        }, { transaction: t });
     }
     await CartItem.destroy({ where: { UserId: userId }, transaction: t });

     await t.commit();
     return { orderId: order.id};
    } catch (err) {
      await t.rollback();
      throw err;
    }

};
