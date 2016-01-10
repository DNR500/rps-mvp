import {createPlayer} from './vo/player';
import {findWeaponById, randomSelectWeapon, listWeaponsAsString} from './vo/weapons';
import outcomeMessage from './outcome';

export default function playRockPaperScissors (weaponId) {
    var player1,
        player2;

    if(weaponId){
        var userWeapon = findWeaponById(weaponId.toLowerCase());
        if(!userWeapon) {
            return 'Your weapon needs to be one of the following: ' + listWeaponsAsString();
        }

        player1 = createPlayer('You', userWeapon);
        player2 = createPlayer('Computer', randomSelectWeapon());
    } else {
        player1 = createPlayer('Computer1', randomSelectWeapon());
        player2 = createPlayer('Computer2', randomSelectWeapon());
    }
    return player1.toString() + ' & ' + player2.toString() + ' | ' + outcomeMessage(player1, player2);
}
