// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  const allCustomers = document.querySelector('.customers');

  fetch('https://randomuser.me/api/?format=json&results=12&nat=us&seed=bob')
    .then(function(response) { return response.json() })
    .then(function(data) {
      buildCustomers(data.results);
    });

  //firstname lastname
  //emailAddress
  //street address
  //city ST zip
  //phone ###-###-####

  function buildCustomers(array) {
    console.log(array[0]);
    for (let id in array) {
      const person = array[id];
      let personName = person.name.first + " " + person.name.last;
      let personEmail = person.email;
      let personAddr1 = person.location.street;
      let personAddr2 = person.location.city + ", " + person.location.state + " " + person.location.postcode;
      let personPhone = person.phone;
      let box = document.createElement('div');
      let img = document.createElement('img');
      img.setAttribute('src', person.picture.large);
      box.appendChild(img);
      let name = document.createElement('p');
      name.textContent = personName.toUpperCase();
      name.classList.add('name');
      box.appendChild(name);
      let email = document.createElement('p');
      email.textContent = personEmail.toUpperCase();
      email.classList.add('email');
      box.appendChild(email);
      let address = document.createElement('p');
      address.innerHTML = personAddr1 + "<br>" + personAddr2;
      address.classList.add('address');
      box.appendChild(address);
      let phone = document.createElement('p');
      phone.textContent = personPhone;
      phone.classList.add('phone');
      box.appendChild(phone);
      allCustomers.appendChild(box);

    }


  }

})();
