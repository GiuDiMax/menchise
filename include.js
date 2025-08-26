function includeHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(err => console.error(err));
}

// Includi header e footer
includeHTML('header-container', 'header.html');
includeHTML('footer-container', 'footer.html');
