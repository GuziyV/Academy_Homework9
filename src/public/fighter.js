// Create class Fighter
export default class Fighter{
    constructor(name, power, health){
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage){
        this.health -= damage;
        document.getElementById("app").innerHTML += `health of ${this.name} is ${this.health}<br>`;
    }

    hit(enemy, point){
        let damage = point * this.power;
        enemy.setDamage(damage);
    }

    get knockout(){
        return new Promise((resolve, rejected) => {
            document.getElementById("app").innerHTML += "time is over<br>";
            setTimeout(() =>{
                resolve(`Fighter ${this.name} lost`);
            }, 500);
        });
    }

};