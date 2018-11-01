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
        candidatesList.append(infos)
        var form = document.createElement('form')
        candidatesList.append(form)
        var button = document.createElement("INPUT")
        button.setAttribute("type","submit")
        button.hidden.name = "name"
        button.hidden.value = candidate.name
        form.append(button)
        form.addEventListener("submit",function(e){
          e.preventDefault()
          axios({
            url: 'https://bb-election-api.herokuapp.com/vote/',
            data: {name: candidate.name},
            method: 'post',
            action: 'https://bb-election-api.herokuapp.com/vote'
          })
        })
      })
    }).catch(function(err){
      errorMsg = "something went wrong"
      candidatesList.append(errorMsg)
    })

  var refreshButton = document.getElementById('refresh')
    refreshButton.addEventListener('click',function(e){
      var refresh = axios({
          url:'https://bb-election-api.herokuapp.com/',
          method: 'get',
          data: '',
          dataType: 'JSON'
        }).then(function(response){
          var lis = document.querySelectorAll('li')
          var candidates = response.data.candidates
            for (var i = 0; i < lis.length; i++) {
              lis[i].innerText = candidates[i].name + ', Votes: ' + candidates[i].votes
            }
          })
    })

    // test

});
