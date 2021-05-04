const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  let name1 = answer1;
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    let activity2 = answer2;
    rl.question('What do you listen to while doing that? ', (answer3) => {
      let music3 = answer3;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        let meal4 = answer4;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          let food5 = answer5;
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            let sport6 = answer6;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              let superpower7 = answer7;
              console.log(`${name1} loves listening to ${music3} while ${activity2}, devouring ${food5} for ${meal4}, prefers ${sport6} over any other sport, and is amazing at ${superpower7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});