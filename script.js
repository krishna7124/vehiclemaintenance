function checkMaintenance(event) {
    event.preventDefault();
  
      var name = document.getElementById("name").value;
    var model = document.getElementById("model").value;
    var last_mileage = document.getElementById("last_mileage").value;
    var current_mileage = document.getElementById("current_mileage").value;
  
    if(isNaN(last_mileage) || isNaN(current_mileage)){
      alert("Only numbers are allowed in mileage fields!");
      return;
    }
    
    var nameRegex = /^[a-zA-Z ]+$/;
    if(!nameRegex.test(name)){
      alert("Only characters are allowed in name field!");
      return;
    }
    if(model === ""){
      alert("Model field is mandatory!");
      return;
    }
    if(last_mileage > current_mileage){
      alert("Current mileage must be greater than last mileage!");
      return;
    }
    var mileage = current_mileage - last_mileage;
    var recommendedInterval;
    if (model === "sedan") {
      recommendedInterval = 100000;
    } else if (model === "suv") {
      recommendedInterval = 80000;
    } else if (model === "truck") {
      recommendedInterval = 120000;
    } else {
      recommendedInterval = 120000;
    }
    var output = document.getElementById("output");
    if (mileage >= recommendedInterval) {
      output.innerHTML = "Dear " + name + ", your " + model + " is due for maintenance.";
    } else {
      output.innerHTML = "Dear " + name + ", your " + model + " does not need maintenance at this time.";
    }
  }
  