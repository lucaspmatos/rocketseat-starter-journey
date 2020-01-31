var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepos(repos) {
    listElement.innerHTML = "";

    for (repo of repos) {
        textRepo = document.createTextNode(repo.name);
        liRepo = document.createElement('li');

        liRepo.appendChild(textRepo);
        listElement.appendChild(liRepo);
    }
}

function handleLoading(loading) {
    listElement.innerHTML = "";

    var textLoading = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textLoading);
    listElement.appendChild(loadingElement);
}

function handleError(loading) {
    listElement.innerHTML = "";

    var textError = document.createTextNode('Não existe esse username no GitHub!');
    var errorElement = document.createElement('li');

    errorElement.style.color = "#F00";

    errorElement.appendChild(textError);
    listElement.appendChild(errorElement);
}

function reposList() {

    var username = inputElement.value;

    if (!username) return;

    handleLoading();

    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(function (response) {
            renderRepos(response.data);
        })
        .catch(function () {
            handleError();
        });
}