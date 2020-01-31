var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepos(repos) {
    for (repo of repos) {
        textRepo = document.createTextNode(repo.name);
        liRepo = document.createElement('li');

        liRepo.appendChild(textRepo);
        listElement.appendChild(liRepo);
    }
}

function reposList() {

var username = inputElement.value;

if (!username) return;

axios.get(`https://api.github.com/users/${username}/repos`)
    .then(function (response) {
        renderRepos(response.data);
    });
}