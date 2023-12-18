class TicTacToe {
  constructor() {
    this.board = Array(9).fill(null);
    this.currentPlayer = "X";
  }

  // Realiza uma jogada e retorna true para movimento válido e false para movimento inválido
  makeMove(position) {
    if (!this.board[position]) {
      this.board[position] = this.currentPlayer;
      this.togglePlayer();
      return true;
    } else {
      return false;
    }
  }

  // Troca o jogador atual ('X' para 'O' e vice-versa)
  togglePlayer() {
    this.currentPlayer === 'X' ? this.currentPlayer  = 'O' : this.currentPlayer  = 'X'
  }

  // Checa se o jogo teve um vencedor e retorna 'X', 'O' ou null
  checkWinner() {
    const possibilities = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8], //Diagonal
      [2,4,6], //Diagonal
    ]
    for(const possibility of possibilities) {
      const [a,b,c] = possibility;
      if(this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a];
      }
    }
    return null
  }

  // Retorna true caso o tabuleiro esteja cheio e false caso não
  isBoardFull() {
    return this.board.every(e => e);
  }
}

module.exports = TicTacToe;
