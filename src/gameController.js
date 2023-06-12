class GameController {
  #game
  #renderer
  #inputController
  constructor(game, inputController, renderer) {
    this.#game = game;
    this.#renderer = renderer;
    this.#inputController = inputController;
  }

  start() {
    this.#renderer.render(this.#game.gameStatus());

    this.#inputController.on('move-entered', (move) => {
      this.#game.makeMove(move);
      const gameStatus = this.#game.gameStatus();
      this.#renderer.render(gameStatus);

      if(gameStatus.isGameOver) this.#inputController.end();
    });

    this.#inputController.on('invalid-move', (move) => {
      this.#renderer.write(`invalid move ${move}`);
    })

    this.#inputController.start();
  }
}

exports.GameController = GameController;