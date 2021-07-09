const { load } = require('./users');
const ProfileCard = require('./components/profile-card');

function init() {
  const main = document.querySelector('main');

  load()
    .then(users => {
      // If I don't get an object that has a length that is a greater than 0
      if(!(users && users.length)) {
        main.innerHTML = 'Unable to load user data at this time.';
        return;
      }
      
      users.forEach(user => {
        const id = user.id;
        const name = `${user.first_name} ${user.last_name}`;
        const email = user.email;
        const avatarUrl = user.avatar;
        
        const profileCard = new ProfileCard(id, name, email, avatarUrl);
        main.appendChild(profileCard.render());
      })
    });
}

window.onload = init;