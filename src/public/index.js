import Fighter from './fighter.js';
import ImprovedFighter from './improvedFighter.js';
import fight from './fight.js';
// create two instances

let fighter = new Fighter("John", 15, 500);
let improvedFighter = new ImprovedFighter("Anthony", 13);
// call fight function
fight(fighter, improvedFighter, 25, 13, 10, 25, 23, 26);

