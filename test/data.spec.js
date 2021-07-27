import { getPokemonsByName } from '../src/data.js';



describe('getPokemonsByName', () => {
  it('deberia ser una funcion', () => {
    expect(typeof getPokemonsByName).toBe('function');
  });

  it('deberia retornar null para nombre vacio', () => {
    expect(getPokemonsByName()).toBe('null');
  });
});


