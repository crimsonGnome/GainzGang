export default function calcTotalPrice(cart) {
  const total = cart.reduce((tally, cartItem) => {
    if (!cartItem.item) return tally;
    if (cartItem.item.onClearance === true) {
      return tally + cartItem.quantity * cartItem.item.clearancePrice;
    }
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
  if (total !== 0) {
    return total;
  }
}
