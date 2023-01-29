'use strict'

var search = document.querySelector('[type=search]');
var code = document.querySelector('pre');

search.addEventListener('keyup', function(){
  var xhr = new XMLHttpRequest;
  xhr.open('GET', '/search/' + search.value, true);
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
      code.textContent = xhr.responseText;
      switch (xhr.responseText) {
        case 'Not found':
          var createProfile = document.createElement('button');
          createProfile.textContent = 'Create Profile';
          createProfile.addEventListener('click', function () {
            var xhr = new XMLHttpRequest;
            xhr.open('GET', '/create/' + search.value, true);
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                code.textContent = xhr.responseText;
              }
            };
            xhr.send();
          }, false);

          code.appendChild(createProfile);
          break;
          case "0":
            var addBalance = document.createElement('button');
            addBalance.textContent = 'Add Money';
            addBalance.addEventListener('click', function () {
              var xhr = new XMLHttpRequest;
              xhr.open('GET', '/add/' + search.value, true);
              xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                  code.textContent = xhr.responseText;
                }
              };
              xhr.send();
            }, false);
  
            code.appendChild(addBalance);
            break;
        default:
          var payButton = document.createElement('button');
          payButton.textContent = 'Pay';
          payButton.addEventListener('click', function () {
            var xhr = new XMLHttpRequest;
            xhr.open('GET', '/pay/' + search.value, true);
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                code.textContent = xhr.responseText;
              }
            };
            xhr.send();
          }, false);

          code.appendChild(payButton);
          break;

      }}
  };
  xhr.send();

}, false);
