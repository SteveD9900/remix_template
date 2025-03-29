import { expect, test } from 'vitest';
import { sum } from './math';

test('adds positive numbers', () => {
  expect(sum(1,2)).toBe(3);
});