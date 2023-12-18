const TicTacToe = require('../src/TicTacToe');

describe('TicTacToe', () => {
  let game;

  beforeEach(() => {
    game = new TicTacToe();
  });

  test('Deve alternar jogadores corretamente', () => {
    expect(game.currentPlayer).toBe('X');
    game.makeMove(0);
    expect(game.currentPlayer).toBe('O');
    game.makeMove(1);
    expect(game.currentPlayer).toBe('X');
  });

  test('Deve realizar movimentos válidos', () => {
    expect(game.makeMove(0)).toBe(true); // Primeiro movimento
    expect(game.makeMove(4)).toBe(true); // Segundo movimento
    expect(game.makeMove(0)).toBe(false); // Movimento inválido, posição já ocupada
    expect(game.makeMove(1)).toBe(true); // Movimento válido
  });

  test('Deve verificar o vencedor com linha horizontal', () => {
    // Simula um cenário de vitória em uma linha horizontal
    game.makeMove(0);
    game.makeMove(3);
    game.makeMove(1);
    game.makeMove(4);
    game.makeMove(2);
    expect(game.checkWinner()).toBe('X');
  });
  test('Deve verificar o vencedor com linha vertical', () => {
    // Simula um cenário de vitória em uma linha horizontal
    game.makeMove(0);
    game.makeMove(4);
    game.makeMove(3);
    game.makeMove(5);
    game.makeMove(6);
    expect(game.checkWinner()).toBe('X');
  });
  test('Deve verificar o vencedor com linha diagonal', () => {
    // Simula um cenário de vitória em uma linha horizontal
    game.makeMove(0);
    game.makeMove(3);
    game.makeMove(4);
    game.makeMove(7);
    game.makeMove(8);
    expect(game.checkWinner()).toBe('X');
  });
  test('Deve verificar o cenário de empate', () => {
    // Simula um cenário de empate
    game.makeMove(0);
    game.makeMove(1);
    game.makeMove(2);
    game.makeMove(3);
    game.makeMove(5);
    game.makeMove(4);
    game.makeMove(6);
    game.makeMove(8);
    game.makeMove(7);
    expect(game.checkWinner()).toBe(null);
    expect(game.isBoardFull()).toBe(true);
  });
});
