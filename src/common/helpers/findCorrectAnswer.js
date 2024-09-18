export default function findCorrectAnswer(arr, testId) {
  return arr.find(item => item.testId === testId)?.answerId;
}
