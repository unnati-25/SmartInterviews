function groupByCategory(items, categoryKey) {
    const grouped = {};
  
    for (let item of items) {
      const key = item[categoryKey];
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(item);
    }
  
    return grouped;
  }
  
  const products = [
    { name: 'Laptop', category: 'Electronics', price: 1200 },
    { name: 'T-Shirt', category: 'Apparel', price: 25 },
    { name: 'Mouse', category: 'Electronics', price: 30 },
    { name: 'Jeans', category: 'Apparel', price: 70 },
  ];
  
  const grouped = groupByCategory(products, 'category');
  console.log("Grouped Products:", JSON.stringify(grouped, null, 2));
  