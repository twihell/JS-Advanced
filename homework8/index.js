const btnGetUser = document.querySelector("#getUserButton");
const searchInput = document.getElementById("searchInput");
const gitHubApiUrl = 'https://api.github.com/users';
const bio = document.querySelector('#bio');
const avatar = document.querySelector('#avatar');
const user = document.querySelector('#userName');
const followers = document.querySelector('a');
const folAvatars = document.querySelector('.followersAvatars');
const firstFolFollowers = document.querySelector('#firstFolFollowers');
const lastFolFollowers = document.querySelector('#fifthFolFollowers');



btnGetUser.addEventListener('click', () => {
    if(searchInput.value) {
        getUser(searchInput.value);
        getUserFollowers(searchInput.value);
        
    }
    

});

const getUser = (user) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${gitHubApiUrl}/${user}`);
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && xhr.status === 200) {
          parseData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  };

const parseData = (object) => {
    avatar.src = object["avatar_url"];
    bio.textContent = object["bio"];
    user.textContent = object["login"];
    followers.href = object["followers_url"];
    followers.textContent = "Followers!";
      

};

const getUserFollowers = (user) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${gitHubApiUrl}/${user}/followers`);
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && xhr.status === 200) {
        let followersArray = parseFollowers(JSON.parse(xhr.responseText));
        getSecondaryFollowers(followersArray[0]);
        
        // getSecondaryFollowers(followersArray[4]);
      }

    };
    xhr.send();

  };

  const parseFollowers = (arrayOfFollowers) => {
    let selectedFollowers = arrayOfFollowers.slice(0, 5);
      for(i = 0; i < selectedFollowers.length; i++) {
    
          let followerProfile = selectedFollowers[i];
          let img = document.createElement('img');
          let caption = document.createElement('figcaption');
          folAvatars.appendChild(img);
          folAvatars.appendChild(caption);
          img.src = followerProfile["avatar_url"];
          img.id = "folPic";
          caption.textContent = followerProfile["login"];

      }
      return selectedFollowers;
  };


  const getSecondaryFollowers = (user) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', user.followers_url);
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && xhr.status === 200) {
        parseFirstUserFollowers(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  };

  const parseFirstUserFollowers = (arrayOfFollowers) => {
    let selectedFollowers = arrayOfFollowers.slice(0, 5);
    
    for(i = 0; i < selectedFollowers.length; i++) {
    
        let followerProfile = selectedFollowers[i];
        let img = document.createElement('img');
        let caption = document.createElement('figcaption');
        firstFolFollowers.appendChild(img);
        firstFolFollowers.appendChild(caption);
        img.src = followerProfile["avatar_url"];
        img.id = "secondaryFolPic";
        caption.textContent = followerProfile["login"];

    }
  };

  const parseLastUserFollowers = (arrayOfFollowers) => {
    let selectedFollowers = arrayOfFollowers.slice(0, 5);
    for(i = 0; i < selectedFollowers.length; i++) {
    
        let followerProfile = selectedFollowers[i];
        let img = document.createElement('img');
        let caption = document.createElement('figcaption');
        lastFolFollowers.appendChild(img);
        lastFolFollowers.appendChild(caption);
        img.src = followerProfile["avatar_url"];
        img.id = "secondaryFolPic";
        caption.textContent = followerProfile["login"];

    }
  };