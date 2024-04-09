import newLoader from "../app";

test('some test', async () => {

  const loader = newLoader();
	const result = await loader.load();

  const expected = {
    "id": 9,
    "created": 1546300800,
    "userInfo": {
        "id": 1,
        "name": "Hitman",
        "level": 10,
        "points": 2000
      }
    }

  expect(result).toEqual(expected);
});

