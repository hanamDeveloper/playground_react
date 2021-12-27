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
  
    it("should remove last comment", () => {
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
  
    const addComment = (comments, inputWord) => {
        return comment.concat({
          id: comments.length + 1,
          content: inputWord,
          userName: "zmf1111",
        });
      };

      const removeComment = (comments, id) => {
        return comments.filter(comment => comment.id !== id)
      };
  });
  