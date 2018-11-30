let canvasSize = 270,
    centre = canvasSize/2,
    radius = canvasSize*0.8/2,
    s = Snap('#svg'),
    path = "",
    arc = s.path(path),
    startY = center-radius,
    runBtn = document.getElementById('run'),
    percDiv = document.getElementById('percent'),
    input = document.getElementById('input');

input.onkeyup = function(evt) {
    if(isNaN(input.value)) {
        input.value = '';
    }
};


