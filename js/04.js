function countTotalSalary(employees) {
    let totalSalary = 0;
  
    for (const salary of Object.values(employees)) {
      totalSalary += salary;
    }
  
    return totalSalary;
  }
  
  // Приклад використання
  const employees = {
    John: 1000,
    Jane: 1500,
    Mike: 1200,
  };
  console.log(countTotalSalary(employees)); // Виведе 3600
  