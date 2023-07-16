function countProps(obj) {
    return Object.keys(obj).length;
  }
  
  // Приклад використання
  const user = {
    name: 'John',
    age: 30,
    hobby: 'tennis',
  };
  console.log(countProps(user)); // Виведе 3
  