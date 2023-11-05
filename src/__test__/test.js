import sortHeroesByHealth from "../index";

test("Сортировка героев по уровню жизни", () => {
  const unsortedHeroes = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];

  const sortedHeroes = sortHeroesByHealth(unsortedHeroes);

  expect(sortedHeroes).toEqual([
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ]);


});
