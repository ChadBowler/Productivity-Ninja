const completeTasks = function () {
  const ctasks = document.getElementById('complete-tasks').children[1].children;
  return ctasks.length;
};

const incompleteTasks = function () {
  const itasks = document.getElementById('incomplete-tasks').children[1].children;
  return itasks.length;
};

function fillProgressCircle(completeTasks, incompleteTasks) {
  let totalTasks = completeTasks + incompleteTasks;
  let progressPercent = completeTasks / totalTasks * 100;

  if (Number.isNaN(progressPercent)) {
    progressPercent = 0;
  }

  let progressCirclePercent = document.getElementById('progress-text');
  let progressCircle = document.getElementById('progress-circle');
  let projectCompleteButton = document.getElementById('project-complete-button');

  progressCirclePercent.innerHTML = progressPercent.toFixed(0);
  progressCircle.style = `background-image: conic-gradient(#08678C 0% ${progressPercent}%, black ${progressPercent}% 100%);`;

  // complete project button appears when the progress circle is 100% and there are  tasks in the completed task section
  if (completeTasks > 0 && progressPercent === 100) {
    projectCompleteButton.style.display = 'block';
  } else {
    projectCompleteButton.style.display = 'none';
  }
}

fillProgressCircle(completeTasks(), incompleteTasks());
