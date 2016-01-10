export default function outcomeMessage(player1, player2) {
    var template = 'The winner is %name%!';

    var matchFunction = function(value){
        return value === player2.weapon.id;
    };

    if(player1.weapon.beats.find(matchFunction)){
        return template.replace('%name%', player1.name);
    }

    if(player1.weapon.beatenBy.find(matchFunction)){
        return template.replace('%name%', player2.name);
    }

    return 'Deadlock!';
}