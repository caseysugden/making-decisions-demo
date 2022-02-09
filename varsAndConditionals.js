let eowynAttack = 50;
let witchKingAttack = 45;

if (eowynAttack > witchKingAttack) {
    console.log("Eowyn is stronger.");
} else if (eowynAttack < witchKingAttack) {
    console.log("Witch King is stronger.");
} else if (eowynAttack === witchKingAttack) {
    console.log("They are the same strength");
};

let eowynHealth = 100;
let eowynDefence = 0;

if (eowynHealth + eowynDefence <= witchKingAttack) {
    console.log("She dead");
} else {
    eowynHealth -= witchKingAttack;
    console.log(`She is down to ${eowynHealth}.`);
};

let coinLandsHeads = false;

if (coinLandsHeads !== true) {
    console.log("Witch King gets to run away");
} else {
    console.log("Witch King got stabbed in the face.");
};

for (let i = 0; i < 5; i++) {
    eowynHealth -= witchKingAttack;
    if (eowynHealth <= 0) {
        console.log(`Eowyn is dead`);
    break;
    }
    console.log(`Eowyn has ${eowynHealth} health left.`)
}

while (eowynHealth > 0) {
    eowynHealth -= witchKingAttack;
    console.log(`Eowyn has ${eowynHealth} left.`);
}
