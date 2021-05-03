//next:
  //mostly refactored, but need to be able to set duration variable dynamically as a prop from Card component


  //refactor with Hooks according to diagram in notebook
  //lots of this is undefined, may need to look over course more

//next: 
  // get play Functionality with setInterval()
    // Hooks?
  // get clearInterval()

//next:Play pause stop buttons
  //xSplit Card into smaller components
  //xxmake if statement for play pause button

//Data holds times, and is passed down as state
//Countdown function can be an event handler triggered by play button
    //Renders to timer display

//Parent Component (Flex container)
    //Card Component
        //Timer display
        //Time selector (25-50)
        //xxPlay pause button
        //xxStop button
        //Work Journal display
          //max width and overflow auto?
        //input for work journal

    //Work end function
        //Display alert that asks if you want to extend
            //if yes, go to work extension card
            //If no, ask break time
                //Go to break card

    //Work extension
        //Copy of work card, with chosen time

    //Create break Card component
        //Time-selector (5-10-15)
        //Display notes
        //Habit tracker input sets Title of Work card 
        //Break ends, push Card to cardHistory list
    
    //cardHistory List

//25/50 card
  //Create 25 min card with timer
  //Timer holds a button that can trigger a dropdown, which will change the amount of time 
  //Start timer triggers timer
  //If timer gets to 0, ask if want to extend (5 min snooze)
    //if yes, fade it out, and bring the next one up 
    //If no, next slide will ask how long next block will be
  //During timer, display input field
  //Start timer, take a timestamp
  //notes go to list above input field

//Break block
  //input field is transformed to habit tracker input, character limited
  //display notes with timestamp at top
    //save for next 25/50 block
  //Input to field is displayed as a header to notes
  //At end, play sound, alert
  //At end ask if you want to extend
  //If no, next slide will ask how long next block will be
//Playlist
  //Display playlist on side when asking to extend
  //Show position in playlist