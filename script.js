/* Idea Forum Web Design 3
By: Julie Juneau
Student# 040930994*/

//const $ideaContainer = document.getElementById('ideaContainer');
//const $addIdea = document.getElementById('add');
//const $newIdea = document.getElementById('newIdea');
//const $delete = document.getElementById('delete');
//const $form = document.getElementById('form');


//Declaring the variables
const $popup = document.getElementById('popup');
const $data = document.getElementById('data');
const $content = document.getElementById('content')
const $editTextarea = document.getElementById('editTextarea')

let index = null
  //function with If statement compares info and gets the ideas, sets up the buttons
  
function generateIdeas() {
  $content.innerHTML = ''

  //Loop through idea array

  for (let i = 0; i < data.ideas.length; i++) {
    let you = ''
    let userButtons = ''
   
    if (data.ideas[i].username == 'currentUser') {

      you = '<span>YOU</span>'
      userButtons = `
   <button class='idea_edit'>Edit</button>
   <button class= 'idea_delete'>Delete</button>`
    }

    
      $content.innerHTML += `
    <div class='idea'data-index='${i}'>

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
     const index = $idea.dataset.index
    console.log(index)

    //Increases a vote score when upvote is activated 
    if (e.target.classList.contains('idea_upvote')) {
    
    
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
    
      $popup.classList.remove('hidden')
      $editTextarea.innerHTML = data.ideas
      content

    }

    //Deletes Idea and modifies the data perminately    
    if (e.target.classList.contains('idea_delete')) {

    //Using Splice to remove info from the array and delete it
      data.ideas.splice(index, 1)
      generateIdeas()

    }

  })

$popup.addEventListener('click', function (e) {
  if (e.target.classList.contains('popup_cancel')) {
    $popup.classList.add('hidden')
  }

  if (e.target.classList.contains('popup_update')) {
    $popup.classList.add('hidden')
    data.ideas[index].content = $editTextarea.innerHTML
    generateIdeas()

  }
})

  // Alert function to display alert
  const $addIdea = document.getElementById('addIdea')

$addIdea.addEventListener('click', function (e) {
    
    e.preventDefault()
   
    alert('add')

})
  

//add new idea
//modify array with new idea-push


//const idea = {
 // username: 'currentUser',
 // content: '',
  //score: 0,

//}

//data.ideas.push(idea)-update data





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