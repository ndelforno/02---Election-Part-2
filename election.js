document.addEventListener("DOMContentLoaded", function() {

  // Imagination!
  var candidatesList = document.getElementById('candidatesList');

  var request = axios({
      url:'https://bb-election-api.herokuapp.com/',
      method: 'get',
      data: '',
      dataType: 'JSON'
    }).then(function(response){
      var candidates = response.data.candidates
      candidates.forEach(function(candidate){
        var infos = document.createElement('li')
        infos.innerText = candidate.name + ', Votes: ' + candidate.votes
        candidatesList.append(infos);
      })
    })

    // test

});
