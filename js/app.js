$(() => {
//onload
//create pick random variable



  //===================================================
  //<<<<<<<<<<<<<<<<<<PROMISE>>>>>>>>>>>>>>>>>>>>>>>>>>
  //===================================================
  //use ajax to access star wars api
  const promise = $.ajax({
      url:"https://swapi.co/api/people/?page=2"
  }).then(
    (data) => {
      // console.log(data.results);
      // use a for loop to grab 10 species from api
      for (var i = 0; i < 10; i++) {
        //create carousel card div
        const $carousel_card = $('<div>').addClass('carousel_card')
        //add people names to carousel cards
        $($carousel_card).text(data.results[i].name)
        //append carousel card to carousel images div
        $('#carousel_divs').append($carousel_card)
      }
      //====================================================
      //<<<<<<<<<<<<<<<<<CAROUSEL BUTTONS>>>>>>>>>>>>>>>>>>>
      //====================================================

      //create current div counter variable for carousel
      let currentDivIndex = 0;

      let randomNum = Math.floor(Math.random()*9)
      //count how many divs are in the carousel
      const numberOfDivs = $('#carousel_divs').children().length-1;
      // console.log(numberOfDivs);
      //======================================================
      //NEXT BUTTON
      $('#next_button').on('click',() => {
        //hide current div
        $('#carousel_divs').children().eq(currentDivIndex).css('display','none')
        //increment currentDivIndex if before last index
        if(currentDivIndex < numberOfDivs){
          currentDivIndex++
          //show next div
          $('#carousel_divs').children().eq(currentDivIndex).css('display','block')
          //or return to zero
        } else {
          currentDivIndex = 0;
          //show next image
          $('#carousel_divs').children().eq(currentDivIndex).css('display','block')
        }
      })
      $('#carousel_divs').children().eq(currentDivIndex).css('display','block')
      //===========================================================
      //BACK BUTTON
      $('#back_button').on('click',() => {
        //hide current div
        $('#carousel_divs').children().eq(currentDivIndex).css('display','none')
        //decrement currentDivIndex if before last index
        if(currentDivIndex > 0){
          currentDivIndex--
          //show previous div
          $('#carousel_divs').children().eq(currentDivIndex).css('display','block')
          //or return to zero
        } else {
          currentDivIndex = numberOfDivs;
          //show next image
          $('#carousel_divs').children().eq(currentDivIndex).css('display','block')
        }
      })
      //=========================================================
      //<<<<<<<<<<<<<<<<<<<PLAYER CARDS>>>>>>>>>>>>>>>>>>>>>>>>>>>
      //=========================================================
      //make event handler for player card to move a carousel div to it
      $('.player_card').on('click',(event) => {
        if($(event.target).text()==''){
          $(event.target).append($('#carousel_divs').children().eq(currentDivIndex))
        }
      })
    //==========================================


      })














//onload
})
