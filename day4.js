const players = ["Ron", "Josh", "Jake", "Luke", "Brian", "Jacob", "Clark", "David", "Gabe", "Andy"];

const teams = players.map(function(player, index) {
  if (index % 2 === 0) {
    return `${player} is in the white team.`;
  } else {
    return `${player} is in the blue team.`;
  }
});

console.log(teams);
