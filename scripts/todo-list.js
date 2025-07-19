let todoarray =[];

const saved = JSON.parse(localStorage.getItem('todoArray'));


if(saved){
  todoarray = saved;
}
else{
  console.log('Tom cruise');
}

const buttonElement = document.querySelector('.add-button');
buttonElement.addEventListener('click' , () => addTodo());

function addTodo(){
  
  const name = document.querySelector('.js-input').value;
  const duedate = document.querySelector('.js-duedate-input').value;
  todoarray.push({'name'  : name,
    'duedate' : duedate
  });

  console.log(todoarray);

  document.querySelector('.js-input').value = '';

  localStorage.setItem('todoArray' , JSON.stringify(todoarray));
  
  todoDisplay();
  
}

function todoDisplay(){
  let html = '';

  todoarray.forEach((value) => {
    const add =  
    `<div> ${value.name}</div>

    <div>${value.duedate}</div>

    <button class="delete-button"
        onclick="">
        Delete
    </button>
      `;
    html += add;
  })
  
  document.querySelector('.js-list').innerHTML = html;

  document.querySelectorAll('.delete-button').forEach((value,index) => {
    value.addEventListener('click' , () => {
      todoarray.splice(index , 1)
      localStorage.setItem('todoArray' , JSON.stringify(todoarray));
      todoDisplay(); 
    })
  })
}

todoDisplay();
