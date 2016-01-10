export function createPlayer(name, weapon){
    return {
        name: name,
        weapon: weapon,
        toString: function() {
            return this.name + ' picked ' + this.weapon.title;
        }
    };
}

