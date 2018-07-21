// create async function fight
export default async function fight(fighter, improvedFighter, ...points){
    for(let i = 0;i < points.length;i++){
        if(isEven(i)){
            fighter.hit(improvedFighter, points[i]);
            if(improvedFighter.health < 0){
                document.getElementById("app").innerHTML += `${improvedFighter.name} is dead <br>`;
                let promise = await improvedFighter.knockout;
                document.getElementById("app").innerHTML = promise;
                break;
            }
        }
        else{
            improvedFighter.doubleHit(fighter, points[i]);
            if(fighter.health < 0){
                document.getElementById("app").innerHTML += `${fighter.name} is dead<br>`;
                let promise = await fighter.knockout;
                document.getElementById("app").innerHTML+=(promise)
                break;
            }
        }
    }
}

var isEven = function(someNumber) {
    return (someNumber % 2 == 0) ? true : false;
  };