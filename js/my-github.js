// Write code here to communicate with Github
let reposList = document.getElementById("repos-list");
let countRepos = document.getElementById("repos-count");
fetch('https://api.github.com/users/Kobyjc08/repos')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const numberOfRepos = data.length;
        countRepos.innerText = numberOfRepos;

        data.forEach(element => {
            let itemList = document.createElement("li");
            let itemListLink = document.createElement("a");
            itemListLink.setAttribute("href", element.html_url);
            itemListLink.innerText = element.name;
            reposList.appendChild(itemList);
            itemList.appendChild(itemListLink);

        })
    });