

let input = "3\nspock spock\ntesoura spock\nlagarto spock"
var lines = input.split('\n');

let test_cases;
let game_inputs = [];

lines.forEach((value, index) => {
  if (index === 0){
    test_cases = parseInt(value);
  } else {
    game_inputs.push(value);
  }
});

function game (input) {
  let obj = {
    "tesoura papel" : "rajesh",
    "papel tesoura" : "sheldon",
    "papel pedra" : "rajesh",
    "pedra papel" : "sheldon",
    "pedra lagarto" : "rajesh",
    "lagarto pedra" : "sheldon",
    "lagarto spock" : "rajesh",
    "spock lagarto" : "sheldon",
    "spock tesoura" : "rajesh",
    "tesoura spock" : "sheldon",
    "tesoura lagarto" : "rajesh",
    "lagarto tesoura" : "sheldon",
    "lagarto papel" : "rajesh",
    "papel lagarto" : "sheldon",
    "papel spock" : "rajesh",
    "spock papel" : "sheldon",
    "spock pedra" : "rajesh",
    "pedra spock" : "sheldon",
    "pedra tesoura" : "rajesh",
    "tesoura pedra" : "sheldon",
  }
  
  if (!(obj[input])) {
    return "empate";
  } else {
    return obj[input];
  }
}

for (let i=0; i<test_cases; i++) {
   console.log(game(game_inputs[i]));
}
