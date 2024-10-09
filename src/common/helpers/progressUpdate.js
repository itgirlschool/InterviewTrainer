const updProgress = (
  progressFromRTK,
  { gradeName, blockName, lastItem, blockProgress },
) => {
  return progressFromRTK.map(grade => {
    if (grade.gradeName === gradeName) {
      return {
        ...grade,
        blocks: grade.blocks.map(block => {
          if (block.blockName === blockName) {
            return {
              ...block,
              lastItem,
              blockProgress,
            };
          }
          return block;
        }),
      };
    }
    return grade;
  });
};

const updateProgress = (
  progressArray,
  { gradeName, blockName, lastItem, blockProgress },
) => {
  const updatedGrade = progressArray.find(grade => grade.gradeName === gradeName);

  if (updatedGrade) {
    const updatedBlocks = updatedGrade.blocks.map(block => {
      if (block.blockName === blockName) {
        return {
          ...block,
          lastItem,
          blockProgress,
        };
      }
      return block;
    });

    const totalBlocks = updatedBlocks.length;
    const totalProgress = updatedBlocks.reduce(
      (acc, block) => acc + block.blockProgress,
      0,
    );

    return {
      ...updatedGrade,
      blocks: updatedBlocks,
      totalProgress: Number(
        parseFloat(totalBlocks > 0 ? totalProgress / totalBlocks : 0).toFixed(2),
      ),
    };
  }
  return null;
};
