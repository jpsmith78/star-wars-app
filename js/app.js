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
        const $carousel_image = $('<div>').addClass('carousel_card')
        $($carousel_image).text(data.results[i].name)
        $('#carousel_container').append($carousel_image)


      }
    }
  )


















//onload
})
