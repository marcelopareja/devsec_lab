const { evaluateRisk } = require('../src/riskChecker');

test('retorna LOW cuando no hay vulnerabilidades', () => {
  expect(evaluateRisk(0, 10)).toBe('LOW');
});

test('retorna MEDIUM cuando hay pocas vulnerabilidades', () => {
  expect(evaluateRisk(1, 10)).toBe('MEDIUM');
});

test('retorna HIGH cuando hay muchas vulnerabilidades', () => {
  expect(evaluateRisk(5, 10)).toBe('HIGH');
});
