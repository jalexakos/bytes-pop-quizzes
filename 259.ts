// from https://bytes.dev/archives/259

const products = [
    { name: "Shirt", price: 20, discount: true },
    { name: "Pants", price: 50, discount: false },
    { name: "Hat", price: 15, discount: true },
    { name: "Socks", price: 5, discount: true },
  ];
  
  const discountThreshold = 30;
  const discountRate = 0.1;
  
  const totalCost = products.reduce((acc, product) => {
    if (product.discount) {
      if (product.price > discountThreshold) {
        acc += product.price * (1 - discountRate);
      } else {
        acc += product.price;
      }
    } else {
      acc += product.price;
    }
  }, 0);
  
  console.log(`Total cost: ${totalCost}`);

  // initial thought:  += is performed before * in the discount case (line 16) 
  // Not correct: += happens after *

