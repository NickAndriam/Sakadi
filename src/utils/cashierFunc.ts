// If IDs match
export const idMatch = (item1: any, item2: any) => {
  return item1.uid === item2.uid && item1.size === item2.size;
};

// Add to Cart
export const addToCart = (
  cart: any[],
  uid: string, // Add uid parameter
  name: string,
  size: string,
  price: number,
  category: string,
  count: number,
  setCart: (cart: any[]) => void
) => {
  // Find if the item with the same uid, name, and size already exists in the cart
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.name === name && cartItem.size === size
  );

  if (existingItemIndex !== -1) {
    // If the item exists, update its count
    const updatedCart = cart.map((cartItem, index) =>
      index === existingItemIndex
        ? { ...cartItem, count: cartItem.count + count } // Increase count
        : cartItem
    );
    setCart(updatedCart);
  } else {
    // If the item doesn't exist, add it to the cart
    setCart([
      ...cart,
      {
        uid, // Use the uid passed down
        name,
        size,
        price,
        category,
        count: count,
      },
    ]);
  }
};
