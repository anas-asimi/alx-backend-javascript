import EVCar from '../100-evcar.js';

test("EVCar has the correct definition", () => {
  const tesla = new EVCar('Tesla', 'Electric', 'Red', '250');
  expect(tesla._brand).toBe('Tesla');
  expect(tesla._color).toBe('Red');
  expect(tesla._motor).toBe('Electric');
  expect(tesla._range).toBe('250');
});
