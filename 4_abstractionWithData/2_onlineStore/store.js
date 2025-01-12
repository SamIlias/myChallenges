import _ from 'lodash';

const getProductNum = (catalog, prodId) => {
  let res = null;
  Object.entries(catalog).forEach(([num, prod]) => {
    if (prod.id === prodId) {
      res = num;
    }
  });
  return res;
};

const getLength = catalog => {
  return Object.keys(catalog).length;
};
//= =======================================

export const addProduct = (catalog, product) => {
  const curNumber = getProductNum(catalog, product.id);
  let updatedCatalog;
  if (!curNumber) {
    const newNumber = getLength(catalog) + 1;
    updatedCatalog = { ...catalog, [newNumber]: product };
  } else {
    updatedCatalog = { ...catalog, [curNumber]: product };
  }

  return updatedCatalog;
};

export const removeProduct = (catalog, id) => {
  const updatedCatalog = {};
  const filteredItems = Object.values(catalog).filter(prod => prod.id !== id);
  for (let i = 0; i < filteredItems.length; i += 1) {
    updatedCatalog[i + 1] = filteredItems[i];
  }

  return updatedCatalog;
};

export const getProdById = (catalog, id) => {
  const productNumber = getProductNum(catalog, id);
  return catalog[productNumber] ?? null;
};

export const addToCart = (catalog, cart, id, quantity) => {
  const product = getProdById(catalog, id);
  if (product) {
    const item = { ...product, quantity };
    cart.push(item);
  }
};

export const placeOrder = (cart, orders) => {
  const newCart = [];
  const newOrders = { ...orders };

  const newOrder = {};
  const newOrderNum = _.uniqueId('order_');
  const totalAmountOfCart = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );
  newOrder.id = newOrderNum;
  newOrder.items = [...cart];
  newOrder.totalAmount = totalAmountOfCart;

  newOrders[newOrderNum] = newOrder;
  return { newCart, newOrders };
};
