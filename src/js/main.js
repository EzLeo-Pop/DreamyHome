fetch('components/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
});

fetch('public/index.html')
.then(response => response.text())
.then(data => {
    document.getElementById('index-link').innerHTML = data;
});