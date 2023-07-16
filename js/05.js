function getAllPropValues(arr, prop) {
    const values = [];
  
    for (const obj of arr) {
      if (prop in obj) {
        values.push(obj[prop]);
      }
    }
  
    return values;
  }
  
  // Приклад використання
  const products = [
    { name: 'Apple', category: 'fruits' },
    { name: 'Carrot', category: 'vegetables' },
    { name: 'Banana', category: 'fruits' },
  ];
  console.log(getAllPropValues(products, 'category')); // Виведе ['fruits', 'vegetables', 'fruits']
  