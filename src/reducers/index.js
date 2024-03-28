import {
  Add_products,
  Add_cart,
  Product_view,
  Cart_items,
  update_cart,
  delete_cart
} from "../actions";

// Initial state of the products reducer
let initialState = {
  products: [],
  cart: [],
  itemToDisplay: "",
  totalCart: 0,
};

export default function products(state = initialState, actions) {
  switch (actions.type) {
    case Add_products:
      // Action to add products to the state
      return {
        ...state,
        products: actions.products,
      };
      break;
    case Add_cart:
      // Action to add items to the cart
      let flag = state.cart.indexOf(actions.cart);
      if (flag !== -1) {
        // If the item already exists in the cart, increase its quantity by 1
        actions.cart.qty += 1;
        return {
          ...state,
        };
      } else {
        // If the item does not exist in the cart, add it to the cart
        return {
          ...state,
          cart: [actions.cart, ...state.cart],
        };
      }
      break;

    case Product_view:
      // Action to set the item to display in the product view
      return {
        ...state,
        itemToDisplay: actions.view,
      };
      break;
    case Cart_items:
      // Action to update the total number of items in the cart
      let { cart } = state;
      let total = cart.reduce((total, item) => {
        return (total += item.qty);
      }, 0);
      return {
        ...state,
        totalCart: total,
      };
      break;
    case update_cart:
      // Action to update an item in the cart
      let index = state.cart.indexOf(actions.updatedItem);
      let updatedCart = null;
      if (index !== -1) {
        // If the item exists in the cart, update it
        state.cart[index] = actions.updatedItem;
        updatedCart = state.cart;
      }
      return {
        ...state,
        cart: [...updatedCart],
      };
    case delete_cart:
      // Action to delete an item from the cart
      let position = state.cart.indexOf(actions.item);
      state.cart.splice(position, 1);
      return {
        ...state,
      }
    default:
      return state;
  }
}
