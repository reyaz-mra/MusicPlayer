// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxDpMxS_CSblDSR_gsLJstQl6CTobR8eUqwUchR1yAAmPrEBAzaepe7ab-u7Qv9sEynAg/exec'
        const form = document.forms['google-sheet']
        
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
            .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
        })