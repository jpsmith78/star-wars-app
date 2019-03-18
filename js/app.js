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
    //=========================================================
    //<<<<<<<<<<<<<<<<<<<<PLAYER 1 ATTACK FUNCTION>>>>>>>>>>>>>
    //==========================================================
    playerOneAttackEnemy(enemy){
      $('#battle_stats').empty();
      $('#hitpoint_report').empty();
      if(Math.random() <= this.accuracy){
          $('#battle_stats').append($('#player1_card').text()+' has successfully used his '+[this.name]+' against '+($('#player2_card').text())+' for '+[this.attackpoints]+' damage');
          //make if else statement to determine the hitpoints of the enemy and subtract attackpoint from that
          if($('#player2_weapons').text().includes('blaster')){
            $('#hitpoint_report').append($('#player2_card').text()+' has '+[playerTwoBlaster.hitpoints -= this.attackpoints]+' hitpoints remaining');
            if(playerTwoBlaster.hitpoints <= 0){
              playerOneWins();
            }
          }else if ($('#player2_weapons').text().includes('lightsaber')){
            $('#hitpoint_report').append($('#player2_card').text()+' has '+[playerTwoLightsaber.hitpoints -= this.attackpoints]+' hitpoints remaining');
            if(playerTwoLightsaber.hitpoints <= 0){
              playerOneWins();
            }
          }else if ($('#player2_weapons').text().includes('crossbow')){
            $('#hitpoint_report').append($('#player2_card').text()+' has '+[playerTwoCrossbow.hitpoints -= this.attackpoints]+' hitpoints remaining');
            if(playerTwoCrossbow.hitpoints <= 0){
              playerOneWins();
            }
          }
        }else{
          $('#battle_stats').append($('#player1_card').text()+' has unsuccessfully used his '+[this.name]+' against '+($('#player2_card').text()));
          $('#hitpoint_report').append($('#player1_card').text()+" didn't use the force.  What a Jar Jar move!");
        }
      }
    //=========================================================
    //<<<<<<<<<<<<<<<<<<<<PLAYER 2 ATTACK FUNCTION>>>>>>>>>>>>>
    //==========================================================
    playerTwoAttackEnemy(enemy){
      $('#battle_stats').empty();
        $('#hitpoint_report').empty();
      if(Math.random()<= this.accuracy){
          $('#battle_stats').append($('#player2_card').text()+' has successfully used his '+[this.name]+' against '+($('#player1_card').text())+' for '+[this.attackpoints]+' damage');
          //make if else statement to determine the hitpoints of the enemy and subtract attackpoint from that
          if($('#player1_weapons').text().includes('blaster')){
            $('#hitpoint_report').append($('#player1_card').text()+' has '+[playerOneBlaster.hitpoints -= this.attackpoints]+' hitpoints remaining');
            if(playerOneBlaster.hitpoints <= 0){
              playerTwoWins();
            }
          }else if ($('#player1_weapons').text().includes('lightsaber')){
            $('#hitpoint_report').append($('#player1_card').text()+' has '+[playerOneLightsaber.hitpoints -= this.attackpoints]+' hitpoints remaining');
            if(playerOneLightsaber.hitpoints <= 0){
              playerTwoWins();
            }
          }else if ($('#player1_weapons').text().includes('crossbow')){
            $('#hitpoint_report').append($('#player1_card').text()+' has '+[playerOneCrossbow.hitpoints -= this.attackpoints]+' hitpoints remaining');
            if(playerOneCrossbow.hitpoints <= 0){
              playerTwoWins();
            }
          }
        }else{
          $('#battle_stats').append($('#player2_card').text()+' has unsuccessfully used his '+[this.name]+' against '+($('#player1_card').text()));
          $('#hitpoint_report').append($('#player2_card').text()+" didn't use the force.  What a Jar Jar move!");
        }
      }
    }

  //instatiate weapon
  const playerOneBlaster = new Weapon('blaster',60,10,.75)
  const playerOneLightsaber = new Weapon('lightsaber',40,20,.50)
  const playerOneCrossbow = new Weapon('crossbow',50,15,.66)
  const playerTwoBlaster = new Weapon('blaster',60,10,.75)
  const playerTwoLightsaber = new Weapon('lightsaber',40,20,.50)
  const playerTwoCrossbow = new Weapon('crossbow',50,15,.66)
  //=================================================================
  // <<<<<<<<<<<<<<<<<<<<<PLAYER 1 ATTACK >>>>>>>>>>>>>>>>>>>>>>>>>
  // ================================================================
  const playerOneAttack = () => {
    if($('#player1_weapons').text().includes('blaster')){
      playerOneBlaster.playerOneAttackEnemy();
    }else if($('#player1_weapons').text().includes('lightsaber')){
      playerOneLightsaber.playerOneAttackEnemy();
    }else if($('#player1_weapons').text().includes('crossbow')){
      playerOneCrossbow.playerOneAttackEnemy();
    }
  }
  //=================================================================
  // <<<<<<<<<<<<<<<<<<<<<PLAYER 2 ATTACK >>>>>>>>>>>>>>>>>>>>>>>>
  // ================================================================
  const playerTwoAttack = () => {
    if($('#player2_weapons').text().includes('blaster')){
      playerTwoBlaster.playerTwoAttackEnemy();
    }else if($('#player2_weapons').text().includes('lightsaber')){
      playerTwoLightsaber.playerTwoAttackEnemy();
    }else if($('#player2_weapons').text().includes('crossbow')){
      playerTwoCrossbow.playerTwoAttackEnemy();
    }
  }
  //=================================================================
  // <<<<<<<<<<<<<<<<<<<<<PLAYER 1 WINS FUNCTION>>>>>>>>>>>>>>>>>>>
  // ================================================================
  const playerOneWins = () => {
    $('#attack').text('Game Over')
    $('#attack').off('click');
    $('#winner').empty();
    $('#winner').append('The Winner is '+($('#player1_card').text())+'!');
    $('#winner').append($('<button>').text('Play Again?').attr('id','restart'));
    $('#restart').on('click',restart);

  }
  //=================================================================
  // <<<<<<<<<<<<<<<<<<<<<PLAYER 2 WINS FUNCTION>>>>>>>>>>>>>>>>>>>
  // ================================================================
  const playerTwoWins = () => {
    $('#attack').text('Game Over')
    $('#attack').off('click');
    $('#winner').empty();
    $('#winner').append('The Winner is '+($('#player2_card').text())+'!');
    $('#winner').append($('<button>').text('Play Again?').attr('id','restart'));
    $('#restart').on('click',restart);
  }
  //=================================================================
  // <<<<<<<<<<<<<<<<<<<<<RESTART >>>>>>>>>>>>>>>>>>>
  // ================================================================
  const restart = () => {
    $('#attack').text('Player One Attack')
    $('#battle_stats').empty();
    $('#hitpoint_report').empty();
    $('#winner').empty();
    $('#player1_card').empty();
    $('#player2_card').empty();
    $('#player1_weapons').empty();
    $('#player2_weapons').empty();
    $('#player1_form').css('display','block')
    $('#player2_form').css('display','block')
    playerOneBlaster.hitpoints = 60;
    playerOneLightsaber.hitpoints = 40;
    playerOneCrossbow.hitpoints = 50;
    playerTwoBlaster.hitpoints = 60;
    playerTwoLightsaber.hitpoints = 40;
    playerTwoCrossbow.hitpoints = 50;
    counter = 0;
    $('#attack').on('click',() => {
      if(($('#player1_card').text()!== '')&&($('#player2_card').text()!=='')&&($('#player1_weapons').text()!== '')&&($('#player2_weapons').text()!== '')){
        $('#player1_form').css('display','none')
        $('#player2_form').css('display','none')
        counter++;
        if(counter %2 !== 0){
          $('#attack').text('Player Two Attack')
          playerOneAttack()

        } else{
          $('#attack').text('Player One Attack')
          playerTwoAttack()

        }
      }
    })
  }
  //=================================================================
  // <<<<<<<<<<<<<<<<<<<<<WEAPONS FUNCTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>
  // ================================================================
  //create functions to import weapon data into player 1 weapon card
  const getBlasterPlayer1 = () => {
    $('#player1_weapons').empty();
    $('#player1_weapons').append(playerOneBlaster.name+': hitpoints:'+playerOneBlaster.hitpoints+' attackpoints:'+playerOneBlaster.attackpoints+' accuracy:' +playerOneBlaster.accuracy)
  }
  const getLightsaberPlayer1 = () => {
    $('#player1_weapons').empty();
    $('#player1_weapons').append(playerOneLightsaber.name+': hitpoints:'+playerOneLightsaber.hitpoints+' attackpoints:'+playerOneLightsaber.attackpoints+' accuracy:' +playerOneLightsaber.accuracy)
  }
  const getCrossBowPlayer1 = () => {
    $('#player1_weapons').empty();
    $('#player1_weapons').append(playerOneCrossbow.name+': hitpoints:'+playerOneCrossbow.hitpoints+' attackpoints:'+playerOneCrossbow.attackpoints+' accuracy:' +playerOneCrossbow.accuracy);
  }
  //and player 2 weapon card>>>>>>>>>>>>>>>>>>>>>>>>
  const getBlasterPlayer2 = () => {
    $('#player2_weapons').empty();
    $('#player2_weapons').append(playerTwoBlaster.name+': hitpoints:'+playerTwoBlaster.hitpoints+' attackpoints:'+playerTwoBlaster.attackpoints+' accuracy:' +playerTwoBlaster.accuracy)
  }
  const getLightsaberPlayer2 = () => {
    $('#player2_weapons').empty();
    $('#player2_weapons').append(playerTwoLightsaber.name+': hitpoints:'+playerTwoLightsaber.hitpoints+' attackpoints:'+playerTwoLightsaber.attackpoints+' accuracy:' +playerTwoLightsaber.accuracy)
  }
  const getCrossBowPlayer2 = () => {
    $('#player2_weapons').empty();
    $('#player2_weapons').append(playerTwoCrossbow.name+': hitpoints:'+playerTwoCrossbow.hitpoints+' attackpoints:'+playerTwoCrossbow.attackpoints+' accuracy:' +playerTwoCrossbow.accuracy);
  }
  // ============================================================
  // <<<<<<<<<<<<<<<<<<<<<<<<<RADIO BUTTONS>>>>>>>>>>>>>>>>>>>>
  // ============================================================
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
        $()
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
        $($carousel_card).text(data.results[i].name).css('background-image', "url('images/"+i+".jpg')").css('background-size','cover').css('border-radius','5px')
        //append carousel card to carousel images div
        $('#carousel_divs').append($carousel_card)
      }
      //====================================================
      //<<<<<<<<<<<<<<<<<CAROUSEL BUTTONS>>>>>>>>>>>>>>>>>>>
      //====================================================

      //create current div counter variable for carousel
      let currentDivIndex = 0;

      //count how many divs are in the carousel
      const numberOfDivs = $('#carousel_divs').children().length-1;
      // console.log(numberOfDivs);
      //======================================================
      //<<<<<<<<<<<<<<<<<<<<NEXT BUTTON>>>>>>>>>>>>>>>>>>>>>>
      //========================================================
      $('#next_button').on('click',() => {
        //hide current div
        $('#carousel_divs').children().eq(currentDivIndex).css('display','none')
        //increment currentDivIndex if before last index
        if(currentDivIndex < numberOfDivs){
          currentDivIndex++
          //show next div
          $('#carousel_divs').children().eq(currentDivIndex).css('display','flex')
        } else {
          currentDivIndex = 0;
          //show next image
          $('#carousel_divs').children().eq(currentDivIndex).css('display','flex')
        }
      })
      $('#carousel_divs').children().eq(currentDivIndex).css('display','flex')
      //===========================================================
      //<<<<<<<<<<<<<<<<<<<<<<<<<<BACK BUTTON>>>>>>>>>>>>>>>>>>>>>>>
      //===============================================================
      $('#back_button').on('click',() => {
        //hide current div
        $('#carousel_divs').children().eq(currentDivIndex).css('display','none')
        //decrement currentDivIndex if before last index
        if(currentDivIndex > 0){
          currentDivIndex--
          //show previous div
          $('#carousel_divs').children().eq(currentDivIndex).css('display','flex')
          //or return to zero
        } else {
          currentDivIndex = numberOfDivs;
          //show next image
          $('#carousel_divs').children().eq(currentDivIndex).css('display','flex')
        }
      })
      //=========================================================
      //<<<<<<<<<<<<<<<<<<<PLAYER CARDS>>>>>>>>>>>>>>>>>>>>>>>>>>>
      //=========================================================
      //make event handler for player card to move a carousel div to it
      $('.player_card').on('click',(event) => {
        if($(event.target).text()===''){
          $(event.target).append($('#carousel_divs').children().eq(currentDivIndex).clone())
        }
      })
    })

    //=========================================================
    //<<<<<<<<<<<<<<<<<<<<ATTACK BUTTON>>>>>>>>>>>>>>>>>>>
    //=========================================================
    //create counter variable to alternate click listener function
    let counter = 0;
    //create vent listener for attack button
    $('#attack').on('click',() => {
      if(($('#player1_card').text()!== '')&&($('#player2_card').text()!=='')&&($('#player1_weapons').text()!== '')&&($('#player2_weapons').text()!== '')){
        $('#player1_form').css('display','none')
        $('#player2_form').css('display','none')
        counter++;
        if(counter %2 !== 0){
          $('#attack').text('Player Two Attack')
          playerOneAttack()

        } else{
          $('#attack').text('Player One Attack')
          playerTwoAttack()
        }
      }
    })


//onload
})
