import {expect} from 'chai';
import {createPlayer} from '../../../../src/rps/vo/player';

describe('RPS player', function() {

    it('should return a populated player that can provide a string representation when populated with args', function() {
        var mockWeapon = {
            title:'someWeapon'
        }

        var player = createPlayer('Someone', mockWeapon);

        expect(player.name).to.equal('Someone');
        expect(player.weapon).to.equal(mockWeapon);
        expect(player.toString()).to.equal('Someone picked someWeapon');
    });

    it('should return an empty player when not populated', function(done) {
        var player = createPlayer();

        expect(player.name).to.be.undefined;
        expect(player.weapon).to.be.undefined;

        try {
            player.toString();
        } catch(e) {
            expect(e).to.not.be.undefined;
            done();
        }
    });

});