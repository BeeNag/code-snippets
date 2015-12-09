// Using a for in loop to recreate the effects of Object.keys

function TeslaCar() {}
  
  TeslaCar.prototype.make = 'Tesla';
  
  var modelX = new TeslaCar();
  
  modelX.price = 140000;
  modelX.colour = 'white';
  
  Object.prototype.teslaKeys = function (object) {
    var array = [];
    
    for(var property in object) {
      if(object.hasOwnProperty(property)) {
        array.push(property);
      }
    }
    
    return array;
  };
  
console.log(modelX.teslaKeys(modelX));