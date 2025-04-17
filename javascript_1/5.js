function evaluateConditions(obj) {
    if (obj.age > 18 && obj.hasLicense) 
        return "Eligible to drive";
    if (obj.temperature > 30 || obj.humidity > 70) 
        return "Warning: High discomfort level";
    if ((obj.role === "admin" || obj.role === "editor") && obj.isActive) 
        return "Access granted";
    if (!obj.isLoggedIn) 
        return "User not logged in";
    if (obj.points >= 100 && obj.subscription === "premium") 
        return "Premium Member";
    return "No condition met";
  }
  
  console.log(evaluateConditions({ age: 20, hasLicense: true }));
  