const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

rl.question('What\'s your name? ', (answer) => {
  profile.userName = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    profile.favActivity = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      profile.listenTo = answer;
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (answer) => {
        profile.favMeal = answer;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          profile.favDish = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            profile.favSport = answer;
            rl.question('What\'s your superpower? ', (answer) => {
              profile.superPower = answer;
              console.log(`${profile.userName} loves listening to ${profile.listenTo} while ${profile.favActivity}, devouring ${profile.favDish} for ${profile.favMeal}, prefers ${profile.favSport} over any other sport, and is amazing at ${profile.superPower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});