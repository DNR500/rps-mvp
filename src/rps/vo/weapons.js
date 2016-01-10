export const weapons = [
    {
        id:'rock',
        title:'Rock',
        beats: ['scissors'],
        beatenBy: ['paper']
    },
    {
        id:'paper',
        title:'Paper',
        beats: ['rock'],
        beatenBy: ['scissors']
    },
    {
        id:'scissors',
        title:'Scissors',
        beats: ['paper'],
        beatenBy: ['rock']
    }
];

export function listWeaponsAsString() {
    return weapons.map(function(weapon) {
        return weapon.title;
    }).join(', ');
}

export function randomSelectWeapon() {
    var randomIndex = Math.round(Math.random()*(weapons.length - 1));
    return weapons[randomIndex];
}

export function findWeaponById(weaponId) {
    var weapon = weapons.find(function(weapon){
        return weapon.id === weaponId;
    });
    return weapon;
}
