var inputBox = document.getElementById('text-input');
var list = document.querySelector('ul');
var taskText = '';
var checkId = 0;

function clearInput(){
   inputBox.value = '';
}


function enter(e){
   if (e.code === 'Enter'){
      var text = document.createTextNode(taskText);
      var item = document.createElement('li');
      var check = document.createElement('input');
      var label = document.createElement('label')
   
      checkId++

      check.setAttribute('type', 'checkbox');
      check.setAttribute('class', 'check');
      check.setAttribute('label', checkId);
      check.setAttribute('value', taskText);
      label.setAttribute('for', checkId);
      label.appendChild(text);
      item.appendChild(check);
      item.appendChild(label);
      list.appendChild(item);
      taskText = '';
      clearInput();
   } else if(e.code === 'Backspace'){
      taskText = taskText.slice(0, -1);
   } else if(e.key === 'Shift' || e.key === 'Control' || e.key === 'Dead' || e.key === 'Tab'){
      console.log('code: ' +e.code)
   } else {
      taskText += e.key;
   }
}

inputBox.addEventListener('keyup', enter);