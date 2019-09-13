

// const btnGetUser = document.querySelector("#getUserButton");
// const searchInput = document.getElementById("searchInput");
// const gitHubApiUrl = 'https://api.github.com/users';
// const bio = document.querySelector('#bio');
// const avatar = document.querySelector('#avatar');
// const userName = document.querySelector('#userName');


// btnGetUser.addEventListener('click', () => {
//     if(searchInput.value) {
//         getUser(searchInput.value);
//     }
// });

// const getUser = (userName) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', `${gitHubApiUrl}/${userName}`);
//     xhr.onreadystatechange = function() {
//       if(xhr.readyState === 4 && xhr.status === 200) {
//           parseData(JSON.parse(xhr.responseText));
//       }
//     };
//     xhr.send();
//   };

// const parseData = (object) => {
//     avatar.src = object["avatar_url"];
//     bio.textContent = object["bio"];
//     userName.textContent = object["login"];
// };
//avatar_url bio  login


const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Success!");
    }, 2000);
    setTimeout(function () {
        reject("error");
    }, 1000);
});

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
