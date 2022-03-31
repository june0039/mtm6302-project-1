/* Idea Forum Web Design 3
By: Julie Juneau
Student# 040930994*/

//const $ideaContainer = document.getElementById('ideaContainer');
//const $addIdea = document.getElementById('add');
//const $newIdea = document.getElementById('newIdea');
//const $delete = document.getElementById('delete');
//const $form = document.getElementById('form');
//const $username = document.getElementById('username');

//Declaring the variables

const $data = document.getElementById('data');
const $content = document.getElementById('content')

  //function with If statement compares info and gets the ideas, sets up the buttons
  
  function generateIdeas() {
    $content.innerHTML = ''

    //Loop through idea array

for (let i = 0; i < data.ideas.length; i++) {
  let you = ''
  let userButtons = ''
   
    if (data.ideas[i].username == 'currentuser') {

      you = '<span>YOU</span>'
      userButtons = `
   <button class='idea_edit'>Edit</button>
   <button class= 'idea_delete'>Delete</button>`
    }

    {
      $content.innerHTML += `
    <div class='idea'>

    <section>
      <button class='idea_upvote'>+</button>
    <span> ${data.ideas[i].score} </span>
     <button class= 'idea_downvote'>-</button>
    </section>
   
    <section>
    <h2>${data.ideas[i].username} ${you}</h2>
    <p>${data.ideas[i].content}</p>
    ${userButtons}

    </section>
    </div> `
    }

  }


  //Calling the function to display the ideas
  generateIdeas()



//Adds the click function to all buttons
$content.addEventListener('click', function (e) {

  const $idea = e.target.closest('.idea')
  if ($idea == null) {
      return
  }

  // Grabbing the index
  const index = idea.dataset.index
  console.log(index)

  //Increases a vote score when upvote is activvated 
  if (e.target.classList.contains('idea_upvote')) {
 data.ideas[index].score++
    generateIdeas()
    
    // increase the score data for this specific idea

     data.ideas[index].score++
      generateIdeas()

  }

  if (e.target.classList.contains('idea_downvote')) {

//decreases the score for the specific idea   
 data.ideas[index].score--
  generateIdeas()

  }

  if (e.target.classList.contains('idea_edit')) {
    
    alert('edit')
  }

   //Deletes Idea and modifies data   
  if (e.target.classList.contains('idea_delete')) {
    
    alert('delete')
  }

})

// Alert function to display alert
const $addIdea = document.getElementById('addIdea')

 $addIdea.addEventListener('click', function () {
   e.preventDefault()
   
  alert('add')

})



/*Fuction to display all the info in an array 
function displayData() {
  //created array to hold html string
  
  const HTML = []

  /* For loop to fill array 

  for (let index = 0; index < data.length; index++) {
    HTML.push(`<li class="list-group-item"> ${data[index]}
    <button type="button" class="btn-close" aria-label="Close" data-index"${index}"></button></li>`)
  }

  //insert html array into newIdea text area
  $ideaContainer.innerHTML = html.join('')

  //invoke array

  ListnewIdea()

}

 /* for (let i = 0; i < data.length; i++) {
  
    HTML.push(`<li class="list-group-item d-flex justify-content-between">${$ideaContainer[i]}
<button type="button" class="btn close" aria-label="close" data-index="${index}"></button></li>`)

 }

/* Add Ideas function */
  
  //$addIdea.addEventListener('submit', function (e) {
  //*Adds Idea to the Idea's area
   // e.preventDefault();

   // data.push($newIdea.value)
    
    //clear the form

  //  $addnewIdea.reset()

    //Invoke the new idea to update 
     
   // List.ideas[];

   // displayData.ideas[]


//})

/* Need a "you" tag on current user and up down vote */

/* Delete a Idea button */
/*<button type ="delete" class="btn-delete" aria-label="Delete"></button>
    
/* Edit an Idea  button*/

  /*ideaScore
/*idea
/*up vote/ down vote
 you tag delete add*/