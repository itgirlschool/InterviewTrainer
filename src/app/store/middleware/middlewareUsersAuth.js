import { setUser, updateProgress, updateGradeProgress } from "../slice/UserAuthSlice.js";

const middlewareUsers = database => {
  return store => next => action => {
    if (action.type === "SUBSCRIBE_TO_USER") {
      database.ref("users").on("value", snapshot => {
        const data = Object.values(snapshot.val());
        const { displayName, email, id, password, lastName, firstName, progress } =
          data.find(user => user.email === action.emailUser);
        store.dispatch(
          setUser({
            email,
            password,
            displayName,
            id,
            lastName,
            firstName,
            progress: progress || [],
          }),
        );
      });
    }

    if (action.type === "UPDATE_PROGRESS") {
      const { emailUser, gradeName, blockName, lastItem, blockProgress } = action.payload;

      database.ref("users").on("value", snapshot => {
        const data = snapshot.val();
        const userKey = Object.keys(data).find(key => data[key].email === emailUser);

        if (userKey) {
          const user = data[userKey];
          const updatedProgress = user.progress.map(grade => {
            if (grade.gradeName === gradeName) {
              return {
                ...grade,
                blocks: grade.blocks.map(block => {
                  if (block.blockName === blockName) {
                    return { ...block, lastItem, blockProgress };
                  }
                  return block;
                }),
              };
            }
            return grade;
          });

          database.ref(`users/${userKey}`).update({ progress: updatedProgress });

          const totalBlocks =
            updatedProgress.find(grade => grade.gradeName === gradeName)?.blocks.length ||
            0;
          const totalProgress =
            updatedProgress
              .find(grade => grade.gradeName === gradeName)
              ?.blocks.reduce((acc, block) => {
                return acc + (block.blockProgress || 0);
              }, 0) || 0;

          const totalProgressPercentage = Number(
            parseFloat(totalBlocks > 0 ? totalProgress / totalBlocks : 0).toFixed(2),
          );

          store.dispatch(
            updateProgress({
              gradeName,
              blockName,
              lastItem,
              blockProgress,
            }),
          );

          store.dispatch(updateGradeProgress({ gradeName }));

          database.ref(`users/${userKey}`).update({
            progress: updatedProgress.map(grade => {
              if (grade.gradeName === gradeName) {
                return {
                  ...grade,
                  totalProgress: totalProgressPercentage,
                };
              }
              return grade;
            }),
          });
        }
      });
    }

    if (action.type === "RESET_TOTAL_PROGRESS") {
      const { emailUser, gradeName, blockNames } = action.payload;

      database.ref("users").on("value", snapshot => {
        const data = snapshot.val();
        const userKey = Object.keys(data).find(key => data[key].email === emailUser);

        if (userKey) {
          const user = data[userKey];
          const updatedProgress = user.progress.map(grade => {
            if (grade.gradeName === gradeName) {
              return {
                ...grade,
                blocks: grade.blocks.map(block => {
                  if (blockNames.includes(block.blockName)) {
                    return { ...block, lastItem: 0, blockProgress: 0 };
                  }
                  return block;
                }),
              };
            }
            return grade;
          });

          database.ref(`users/${userKey}`).update({ progress: updatedProgress });

          store.dispatch(updateGradeProgress({ gradeName }));
        }
      });
    }
    return next(action);
  };
};
export default middlewareUsers;
