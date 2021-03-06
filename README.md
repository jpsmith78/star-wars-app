# star-wars-app


[link to app](https://jpsmith78.github.io/star-wars-app/ "star wars battle")

### A Brief Overview

Star Wars Battle is a head to head fighter game.  The player first chooses the character that they want by moving through a carousel of pictures and then clicking on the empty player pane when they find a character that they want to use.  

When players are selected, the user is then led to choose weapons for the players in a pair of radio lists.  

Once both players and both weapons are selected, the user will be able to press the attack button, which will take turns applying one players attack points and accuracy to the opponents hit points until one player has reached zero hit points.  At this point a win message will appear and the user will have the option to start over.

### Resources Used

I referred to my general assembly student example code while building my carousel and javascript weapon class.  
I used css tricks to find the right transform property in my header.  MDN, stack overflow and w3schools were all used at some point for quick references.  My radio input code was created with the help of Mark DeMay.

### Technologies Used

1. HTML
1. CSS
1. JavaScript
1. jQuery
1. Ajax

### Approach Taken

I drew out the wireframe for phone and monitor to give myself an idea of how to set up my html.  I then laid out my html and enough css to make sure that my page was somewhat laid out the way I wanted it to be.  Then I started working on game logic.

I started with by connecting my API to the page with Ajax. In my then statement, I used a for loop to store ten character names along with my images into ten divs which were appended to my carousel div. I then made my carousel function using an if else statement as an event handler for the next and back button clicks.  I then made another event handler that pulled the current image in the carousel to the player card on click.

I then created a weapon class with stats and an attack enemy function each for player one and for player two. This is called by the attack button event handler at the bottom of the page. I instantiated the three different weapons for each player to keep the game logic from mistaking one player from another if they both had the same weapon.

The attack enemy functions have an if else statement running through the three weapon option that the opponent could have and how many hitpoints they have remaining after a successful attack.

The attack enemy functions were then called by the attack functions for either player one or player two, which contain if else statements that choose which stats that they have based on the users weapon choice.

The win functions for each player turn off the click listener on the attack button, declare a winner, and append a play again button in the winner pane after a players hitpoints reach zero.  This function is called in the attack enemy function.

Inside each win function, the restart function is called, which clears all data fields and resets hitpoint values.

After setting most of the game logic, I turned my attention to the css.  I used flexbox on nearly all elements so the page would be responsive and then found background images and borders that I felt complemented each other well.

There will be more small changes still to come.


### Unsolved Problems

I'm sure that there's a dryer way to make this game work without using so many if else statements, but I couldn't quite figure out how with my weapons and character separated as they are.  
