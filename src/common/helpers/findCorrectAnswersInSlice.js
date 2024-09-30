export default function findCorrectAnswersInSlice(arr) {
  return arr.map(test => {
    const answerId = test.answers.find(answer => answer.isRight === true).id;
    return {
      testId: test.id,
      answerId,
    };
  });
}
