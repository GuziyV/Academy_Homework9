// Create class ImprovedFighter
import Fighter from './fighter.js';
export default class ImprovedFighter extends Fighter{
    constructor(name, power, health = 600){
        super(name, power, health);
    }
    doubleHit(enemy, point){
        super.hit(enemy, point * 2);
    }
    
}