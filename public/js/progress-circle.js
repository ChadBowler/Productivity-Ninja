
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

  progressCirclePercent.innerHTML = progressPercent.toFixed(0);
  progressCircle.style=`background-image: conic-gradient(#0cacf7 0% ${progressPercent}%, black ${progressPercent}% 100%);`;
}

fillProgressCircle(completeTasks(), incompleteTasks());