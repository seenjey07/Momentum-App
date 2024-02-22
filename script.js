/*Function to show current time*/
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('clockHere');
    const now = new Date();
  
    let hours = now.getHours();
    const aMpM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
  
    const currentTime = `${hours}:${minutes} ${aMpM}`;
    currentTimeElement.textContent = currentTime;
  }
  
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
  
  
  // Function for the greeting with name
  const enterNameButton = document.getElementById('enterNameButton');
  const userName = document.getElementById('userName');
  const greetingsOne = document.getElementById('greetingsOne');
  const greetingsTwo = document.getElementById('greetingsTwo');
  
  function updateUserName() {
    const inputName = document.getElementById('inputName');
    const newName = inputName.value.trim();
    if (newName !== '') {
      userName.textContent = newName;
      greetingsTwo.textContent = `Hi, ${newName}! `;
      inputName.value = '';
      inputName.placeholder = '';
      inputName.classList.add('hidden');
    } else {
      userName.textContent = 'Guest';
      greetingsTwo.innerHTML = 'Hello, Guest!<br>Be awesome today.';
      inputName.value = '';
      inputName.classList.add('hidden');
      greetingsOne.classList.add('hidden');
    }
  }
  
  inputName.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      updateUserName();
    }
  });
  
  
  // Function for adding Focus in the Focus Section
  const inputFocusContainer = document.getElementById('inputFocusContainer');
  const addFocusButton = document.getElementById('addFocus');
  const theFocusList = document.getElementById('theFocusList');
  
  addFocusButton.addEventListener('click', addFocusItem);
  
  inputFocusContainer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addFocusItem();
    }
  });
  
  function addFocusItem() {
    const newFocus = inputFocusContainer.value.trim();
    if (newFocus !== '') {
      const listItem = document.createElement('li');
			todayText.innerHTML = "TODAY:";
      listItem.innerHTML = newFocus;
      theFocusList.innerHTML = '';
      theFocusList.appendChild(listItem);
      inputFocusContainer.value = '';
  
      mainFocus.style.display = 'none';
      inputFocusContainer.style.display = 'none';
      addFocus.style.display = 'none';
    }
  }
  
  //Function to change the quote on the page
  const defaultQuote = document.getElementById('defaultQuote');
  const quoteAuthor = document.getElementById('quoteAuthor');
  const changeQuoteButton = document.getElementById('changeQuoteButton');
  
  async function fetchRandomQuote() {
    const apiUrl = 'https://api.quotable.io/random';
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching quote:', error);
      return null;
    }
  }
  
  changeQuoteButton.addEventListener('click', async () => {
    const randomQuote = await fetchRandomQuote();
    if (randomQuote) {
      defaultQuote.textContent = `"${randomQuote.content}"`;
      quoteAuthor.textContent = `- ${randomQuote.author}`;
    }
  });
  
  const newQuoteInput = document.getElementById('newQuoteInput');
  
  newQuoteInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const newQuote = newQuoteInput.value;
      if (newQuote.trim() !== '') {
        defaultQuote.textContent = `"${newQuote}"`;
        quoteAuthor.textContent = '-You';
      }
    newQuoteInput.value = '';
    }
  });
  
  
  /*For adding the to-do list*/
  const inputToDoContainer = document.getElementById('inputToDoContainer');
  const addToDoButton = document.getElementById('addToDo');
  const theInputToDoList = document.getElementById('theInputToDoList');
  
  addToDoButton.addEventListener('click', addTodoItem);
  
  inputToDoContainer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTodoItem();
    }
  });
  
  function addTodoItem() {
    const newTodo = inputToDoContainer.value.trim();
    if (newTodo !== '') {
      const listItem = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const checkboxId = `todo-${Date.now()}`;
      checkbox.id = checkboxId;
      listItem.appendChild(checkbox);
  
      const label = document.createElement('label');
      label.textContent = newTodo;
      label.setAttribute('for', checkboxId);
      listItem.appendChild(label);
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'x';
      removeButton.classList.add('remove-button');
      listItem.appendChild(removeButton);
  
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          label.style.textDecoration = 'line-through'; // Add strikethrough
        } else {
          label.style.textDecoration = 'none'; // Remove strikethrough
        }
      });
  
      removeButton.addEventListener('click', () => {
        listItem.remove();
        theInputToDoList.classList.remove('has-shadow'); // Remove shadow when removing an item
      });
  
      theInputToDoList.appendChild(listItem);
  
      inputToDoContainer.value = '';
  
      // Add the shadow class
      theInputToDoList.classList.add('has-shadow');
    }
  }