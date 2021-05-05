function allFromTown(regNumbers, location){
    var registration = regNumbers.split(',');
    var towns = [];
    for (var i=0;i<registration.length;i++){
      var numbers = registration[i].trim();
      if (numbers.startsWith(location)){
       towns.push(numbers);
    }
    
    } return towns;
    
  }