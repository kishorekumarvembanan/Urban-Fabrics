function addToCart(id, imageUrl, price) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find(item => item.id === id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ id, imageUrl, price, quantity: 1 });
    }
  
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  
  function emptyCart() {
    localStorage.removeItem("cartItems");
  }