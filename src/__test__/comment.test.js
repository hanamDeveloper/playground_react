describe("show Test", () => {
  const comment = [
    {
      id: 1,
      userName: "zmf1111",
      content: "1",
    },
    {
      id: 2,
      userName: "zmf1111",
      content: "2",
    },
    {
      id: 3,
      userName: "zmf1111",
      content: "3",
    },
  ];

  it("should add comment", () => {
    const inputWord = "4";
    const expected = [
      {
        id: 1,
        userName: "zmf1111",
        content: "1",
      },
      {
        id: 2,
        userName: "zmf1111",
        content: "2",
      },
      {
        id: 3,
        userName: "zmf1111",
        content: "3",
      },
      {
        id: 4,
        userName: "zmf1111",
        content: "4",
      },
    ];
    expect(addComment(comment, inputWord)).toEqual(expected);
  });


  const addComment = (comment, inputWord) => {
    return comment.concat({
      id: comment.length + 1,
      content: inputWord,
      userName: "zmf1111",
    });
  };
});
