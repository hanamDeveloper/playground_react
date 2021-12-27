describe("show Test", () => {
  const comment = [
    {
      userName: "zmf1111",
      content: "1",
    },
    {
      userName: "zmf1111",
      content: "2",
    },
    {
      userName: "zmf1111",
      content: "3",
    },
  ];

  it("should add comment", () => {
    const inputWord = "4";
    const expected = [
      {
        userName: "zmf1111",
        content: "1",
      },
      {
        userName: "zmf1111",
        content: "2",
      },
      {
        userName: "zmf1111",
        content: "3",
      },
      {
        userName: "zmf1111",
        content: "4",
      },
    ];
    expect(addComment(comment, inputWord)).toEqual(expected);
  });

  const addComment = (comment, inputWord) => {
    return comment.concat({
        content: inputWord,
        userName: 'zmf1111',
      })
  };
});
