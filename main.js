const imgAndLocation = document.getElementById('img-and-location');
const nameAndTitle = document.getElementById('name-and-title');
const contactContainer = document.getElementById('contact-container');
const title = document.getElementById('title');
const modal = document.getElementById('modal');
const smartphone = document.getElementById('smartphone');
const email = document.getElementById('email');
const loadBar = document.getElementById('line');


fetch('https://randomuser.me/api/')
.then((res) => res.json())
.then((res) => {
    const profile = res.results[0];
    showData(profile);
})
.catch((err) => console.log('error: ', err));

const showData = (profile) => {

    title.innerText = `${profile.name.first} ${profile.name.last}`;

    imgAndLocation.innerHTML = `
    <img src=${profile.picture.large} class='img-profile' alt='${profile.name.first} ${profile.name.last}'/>

    <a href='https://www.google.com.ar/maps/place/${profile.location.city},+${profile.location.country}/' target='_blank' class='ubication-link'>

        <img src='images/ubication.png' class='ubication-pin' alt='ubication'> <p class='underline'> ${profile.location.city} - ${profile.location.country} </p> </img>

    </a>
    `;

    nameAndTitle.innerHTML += `
    <h1 class='developer-name'>${profile.name.first} ${profile.name.last}</h1>
    <p style='color:var(--extra-color);'>Frontend Dev</p>
    `;

    smartphone.innerHTML = `<img src='images/smartphone.png' alt='smartphone'> ${profile.phone} </img>`

    email.innerHTML = `<img src='images/email.png' alt='email'> ${profile.email} </img>`
};

const animationModal = () => {
    modal.classList.add('open-modal');
    loadBar.classList.add('init-bar')

    setTimeout( () => {
        modal.classList.remove('open-modal');
        loadBar.classList.remove('init-bar');
    }, 5000 )
}

email.addEventListener('click', animationModal);

smartphone.addEventListener('click', animationModal);