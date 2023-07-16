function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
  
    for (const product of allProducts) {
      if (product.name === productName) {
        totalPrice += product.price * product.quantity;
      }
    }
  
    return totalPrice;
  }
  
  // Приклад використання
  const products = [
    { name: 'Apple', price: 0.5, quantity: 10 },
    { name: 'Banana', price: 0.3, quantity: 7 },
    { name: 'Orange', price: 0.8, quantity: 5 },
  ];
  console.log(calculateTotalPrice(products, 'Apple')); 
  