//-----Checker CLASS-----//

class Checker {
  constructor(playerId) {
    this.playerId = playerId;
    this.isItKing = false;
    this.jumpPositions = [];
    this.checkersThatCanBeCaptured = [];
    this.checkersCaptured = []; // ARE YOU REALLY USING THIS??
    this.movePosition1 = null;
    this.movePosition2 = null;
  }
}
