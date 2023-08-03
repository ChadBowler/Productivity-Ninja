
const completeTasks = function () {
  const ctasks = document.getElementById('complete-tasks');
};
const incompleteTasks = function () {
  const itasks = document.getElementById('incomplete-tasks');
};



function fillProgressCircle(completeTasks, incompleteTasks) {
  let totalTasks = completeTasks + incompleteTasks;
  let progressPercent = completeTasks / totalTasks * 100;

  if (typeof progressPercent === NaN) {
    progressPercent = 0;
  }

  let progressCirclePercent = document.getElementById('progress-text');
  let progressCircle = document.getElementById('progress-circle');

  progressCirclePercent.innerHTML = progressPercent.toFixed(0);
  progressCircle.style=`background-image: conic-gradient(#009933 0% ${progressPercent}%, #ce2315 ${progressPercent}% 100%);`;
}

fillProgressCircle(0, 0);