import isValidUrl from "../../src/Utils/isValidUrl";

test('isValidUrl Test 1', () => {
    expect(isValidUrl("https://www.google.com")).toBe(true);
  });

  test('isValidUrl Test 2', () => {
    expect(isValidUrl("https://jestjs.io/docs/getting-started")).toBe(true);
  });

  test('isValidUrl Test 3', () => {
    expect(isValidUrl("https://www.namecheap.com/security/what-is-domain-privacy-definition/")).toBe(true);
  });

