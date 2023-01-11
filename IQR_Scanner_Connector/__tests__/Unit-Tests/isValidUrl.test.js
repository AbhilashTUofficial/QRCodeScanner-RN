import isValidUrl from "../../src/Utils/isValidUrl";

test('isValidUrl Working', () => {
    expect(isValidUrl("https://www.google.com")).toBe(true);
  });

  