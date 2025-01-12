import * as st from './store';

test('abstraction online store test', () => {
  const myCatalog = {
    1: { id: 1, name: 'milk', price: 100 },
    2: { id: 2, name: 'cheese', price: 200 },
  };

  const product = { id: 3, name: 'chips', price: 250 };
  const product2 = { id: 4, name: 'chips Lays', price: 350 };
  const updatedCatalog = st.addProduct(myCatalog, product);
  const updatedCatalog2 = st.addProduct(updatedCatalog, product2);
  const updatedCatalog3 = st.removeProduct(updatedCatalog2, 3);

  expect(updatedCatalog).toEqual({
    1: { id: 1, name: 'milk', price: 100 },
    2: { id: 2, name: 'cheese', price: 200 },
    3: { id: 3, name: 'chips', price: 250 },
  });

  expect(updatedCatalog2).toEqual({
    1: { id: 1, name: 'milk', price: 100 },
    2: { id: 2, name: 'cheese', price: 200 },
    3: { id: 3, name: 'chips', price: 250 },
    4: { id: 4, name: 'chips Lays', price: 350 },
  });

  expect(updatedCatalog3).toEqual({
    1: { id: 1, name: 'milk', price: 100 },
    2: { id: 2, name: 'cheese', price: 200 },
    3: { id: 4, name: 'chips Lays', price: 350 },
  });

  const cart = [];
  st.addToCart(updatedCatalog3, cart, 4, 1);
  st.addToCart(updatedCatalog3, cart, 1, 5);

  expect(cart).toEqual([
    { id: 4, name: 'chips Lays', price: 350, quantity: 1 },
    { id: 1, name: 'milk', price: 100, quantity: 5 },
  ]);

  const orders = {};
  const { newCart, newOrders } = st.placeOrder(cart, orders);

  expect(newCart).toEqual([]);
  expect(newOrders).toEqual({
    order_1: {
      id: 'order_1',
      items: [
        {
          id: 4,
          name: 'chips Lays',
          price: 350,
          quantity: 1,
        },
        {
          id: 1,
          name: 'milk',
          price: 100,
          quantity: 5,
        },
      ],
      totalAmount: 850,
    },
  });
});
