function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';
  
    for (const employee in employees) {
      if (employees[employee] > maxTasks) {
        maxTasks = employees[employee];
        bestEmployee = employee;
      }
    }
  
    return bestEmployee;
  }
  
  // Приклад використання
  const employees = {
    John: 10,
    Jane: 15,
    Mike: 12,
  };
  console.log(findBestEmployee(employees)); // Виведе 'Jane'
  