let ride=199;



function scuberGreetingForFeet(ride){
if (ride<=400) {
  return 'This one is on me!';
  
} else if(ride>2000 && ride<2500) {
  return 'I will gladly take your thirty bucks.';
}
   else if(ride>2500) {
  return 'No can do.';
}
}
const city = 'NYC';


function ternaryCheckCity(city) {
  // Write your code here!
return (city === 'NYC') ? `Ok, sounds good.` : `No go.`;
}

const tip="generous";
function switchOnCharmFromTip(tip){
  // Write your code here!

  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      
      case 'not as generous':
        return 'Thank you.';
          
    default:
      return 'Bye.';
  }
}
