// include.js

function includeHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) {
        callback();
      }
    })
    .catch(err => console.error(err));
}

// Questa funzione carica e avvia tutti gli script dipendenti dal DOM
function initializeScripts() {
  const scriptsToLoad = [
    'assets/js/jquery.scrollex.min.js',
    'assets/js/jquery.scrolly.min.js',
    'assets/js/browser.min.js',
    'assets/js/breakpoints.min.js',
    'assets/js/util.js',
    'assets/js/main.js'
  ];

  let promise = Promise.resolve();
  scriptsToLoad.forEach(src => {
    promise = promise.then(() => new Promise(resolve => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      document.body.appendChild(script);
    }));
  });

  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const parentLi = trigger.closest('.has-submenu');
      const isActive = parentLi.classList.contains('active');
      document.querySelectorAll('.has-submenu.active').forEach(openLi => {
        if (openLi !== parentLi) {
          openLi.classList.remove('active');
        }
      });
      if (isActive) {
        parentLi.classList.remove('active');
      } else {
        parentLi.classList.add('active');
      }
    });
  });

}

// Carica l'header e, una volta terminato, avvia la logica della pagina
includeHTML('header-container', 'header.html', initializeScripts);
includeHTML('footer-container', 'footer.html');
