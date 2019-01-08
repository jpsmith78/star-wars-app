$(() => {
//onload

const promise = $.ajax({
    url:'https://swapi.co/api/people/'

});


promise.then(
  (data) => {
    console.log(data);
  }
)

















//onload
})
