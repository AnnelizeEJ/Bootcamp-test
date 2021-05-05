function allPaarl(registration){
    var registrationForPaarl = registration.split(', ');
    var paarlReg = [];
    
     for (var i=0;i<registrationForPaarl.length;i++){
       var paarl = registrationForPaarl[i];
       if(paarl.startsWith('CJ'))
          {
          paarlReg.push(paarl);
          }
    }
  return paarlReg;    
  }