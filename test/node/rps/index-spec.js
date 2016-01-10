import {expect} from 'chai';
import sinon from 'sinon';
import playRockPaperScissors from '../../../src/rps';
import * as weapons from '../../../src/rps/vo/weapons';

describe('RPS rps', function() {

    afterEach(function(){
        weapons.randomSelectWeapon.restore();
    });
    describe('for player vs computer', function() {
        describe('when player enters a non existing weapon', function() {
            it('should report as you won when computer picks rock', function() {
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById('rock');
                });

                var output = playRockPaperScissors('asdf');
                expect(output).to.equal('Your weapon needs to be one of the following: Rock, Paper, Scissors');
            });
        });
        describe('when player picks rock', function() {
            it('should report as deadlock when computer picks rock', function() {
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById('rock');
                });

                var output = playRockPaperScissors('rock');
                expect(output).to.equal('You picked Rock & Computer picked Rock | Deadlock!');
            });
            it('should report as computer won when computer picks paper', function() {
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById('paper');
                });

                var output = playRockPaperScissors('rock');
                expect(output).to.equal('You picked Rock & Computer picked Paper | The winner is Computer!');
            });
            it('should report as you won when computer picks scissors', function() {
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById('scissors');
                });

                var output = playRockPaperScissors('rock');
                expect(output).to.equal('You picked Rock & Computer picked Scissors | The winner is You!');
            });
        });
        describe('when player picks paper', function() {
            it('should report as you won when computer picks rock', function() {
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById('rock');
                });

                var output = playRockPaperScissors('paper');
                expect(output).to.equal('You picked Paper & Computer picked Rock | The winner is You!');
            });
            it('should report as deadlock when computer picks paper', function() {
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById('paper');
                });

                var output = playRockPaperScissors('paper');
                expect(output).to.equal('You picked Paper & Computer picked Paper | Deadlock!');
            });
            it('should report as computer won when computer picks scissors', function() {
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById('scissors');
                });

                var output = playRockPaperScissors('paper');
                expect(output).to.equal('You picked Paper & Computer picked Scissors | The winner is Computer!');
            });
        });
        describe('when player picks scissors', function() {
            it('should report as computer won when computer picks rock', function() {
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById('rock');
                });

                var output = playRockPaperScissors('scissors');
                expect(output).to.equal('You picked Scissors & Computer picked Rock | The winner is Computer!');
            });
            it('should report as you won when computer picks paper', function() {
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById('paper');
                });

                var output = playRockPaperScissors('scissors');
                expect(output).to.equal('You picked Scissors & Computer picked Paper | The winner is You!');
            });
            it('should report as deadlock when computer picks scissors', function() {
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById('scissors');
                });

                var output = playRockPaperScissors('scissors');
                expect(output).to.equal('You picked Scissors & Computer picked Scissors | Deadlock!');
            });
        });
    });

    describe('for computer vs computer', function() {
        describe('when computer1 picks rock', function() {
            it('should report as deadlock when computer2 picks rock', function() {
                var weaponsForPlay = ['rock','rock'];
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById(weaponsForPlay.pop());
                });

                var output = playRockPaperScissors();
                expect(output).to.equal('Computer1 picked Rock & Computer2 picked Rock | Deadlock!');
            });
            it('should report as computer2 won when computer2 picks paper', function() {
                var weaponsForPlay = ['paper','rock'];
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById(weaponsForPlay.pop());
                });

                var output = playRockPaperScissors();
                expect(output).to.equal('Computer1 picked Rock & Computer2 picked Paper | The winner is Computer2!');
            });
            it('should report as computer1 won when computer2 picks scissors', function() {
                var weaponsForPlay = ['scissors','rock'];
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById(weaponsForPlay.pop());
                });

                var output = playRockPaperScissors();
                expect(output).to.equal('Computer1 picked Rock & Computer2 picked Scissors | The winner is Computer1!');
            });
        });
        describe('when computer1 picks paper', function() {
            it('should report as conputer1 won when computer2 picks rock', function() {
                var weaponsForPlay = ['rock','paper'];
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById(weaponsForPlay.pop());
                });

                var output = playRockPaperScissors();
                expect(output).to.equal('Computer1 picked Paper & Computer2 picked Rock | The winner is Computer1!');
            });
            it('should report as deadlock won when computer2 picks paper', function() {
                var weaponsForPlay = ['paper','paper'];
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById(weaponsForPlay.pop());
                });

                var output = playRockPaperScissors();
                expect(output).to.equal('Computer1 picked Paper & Computer2 picked Paper | Deadlock!');
            });
            it('should report as computer2 won when computer2 picks scissors', function() {
                var weaponsForPlay = ['scissors','paper'];
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById(weaponsForPlay.pop());
                });

                var output = playRockPaperScissors();
                expect(output).to.equal('Computer1 picked Paper & Computer2 picked Scissors | The winner is Computer2!');
            });
        });
        describe('when computer1 picks scissors', function() {
            it('should report as conputer1 won when computer2 picks rock', function() {
                var weaponsForPlay = ['rock','scissors'];
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById(weaponsForPlay.pop());
                });

                var output = playRockPaperScissors();
                expect(output).to.equal('Computer1 picked Scissors & Computer2 picked Rock | The winner is Computer2!');
            });
            it('should report as deadlock won when computer2 picks paper', function() {
                var weaponsForPlay = ['paper','scissors'];
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById(weaponsForPlay.pop());
                });

                var output = playRockPaperScissors();
                expect(output).to.equal('Computer1 picked Scissors & Computer2 picked Paper | The winner is Computer1!');
            });
            it('should report as computer2 won when computer2 picks scissors', function() {
                var weaponsForPlay = ['scissors','scissors'];
                sinon.stub(weapons, 'randomSelectWeapon', function(){
                    return weapons.findWeaponById(weaponsForPlay.pop());
                });

                var output = playRockPaperScissors();
                expect(output).to.equal('Computer1 picked Scissors & Computer2 picked Scissors | Deadlock!');
            });
        });
    });
});