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

  it("should remove select comment", () => {
    const id = 2;
    const expected = [
      {
        id: 1,
        userName: "zmf1111",
        content: "1",
      },
      {
        id: 3,
        userName: "zmf1111",
        content: "3",
      },
    ];
    expect(removeComment(comment, id)).toEqual(expected);
  });

  it("should change content inputId comment", () => {
    const id = 2;
    const inputWord = "change";
    const expected = [
      {
        id: 1,
        userName: "zmf1111",
        content: "1",
      },
      {
        id: 2,
        userName: "zmf1111",
        content: "change",
      },
      {
        id: 3,
        userName: "zmf1111",
        content: "3",
      },
    ];

    console.log(chagneContent(comment, id, inputWord));
    expect(chagneContent(comment, id, inputWord)).toEqual(expected);
  });

  const addComment = (comments, inputWord) => {
    return comment.concat({
      id: comments.length + 1,
      content: inputWord,
      userName: "zmf1111",
    });
  };

  const removeComment = (comments, id) => {
    return comments.filter((comment) => comment.id !== id);
  };

  const chagneContent = (comments, id, inputWord) => {
    return comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          content: inputWord,
        };
      }
      return comment;
    });
  };
});
