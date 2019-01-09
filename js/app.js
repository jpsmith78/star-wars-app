$(() => {
//onload


  //===================================================
  //<<<<<<<<<<<<CREATE WEAPON CLASS>>>>>>>>>>>>>>>>>
  //===================================================
  //create weapon class with name, hitpoints, attackpoints and accuracy
  class Weapon {
    constructor(name,hitpoints,attackpoints,accuracy){
      this.name = name;
      this.hitpoints = hitpoints;
      this.attackpoints = attackpoints;
      this.accuracy = accuracy;
    }
  }
  //instatiate weapon
  const blaster = new Weapon('Blaster',20,20,.7)
  const lightsaber = new Weapon('Lightsaber',15,25,.5)
  const crossbow = new Weapon('Crossbow',25,15,.6)
  //create functions to import weapon data into player 1 weapon card
  const getBlasterPlayer1 = () => {
    $('#player1_weapons').empty();
    $('#player1_weapons').append(blaster.name+': hitpoints:'+blaster.hitpoints+' attackpoints:'+blaster.attackpoints+' accuracy:' +blaster.accuracy)
  }
  const getLightsaberPlayer1 = () => {
    $('#player1_weapons').empty();
    $('#player1_weapons').append(lightsaber.name+': hitpoints:'+lightsaber.hitpoints+' attackpoints:'+lightsaber.attackpoints+' accuracy:' +lightsaber.accuracy)
  }
  const getCrossBowPlayer1 = () => {
    $('#player1_weapons').empty();
    $('#player1_weapons').append(crossbow.name+': hitpoints:'+crossbow.hitpoints+' attackpoints:'+crossbow.attackpoints+' accuracy:' +crossbow.accuracy);
  }
  //and player 2 weapon card
  const getBlasterPlayer2 = () => {
    $('#player2_weapons').empty();
    $('#player2_weapons').append(blaster.name+': hitpoints:'+blaster.hitpoints+' attackpoints:'+blaster.attackpoints+' accuracy:' +blaster.accuracy)
  }
  const getLightsaberPlayer2 = () => {
    $('#player2_weapons').empty();
    $('#player2_weapons').append(lightsaber.name+': hitpoints:'+lightsaber.hitpoints+' attackpoints:'+lightsaber.attackpoints+' accuracy:' +lightsaber.accuracy)
  }
  const getCrossBowPlayer2 = () => {
    $('#player2_weapons').empty();
    $('#player2_weapons').append(crossbow.name+': hitpoints:'+crossbow.hitpoints+' attackpoints:'+crossbow.attackpoints+' accuracy:' +crossbow.accuracy);
  }
  // check radio button function
  $("input[type='radio']").on('click',(event) => {
    //create variable to store radio value
    //radio buttons courtesy of stack overflow and Mark DeMay
    let radioValue =
    $('input[name="weapons1"]:checked').val()
    //use if else statemtn to push weapon data into player1 weapons card
        if (radioValue === 'blaster') {
        getBlasterPlayer1();
      } else if(radioValue === 'lightsaber'){
        getLightsaberPlayer1();
      } else if (radioValue === 'crossbow') {
        getCrossBowPlayer1();
      }

    let radioValue2 =
    $('input[name="weapons2"]:checked').val()
    //use if else statemtn to push weapon data into player1 weapons card
        if (radioValue2 === 'blaster') {
        getBlasterPlayer2();
      } else if(radioValue2 === 'lightsaber'){
        getLightsaberPlayer2();
      } else if (radioValue2 === 'crossbow') {
        getCrossBowPlayer2();
      }
  })
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
