describe("show Test", () => {
  it("should show first", () => {
    const datas = ["first", "second", "third", "four", "five"];
    const inputWord = "first";
    const expected = ["first"];
    expect(searchWords(datas, inputWord)).toEqual(expected);
  });

  it("should show firstWords f", () => {
    const datas = ["first", "second", "third", "four", "five"];
    const inputWord = "f";
    const expected = ["first", "four", "five"];
    expect(searchWords(datas, inputWord)).toEqual(expected);
  });

  it("should show firstWords e", () => {
    const datas = ["first", "second", "third", "four", "five"];
    const inputWord = "s";
    const expected = ["second"];
    expect(searchWords(datas, inputWord)).toEqual(expected);
  });

  const searchWords = (datas, inputWord) => {
    return datas.filter((word) => !word.search(inputWord));
  };
});
