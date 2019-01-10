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
      if(Math.random() <= this.accuracy){
          console.log($('#player1_card').text()+' has successfully used his '+[this.name]+' against '+($('#player2_card').text()));
          //make if statement to determine the hitpoints of the enemy and subtract attackpoint from that
          if($('#player2_weapons').text().includes('blaster')){
            console.log($('#player2_card').text()+' has '+[blaster.hitpoints -= this.attackpoints]+' hitpoints remaining');
          }else if ($('#player2_weapons').text().includes('lightsaber')){
            console.log($('#player2_card').text()+' has '+[lightsaber.hitpoints -= this.attackpoints]+' hitpoints remaining');
          }else if ($('#player2_weapons').text().includes('crossbow')){
            console.log($('#player2_card').text()+' has '+[crossbow.hitpoints -= this.attackpoints]+' hitpoints remaining');
          }
        }else{
          console.log($('#player1_card').text()+' has unsuccessfully used his '+[this.name]+' against '+($('#player2_card').text()));
          //make if statement to determine the hitpoints of the enemy
          if($('#player2_weapons').text().includes('blaster')){
            console.log($('#player2_card').text()+' has '+[blaster.hitpoints]+' hitpoints remaining');
          }else if ($('#player2_weapons').text().includes('lightsaber')){
            console.log($('#player2_card').text()+' has '+[lightsaber.hitpoints]+' hitpoints remaining');
          }else if ($('#player2_weapons').text().includes('crossbow')){
            console.log($('#player2_card').text()+' has '+[crossbow.hitpoints]+' hitpoints remaining');
          }
        }
      }
    //=========================================================
    //<<<<<<<<<<<<<<<<<<<<PLAYER 2 ATTACK FUNCTION>>>>>>>>>>>>>
    //==========================================================
    playerTwoAttackEnemy(enemy){
      if(Math.random()<= this.accuracy){
          console.log($('#player2_card').text()+' has successfully used his '+[this.name]+' against '+($('#player1_card').text())+' for '+[this.attackpoints]+' damage');
          //make if statement to determine the hitpoints of the enemy and subtract attackpoint from that
          if($('#player1_weapons').text().includes('blaster')){
            console.log($('#player1_card').text()+' has '+[blaster.hitpoints -= this.attackpoints]+' hitpoints remaining');
          }else if ($('#player1_weapons').text().includes('lightsaber')){
            console.log($('#player1_card').text()+' has '+[lightsaber.hitpoints -= this.attackpoints]+' hitpoints remaining');
          }else if ($('#player1_weapons').text().includes('crossbow')){
            console.log($('#player1_card').text()+' has '+[crossbow.hitpoints -= this.attackpoints]+' hitpoints remaining');
          }
        }else{
          console.log($('#player2_card').text()+' has unsuccessfully used his '+[this.name]+' against '+($('#player1_card').text()));
          //make if statement to determine the hitpoints of the enemy
          if($('#player1_weapons').text().includes('blaster')){
            console.log($('#player1_card').text()+' has '+[blaster.hitpoints]+' hitpoints remaining');
          }else if ($('#player1_weapons').text().includes('lightsaber')){
            console.log($('#player1_card').text()+' has '+[lightsaber.hitpoints]+' hitpoints remaining');
          }else if ($('#player1_weapons').text().includes('crossbow')){
            console.log($('#player1_card').text()+' has '+[crossbow.hitpoints]+' hitpoints remaining');
          }
        }
      }
    }

  //instatiate weapon
  const blaster = new Weapon('blaster',20,20,.7)
  const lightsaber = new Weapon('lightsaber',15,25,.5)
  const crossbow = new Weapon('crossbow',25,15,.6)
  //=================================================================
  // <<<<<<<<<<<<<<<<<<<<<PLAYER 1 ATTACK FUNCTION>>>>>>>>>>>>>>>>>>>
  // ================================================================
  const playerOneAttack = () => {
    if($('#player1_weapons').text().includes('blaster')){
      console.log(blaster.playerOneAttackEnemy());
    }else if($('#player1_weapons').text().includes('lightsaber')){
      console.log(lightsaber.playerOneAttackEnemy());
    }else if($('#player1_weapons').text().includes('crossbow')){
      console.log(crossbow.playerOneAttackEnemy());
    }
  }
  //=================================================================
  // <<<<<<<<<<<<<<<<<<<<<PLAYER 2 ATTACK FUNCTION>>>>>>>>>>>>>>>>>>>
  // ================================================================
  const playerTwoAttack = () => {
    if($('#player2_weapons').text().includes('blaster')){
      console.log(blaster.playerTwoAttackEnemy());
    }else if($('#player2_weapons').text().includes('lightsaber')){
      console.log(lightsaber.playerTwoAttackEnemy());
    }else if($('#player2_weapons').text().includes('crossbow')){
      console.log(crossbow.playerTwoAttackEnemy());
    }
  }


  //=================================================================
  // <<<<<<<<<<<<<<<<<<<<<WEAPONS FUNCTIONS>>>>>>>>>>>>>>>>>>>>>>>>>>
  // ================================================================
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
  //and player 2 weapon card>>>>>>>>>>>>>>>>>>>>>>>>
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
      //<<<<<<<<<<<<<<<<<<<<NEXT BUTTON>>>>>>>>>>>>>>>>>>>>>>
      //========================================================
      $('#next_button').on('click',() => {
        //hide current div
        $('#carousel_divs').children().eq(currentDivIndex).css('display','none')
        //increment currentDivIndex if before last index
        if(currentDivIndex < numberOfDivs){
          currentDivIndex++
          //show next div
          $('#carousel_divs').children().eq(currentDivIndex).css('display','block')
        } else {
          currentDivIndex = 0;
          //show next image
          $('#carousel_divs').children().eq(currentDivIndex).css('display','block')
        }
      })
      $('#carousel_divs').children().eq(currentDivIndex).css('display','block')
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
          $(event.target).append($('#carousel_divs').children().eq(currentDivIndex).clone())
        }
      })
    })

    //=========================================================
    //<<<<<<<<<<<<<<<<<<<<ATTACK BUTTON>>>>>>>>>>>>>>>>>>>
    //=========================================================
    //create counter variable to alternate click listener function
    let counter = 0;

    $('button').on('click',() => {

      counter++;
      console.log(counter);
      if(counter %2 !== 0){
        playerOneAttack()
      } else{
        playerTwoAttack()
      }
    })











//onload
})
