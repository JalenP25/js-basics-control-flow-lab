function scuberGreetingForFeet(ride){
  let feet;
  if (ride <= 400) {
    feet = "This one is on me!";
  } else if (ride > 2000 && ride <= 2500) {
    feet = "I will gladly take your thirty bucks.";
  }
  else {
    return "No can do.";
  }
  return feet;
} 

scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  const check = "NYC";
  return city === check ? "Ok, sounds good." : "No go.";
}

ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous" :
      return "Thank you so much.";
      break;
    case "not as generous" :
      return "Thank you."
      break;
    default :
      return "Bye."
  }
}