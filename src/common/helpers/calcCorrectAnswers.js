export default function calcCorrectAnswers(arrCorrect, arrUser) {
  return arrUser.reduce((count, userAnswer) => {
    const correctAnswer = arrCorrect.find(
      answer => answer.testId === userAnswer.testId,
    )?.answerId;
    return count + (userAnswer.answerId === correctAnswer ? 1 : 0);
  }, 0);
}
