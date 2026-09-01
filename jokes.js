import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Returns a random number between 0-106. Since our array will have 107 jokes, this function will be used to generate the index of the joke that will be displayed.

function randomNum() {
    return Math.floor(Math.random() * 107);
}

// This is the array of jokes our program will display.
const jokes = [
  "Jack was nimble, Jack was quick, but Jack still couldn't dodge Chuck Norris' roundhouse kick.",
  "In the Beginning, there was nothing. Then Chuck Norris roundhouse kicked nothing and told it to get a job.",
  "Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light",
  "If you ask Chuck Norris what time it is, he always says, ‘Two seconds till.’ After you ask, ‘Two seconds to what?’ he roundhouse kicks you in the face.",
  "Chuck Norris appeared in the ‘Street Fighter II’ video game, but was removed by Beta Testers because every button caused him to do a roundhouse kick. When asked about this “glitch,” Chuck Norris replied, “That’s no glitch.”",
  "Since 1940, the year Chuck Norris was born, roundhouse kick related deaths have increased 13,000 percent.",
  "Chuck Norris’ roundhouse kick is so powerful, it can be seen from outer space by the naked eye.",
  "Chuck Norris once roundhouse kicked a coal mine and turned it into a diamond mine.",
  "Chuck Norris doesn't strike gold, gold is the byproduct of Chuck Norris roundhouse kicking rocks.",
  "Chuck Norris once shattered the space-time continuum. He felt so bad, he put it back together.",
  "Mission Impossible was originally set in Chuck Norris’s house.",
  "Chuck Norris uses pepper spray to season his meat.",
  "Chuck Norris plays Jenga with Stonehenge.",
  "Chuck Norris is able to slam a revolving door.",
  "Chuck Norris has a diary, it is called the Guinness Book Of World Records.",
  "Chuck Norris can dribble a bowling ball.",
  "When the Tooth fairy comes to your house she takes your tooth and gives you money. When Chuck Norris comes to your house he breaks your tooth and takes your money.",
  "Chuck Norris won an arm wrestling tournament, with both arms tied behind his back.",
  "When Chuck Norris lifts weights, the weights get in shape.",
  "If Chuck Norris were to travel to an alternate dimension in which there was another Chuck Norris and they both fought, they would both win.",
  "When the Boogeyman goes to sleep every night he checks his closet for Chuck Norris.",
  "The flu gets a Chuck Norris shot every year.",
  "Chuck doesn't need to throw out the trash, it always throws itself out.",
  "Chuck Norris is the reason that Wally is always hiding.",
  "Bigfoot is still hiding because he once saw Chuck Norris walking in the mountains.",
  "Chuck Norris doesn't worry about high gas prices. His vehicles run on fear.",
  "When Chuck Norris plays dodgeball, the balls dodge him.",
  "Freddy Krueger has nightmares about Chuck Norris.",
  "When Chuck Norris's parents had nightmares, they would come to his bedroom.",
  "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.",
  "Chuck Norris makes onions cry.",
  "Ghosts tell Chuck Norris stories at the campfire.",
  "The Flash discovered how to run at the speed of light when he discovered Chuck Norris was looking for him.",
  "Chuck Norris doesn't negotiate with terrorists. The terrorists negotiate with Chuck Norris.",
  "When Chuck Norris looked into the abyss, the abyss looked the other way.",
  "Chuck Norris made a Happy Meal cry.",
  "Aliens are real. They are just hiding from Chuck Norris.",
  "Chuck Norris beat the sun in a staring contest.",
  "Chuck Norris destroyed the periodic table, because Chuck Norris only recognizes the element of surprise.",
  "Chuck Norris doesn’t breathe, he holds air hostage.",
  "Chuck Norris wrecked his bicycle and skinned the sidewalk with his knee.",
  "Chuck Norris does not get frostbite. Chuck Norris bites frost.",
  "It is considered a great accomplishment to go down Niagara Falls in a wooden barrel. Chuck Norris can go up Niagara Falls in a cardboard box.",
  "There has never been a hurricane named Chuck because it would have destroyed everything.",
  "When Chuck Norris enters a room, he doesn’t turn the lights on, he turns the dark off.",
  "Chuck Norris can build a snowman out of rain.",
  "Chuck can set ants on fire with a magnifying glass. At night.",
  "If Chuck Norris was on The Titanic the iceberg would have dodged the ship.",
  "The sun has to wear sunglasses when Chuck Norris glances at it.",
  "There is no theory of evolution, just a list of creatures Chuck Norris allows to live.",
  "Leading hand sanitizers claim they can kill 99.9 percent of germs. Chuck Norris can kill 100 percent of whatever the hell he wants.",
  "The dinosaurs looked at Chuck Norris the wrong way once. You know what happened to them.",
  "If you want a list of Chuck Norris’ enemies, just check the extinct species list.",
  "Once a cobra bit Chuck Norris’ leg. After five days of excruciating pain, the cobra died.",
  "Time waits for no man. Unless that man is Chuck Norris.",
  "Chuck Norris doesn't need to wear a watch, he simply decides what time it is.",
  "It takes Chuck Norris 20 minutes to watch 60 Minutes.",
  "Chuck Norris can cook minute rice in 30 seconds.",
  "Chuck Norris once climbed Mt. Everest in 15 minutes, 14 of which he was building a snowman at the bottom.",
  "Chuck Norris' calendar goes straight from March 31st to April 2nd. No one fools Chuck Norris.",
  "Chuck Norris found the last digit of pi.",
  "Chuck Norris can divide by zero.",
  "When Chuck Norris does division, there are no remainders.",
  "Chuck Norris has counted to infinity more than once.",
  "Chuck Norris does not own a stove, oven, or microwave, because revenge is a dish best served cold.",
  "Chuck Norris is able to sketch your portrait using an eraser.",
  "Chuck Norris does not sleep. He waits.",
  "Chuck Norris can unscramble an egg.",
  "Chuck Norris is the only person on the planet that can kick you in the back of the face.",
  "Chuck Norris can make a slinky go upstairs.",
  "Chuck Norris tells Simon what to do.",
  "When Chuck Norris looks in a mirror, the mirror shatters. Because not even glass is dumb enough to get in between Chuck Norris and Chuck Norris.",
  "Chuck Norris can hear sign language.",
  "If it looks like chicken, tastes like chicken, and feels like chicken but Chuck Norris says it’s beef, then it’s beef.",
  "Chuck Norris’ tears cure cancer. Too bad he has never cried.",
  "Champions are the breakfast of Chuck Norris.",
  "Chuck Norris can do a wheelie on a unicycle.",
  "Chuck Norris can kill your imaginary friends.",
  "When Chuck Norris goes to a restaurant, the waiter tips him.",
  "When Chuck Norris uses the internet he can skip ads whenever he wants, ads are not able to skip Chuck Norris.",
  "The Loch Ness Monster claims to have seen Chuck Norris.",
  "When Thanos snapped his fingers, he disappeared. Chuck Norris doesn't like snapping.",
  "Chuck Norris knows Victoria’s secret.",
  "When Chuck Norris enters a building that is on fire, the Chuck Norris alarm rings.",
  "Chuck Norris has never blinked in his entire life. Never.",
  "When police officers approach Chuck Norris they say \"we have the right to remain silent\".",
  "The Swiss Army uses Chuck Norris Knives.",
  "Chuck Norris can speak Braille.",
  "Chuck Norris doesn't dial the wrong number, you pick up the wrong phone.",
  "Death once had a near-Chuck-Norris experience.",
  "The show Survivor had the original premise of putting people on an island with Chuck Norris. There were no survivors.",
  "Chuck Norris doesn’t shower, he only takes blood baths.",
  "When Chuck Norris gives you the finger, he's telling you how many seconds you have left to live.",
  "Chuck Norris plays Russian roulette with a fully loaded revolver. And wins.",
  "Chuck Norris can strangle you with a cordless phone.",
  "Chuck Norris once shot an enemy plane down with his finger, by yelling, “Bang!”",
  "On the 7th day, God rested. Then, Chuck Norris took over.",
  "Chuck Norris has a mug of nails instead of coffee in the morning.",
  "If you spell Chuck Norris in Scrabble, you win. Forever.",
  "Chuck Norris once had a heart attack. His heart lost.",
  "Chuck Norris can touch MC Hammer.",
  "Chuck Norris’ email address is Gmail@chucknorris.com",
  "Chuck Norris’s GPS never tells him to turn around.",
  "When Chuck Norris was in middle school, his English teacher assigned an essay: \"What is courage?\" He received an A+ for turning in a blank page with only his name at the top.",
  "When Chuck Norris was born, he drove his Mother home from the hospital.",
  "Chuck Norris once bowled a perfect game with a marble.",
  "Voldemort refers to Chuck Norris as ‘You Know Who’."
];

// This function will log a random joke to the console each time the app is ran.
function displayRandomJoke() {
    console.log(jokes[randomNum()]);
}

// Now we move on to a more advanced feature that will acually prompt the user for input.
const rl = readline.createInterface({input, output});

async function whatDoYouWant() {
    const choice = Number((await rl.question("Enter 1 for a random joke, 2 for the joke number selector, or 3 to exit.")).trim());
    console.log(choice);
    if (choice === 1) {
        displayRandomJoke();
        whatDoYouWant();
    } else if (choice === 2) {
        const choice2 = Number((await rl.question("Enter a number between 0-106...")).trim());
        if (Number.isInteger(choice2) && choice2 >= 0 && choice2 < jokes.length) {
            console.log(jokes[choice2]);
            whatDoYouWant();
        } else {
            console.log("Invalid input, shutting down...");
            rl.close();
        }
    } else if (choice === 3) {
        console.log("Exiting the program...");
        rl.close();
    } else {
        console.log("Invalid input, try again.");
        whatDoYouWant();
    }
}

whatDoYouWant();