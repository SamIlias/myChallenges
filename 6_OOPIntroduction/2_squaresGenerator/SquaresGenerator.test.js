import Square from './Square';
import SquaresGenerator from './SquaresGenerator';

describe('SquaresGenerator test', () => {
  test('Common use', () => {
    const side = 10;
    const amount = 15;
    const squares = SquaresGenerator.generate(side, amount);

    expect(squares).toHaveLength(amount);
    expect(squares[0] instanceof Square).toBe(true);
    expect(squares[0].getSide()).toEqual(side);
  });

  test('call without explicit amount. The default amount is used', () => {
    const side = 10;
    const squares = SquaresGenerator.generate(side);
    const defaultAmount = 5;

    expect(squares).toHaveLength(defaultAmount);
    expect(squares[0] instanceof Square).toBe(true);
    expect(squares[0].getSide()).toEqual(side);
  });
});
