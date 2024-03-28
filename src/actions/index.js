export const Add_products = "Add_products";
export const Add_cart = "Add_cart";
export const Product_view = "product_view";
export const Cart_items = "Cart_items";
export const update_cart = "update_cart";
export const delete_cart = "delete_cart";

// Action creator for adding products
export function addproducts(products) {
  return {
    type: Add_products,
    products,
  };
}

// Action creator for adding an item to the cart
export function addCart(cart) {
  return {
    type: Add_cart,
    cart,
  };
}

// Action creator for setting the product to view
export function ProductToview(item) {
  return {
    type: Product_view,
    view: item,
  };
}

// Action creator for retrieving the cart items
export function CartItems() {
  return {
    type: Cart_items,
  };
}

// Action creator for updating an item in the cart
export function updateCart(item) {
  return {
    type: update_cart,
    updatedItem: item,
  };
}

// Action creator for deleting an item from the cart
export function DeleteCart(item) {
  return {
    type: delete_cart,
    item,
  };
}
