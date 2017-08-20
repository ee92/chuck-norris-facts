document.getElementById('text').innerHTML = "There are no Chuck Norris jokes.. only Chuck Norris facts."

$('#get-fact').click(() => {
  getFact()
});

function getFact() {
  var fact;
  $.get('https://api.chucknorris.io/jokes/random', (data) => {
    fact = data.value;
  }).then(() => {
    document.getElementById('text').innerHTML = fact;
    thug();
  });
};

function thug() {
  $('#chuck').attr('src', 'img/thuglife.png');
  $('#chuck').attr('class', 'img-responsive thug')
  setTimeout(() => {
    chuck.src = 'img/chuck.gif';
    $('#chuck').attr('class', 'img-responsive')
  },1500);
};
