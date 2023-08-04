const isEmpty = function (tasks, status) {
  console.log(status);
  if (status) {
    return false;
  } else {
    const unfinishedTasks = tasks.filter((task) => task.status === false);
    console.log('unfinishedTasks', unfinishedTasks);
    if (unfinishedTasks.length) {
      return false;
    } else {
      return true;
    }
  }
};

const isComplete = function (status) {
  console.log(status);
  if (status) {
    return true;
  }
  return false;
};

module.exports = {
  isEmpty,
  isComplete,
};
