// A fun example of a closure

function club() {
  var alcohol = "Martini, please!";
  
  function bouncer(id) {
    if (id > 18) {
      return alcohol;
    } else {
      return "Move Along!";
    }
  }
  return bouncer;
}

console.log(club()(27));