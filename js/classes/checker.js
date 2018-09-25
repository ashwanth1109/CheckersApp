//-----Checker CLASS-----//

class Checker {
  constructor(playerId) {
    this.playerId = playerId;
    this.isItKing = false;
    this.jumpPositions = [];
    this.checkersThatCanBeCaptured = [];
    this.checkersCaptured = [];
    this.movePositions = [];
  }
}
