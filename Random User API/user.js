const loadUser = () => {
  const noOfUser = document.getElementById('noOfUser');
  const userDetails = document.getElementById('userDetails');
  userDetails.innerHTML = '';
  let userNumber = parseInt(noOfUser.value);
  console.log(userNumber);
  if (!isNaN(userNumber)) {
    fetch(`https://randomuser.me/api/?results=${userNumber}`)
      .then((res) => res.json())
      .then((data) => showUser(data));
  } else {
    alert('Not valid input');
  }
};

const showUser = (userData) => {
  let name, email, age, gender, country, image;
  console.log(userData.results);
  const userDetails = document.getElementById('userDetails');
  for (const userInfo of userData.results) {
    const userDiv = document.createElement('div');
    name = `${userInfo.name.first} ${userInfo.name.last}`;
    age = userInfo.dob.age;
    email = userInfo.email;
    gender = userInfo.gender;
    country = userInfo.location.country;
    image = userInfo.picture.large;
    userDiv.innerHTML = `<div class="col">
        <div class="card h-100">
          <img src=${image} class="card-img-top" alt="User Image">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p>Email: ${email}</p>
            <p>Age: ${age}</p>
            <p>Gander: ${gender}</p>
            <p>Country: ${country}</p>
          </div>
        </div>
      </div>`;
    userDetails.appendChild(userDiv);
  }
};

const giveUserButton = document.getElementById('giveUserButton');

giveUserButton.addEventListener('click', loadUser);
