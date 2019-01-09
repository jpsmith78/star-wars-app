$(() => {
//onload



  //use ajax to access star wars api
  const promise = $.ajax({
      url:"https://swapi.co/api/people/?page=2"
  }).then(
    (data) => {
      console.log(data.results);
      // use a for loop to grab 10 species from api
      for (var i = 0; i < 10; i++) {
        //create carousel card div
        const $carousel_card = $('<div>').addClass('carousel_card')
        //add people names to carousel cards
        $($carousel_card).text(data.results[i].name)
        //append carousel card to carousel images div
        $('#carousel_divs').append($carousel_card)
      }
      //create current div counter variable for carousel
      let currentDivIndex = 0;
      //count how many divs are in the carousel
      const numberOfDivs = $('#carousel_divs').children().length-1;
      console.log(numberOfDivs);

      //next button
      $('#next_button').on('click',() => {
        //hide current div
        $('#carousel_divs').children().eq(currentDivIndex).css('display','none')
        //increment currentDivIndex if before last index
        if(currentDivIndex < numberOfDivs){
          currentDivIndex++
          $('#carousel_divs').children().eq(currentDivIndex).css('display','block')
          //or return to zero
        } else {
          currentDivIndex = 0;
          $('#carousel_divs').children().eq(currentDivIndex).css('display','block')
        }
      })

      //show next image


      //back_button
    }
  )















//onload
})
