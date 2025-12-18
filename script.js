function dragElement(pencilElement) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  pencilElement.onpointerdown = pointerDrag;

function pointerDrag(e) {
  e.preventDefault();
  console.log(e);
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onpointermove = elementDrag;
  document.onpointerup = stopElementDrag;
}

function elementDrag(e) {
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;

  // This function is one of the ones I appended to the original terrarium project.
  // It allows a dragged element to "snap" into place if it's close enough to a target position.
  snapElement();
  function snapElement() {
    pencil = pencilElement.getBoundingClientRect();
    pencilCenterX = pencil.left + pencil.width / 2;
    pencilCenterY = pencil.top + pencil.height / 2;
    target1 = document.getElementsByClassName('position')[0].getBoundingClientRect();
    target1CenterX = target1.left + target1.width / 2;
    target1CenterY = target1.top + target1.height / 2;
    target2 = document.getElementsByClassName('position')[1].getBoundingClientRect();
    target2CenterX = target2.left + target2.width / 2;
    target2CenterY = target2.top + target2.height / 2;
    target3 = document.getElementsByClassName('position')[2].getBoundingClientRect();
    target3CenterX = target3.left + target3.width / 2;
    target3CenterY = target3.top + target3.height / 2;
    target4 = document.getElementsByClassName('position')[3].getBoundingClientRect();
    target4CenterX = target4.left + target4.width / 2;
    target4CenterY = target4.top + target4.height / 2;
    target5 = document.getElementsByClassName('position')[4].getBoundingClientRect();
    target5CenterX = target5.left + target5.width / 2;
    target5CenterY = target5.top + target5.height / 2;

    if (Math.abs(pos3 - target1CenterX) <= 50 && Math.abs(pos4 - target1CenterY) <= 50) {
        pencilElement.style.rotate = '0deg';
        pencilElement.style.top = (target1.top + target1.height / 2 - pencil.height / 2) + 'px';
        pencilElement.style.left = (target1.left + target1.width / 2 - pencil.width / 2) + 'px';
    }
    else if (Math.abs(pos3 - target2CenterX) <= 50 && Math.abs(pos4 - target2CenterY) <= 50) {
        pencilElement.style.rotate = '0deg';
        pencilElement.style.top = (target2.top + target2.height / 2 - pencil.height / 2) + 'px';
        pencilElement.style.left = (target2.left + target2.width / 2 - pencil.width / 2) + 'px';
    }
    else if (Math.abs(pos3 - target3CenterX) <= 50 && Math.abs(pos4 - target3CenterY) <= 50) {
        pencilElement.style.rotate = '0deg';
        pencilElement.style.top = (target3.top + target3.height / 2 - pencil.height / 2) + 'px';
        pencilElement.style.left = (target3.left + target3.width / 2 - pencil.width / 2) + 'px';
    }
    else if (Math.abs(pos3 - target4CenterX) <= 50 && Math.abs(pos4 - target4CenterY) <= 50) {
        pencilElement.style.rotate = '0deg';
        pencilElement.style.top = (target4.top + target4.height / 2 - pencil.height / 2) + 'px';
        pencilElement.style.left = (target4.left + target4.width / 2 - pencil.width / 2) + 'px';
    }
    else if (Math.abs(pos3 - target5CenterX) <= 50 && Math.abs(pos4 - target5CenterY) <= 50) {
        pencilElement.style.rotate = '0deg';
        pencilElement.style.top = (target5.top + target5.height / 2 - pencil.height / 2) + 'px';
        pencilElement.style.left = (target5.left + target5.width / 2 - pencil.width / 2) + 'px';
    }
    else {
        pencilElement.style.rotate = '5deg';
        pencilElement.style.top = (pencilElement.offsetTop - pos2) + 'px';
        pencilElement.style.left = (pencilElement.offsetLeft - pos1) + 'px';
    }
  }
}

function stopElementDrag() {
  document.onpointerup = null;
  document.onpointermove = null;
}
}

dragElement(document.getElementById('pencil-blue'));
dragElement(document.getElementById('pencil-green'));
dragElement(document.getElementById('pencil-pink'));
dragElement(document.getElementById('pencil-red'));
dragElement(document.getElementById('pencil-yellow'));
resetPencils(document.getElementById('restart'));

// This function was also appended to the original terrarium project.
// It resets all the pencils to their starting positions upon clicking the restart button on the left.
function resetPencils(buttonElement) {
    let blueLeft = document.getElementById('pencil-blue').style.left;
    let blueTop = document.getElementById('pencil-blue').style.top;
    let greenLeft = document.getElementById('pencil-green').style.left;
    let greenTop = document.getElementById('pencil-green').style.top;
    let pinkLeft = document.getElementById('pencil-pink').style.left;
    let pinkTop = document.getElementById('pencil-pink').style.top;
    let redLeft = document.getElementById('pencil-red').style.left;
    let redTop = document.getElementById('pencil-red').style.top;
    let yellowLeft = document.getElementById('pencil-yellow').style.left;
    let yellowTop = document.getElementById('pencil-yellow').style.top;

    buttonElement.onclick = reset;
    function reset() {
        document.getElementById('pencil-blue').style.rotate = '5deg';
        document.getElementById('pencil-blue').style.left = blueLeft;
        document.getElementById('pencil-blue').style.top = blueTop;
        document.getElementById('pencil-green').style.rotate = '5deg';
        document.getElementById('pencil-green').style.left = greenLeft;
        document.getElementById('pencil-green').style.top = greenTop;
        document.getElementById('pencil-pink').style.rotate = '5deg';
        document.getElementById('pencil-pink').style.left = pinkLeft;
        document.getElementById('pencil-pink').style.top = pinkTop;
        document.getElementById('pencil-red').style.rotate = '5deg';
        document.getElementById('pencil-red').style.left = redLeft;
        document.getElementById('pencil-red').style.top = redTop;
        document.getElementById('pencil-yellow').style.rotate = '5deg';
        document.getElementById('pencil-yellow').style.left = yellowLeft;
        document.getElementById('pencil-yellow').style.top = yellowTop;
    }
}