$(() => {
//onload

  //use ajax to access star wars api
  const promise = $.ajax({
      url:"https://swapi.co/api/species/"
  })  //then do something with information from api
    .then(
      (data) => {
        console.log(data);
        //use a for loop to grab 10 species from api
        for (var i = 0; i < 10 ; i++) {
          console.log(data.results[i]);

        }
      }
    )

















//onload
})
