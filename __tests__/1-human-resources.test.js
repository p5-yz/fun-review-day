const {makeNameTags, createPoll} = require("../sections/1-human-resources.js");

describe("makeNameTags: ", () => {
  test("should have an array of objects", () => {
    const arrObj = [{},{}]
    const actualOutput = makeNameTags(arrObj)
    expect(actualOutput).toEqual(arrObj)
  })
  
});
