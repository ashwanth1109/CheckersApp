//-----Checker CLASS-----//

class Checker {
  constructor(playerId) {
    this.playerId = playerId;
    this.isItKing = false;
    this.jumpPositions = [];
    this.checkersThatCanBeCaptured = [];
    this.movePosition1 = null;
    this.movePosition2 = null;
  }
}
