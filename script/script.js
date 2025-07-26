let songs;
let folder;
let currfodler;

function updatesonginfo(filename){
   const songInfo = document.querySelector(".songinfo"); 
    const fullUrl = `http://127.0.0.1:3000/${folder}/${filename}`;
    const songItem = document.querySelector(`li[data-src="${fullUrl}"]`);
    if (songItem) {
        const title = songItem.querySelector(".songn").textContent;
        const artist = songItem.querySelector(".artistn").textContent;
        songInfo.innerHTML = `${title} - ${artist}`;
    } else {
        songInfo.innerHTML = "Unknown Song";
    }
}
async function getsongs(folder) {
  let a = await fetch(`http://127.0.0.1:3000/${folder}/`);
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  songs = [];

  // Get the song list element and clear it
  let songsul = document.querySelector(".songlist ul");
  songsul.innerHTML = ""; // <-- Clear previous songs

  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      let filename = element.href.split("/").pop();
      if (filename) {
        songs.push(filename);
      }
    }
  }

  for (const song of songs) {
    let cleanName = decodeURIComponent(song)
      .replace(/\.(mp3|mp4)$/i, "")
      .replace(/\(.*?\)/g, "")
      .trim();
    let [artist = "unknow artist", title = cleanName] = cleanName.split(" - ");
    songsul.innerHTML += `<li data-src="http://127.0.0.1:3000/${folder}/${song}">
      <img class="invert" src="img/music.svg" alt="cover">
      <div class="info">
        <div class="songn">${title}</div>
        <div class="artistn">${artist}</div>
      </div>
      <img class="playi invert" src="img/play.svg" alt="">
    </li>`;
  }

  document.querySelectorAll(".songlist li").forEach(songItem => {
    songItem.addEventListener('click', function(e) {
      const songsrc = songItem.getAttribute('data-src');
      if (e.target.classList.contains("playi") || songItem.contains(e.target)) {
        audioPlayer.src = songsrc;
        audioPlayer.play();
        playicon.src = "pause.svg";
        // Extract filename from songsrc
        const filename = songsrc.split("/").pop();
        updatesonginfo(filename);
      }
    });
    
  });
   



  return songs;
}
//show all the songs in the playli
async function main(){
   folder = "songs.mp3/K7"; 
  currfodler = folder;
  // currfodler = folder;
   songs = await getsongs(`songs.mp3/K7`);
  // let currfodler = /songs/folder/;
  console.log("my local songs " +songs);
  
  
 
  if (songs.length === 0) {
    console.log("No songs found!");
    return;
  }
  
  const audioPlayer = document.getElementById("audioPlayer")
  const play = document.getElementById("play")
  const playicon = document.getElementById("playicon")
  const songInfo = document.querySelector(".songinfo"); // the song label
  
  
  
  
  // attach a eventlistner to playbar 
  play.addEventListener("click", () => {
    if(!audioPlayer.src || audioPlayer.src.trim()=== ""){
    let  firstsong = document.querySelector(".songlist li ")
      if(firstsong){
      const songsrc =firstsong.getAttribute("data-src");
      const title = firstsong.querySelector(".songn").textContent;
      const artist = firstsong.querySelector(".artistn").textContent;

      audioPlayer.src = songsrc;

      audioPlayer.addEventListener("loadedmetadata",()=>{
        audioPlayer.play();
        playicon.src = "img/pause.svg";
        songInfo.innerHTML = `${title} - ${artist}`;
        
      },{once:true})
      }
    }else
      // audioPlayer.songs[0]
      if(audioPlayer.paused){
        audioPlayer.play();
        playicon.src = "img/pause.svg" 
      }else{
        audioPlayer.pause();
        playicon.src = "img/play2.svg"
      }
    });
    
    // funtion to convert seconds into format 
    function formattime(seconds){
         const  min = Math.floor(seconds / 60);
         const  secs = Math.floor(seconds % 60);
         const formatmins  = min < "10" ? "0" +  min:min; 
         const formatsecs  = secs < "10" ? "0" +  secs:secs; 
         return (`${formatmins}:${formatsecs}`)
    }

    // listen to the timeupdate 
    audioPlayer.addEventListener("timeupdate", ()=>{
     const currentFormatted = formattime(audioPlayer.currentTime);
  document.querySelector(".timestamp").innerHTML = currentFormatted;
    })
      
 
    audioPlayer.addEventListener("loadedmetadata", () => {
  const totalFormatted = formattime(audioPlayer.duration);
  document.querySelector(".totaltime").innerHTML = totalFormatted;
});
// envent listner to the playbvar

audioPlayer.addEventListener("timeupdate", () => {
  const currentFormatted = formattime(audioPlayer.currentTime);
  document.querySelector(".timestamp").innerHTML = currentFormatted;

  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;

  const circle = document.querySelector(".circle");
    const songTime = document.querySelector(".songtime");
  if (!isNaN(progress)) {
    circle.style.left = `${progress}%`;

    songTime.style.background =`linear-gradient(to right,rgb(249, 249, 249) ${progress}%, #757171 ${progress}%)`;
  }
});

  //  add the eventlistner to the aongtime or seekbar 
  document.querySelector(".songtime").addEventListener("click", (e) => {
  let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
  document.querySelector(".circle").style.left = percent + "%";
  
  if (!isNaN(audioPlayer.duration)) {
    audioPlayer.currentTime = (audioPlayer.duration * percent) / 100;
  }
});


  // add eventlisnerto hamburger 
  document.querySelector(".hamburger").addEventListener("click", ()=>{
     
   document.querySelector(".left").style.display = "block"
   document.querySelector(".close").style.display = "block"
   document.querySelector(".hamburger").style.display = "none"
  })

  document.querySelector(".close").addEventListener("click", ()=> {
    document.querySelector(".left").style.display = "none"
    document.querySelector(".close").style.display = "none"
    document.querySelector(".hamburger").style.display = "block"
  })

  // Event listenr to the settigns after 480 px
const settings = document.querySelector(".settings");
const settingslist = document.querySelector(".settingslist");


settings.addEventListener("click", () => {
  if (settingslist.style.visibility === "visible") {
    settingslist.style.visibility = "hidden";  // use '=' not '=='
  } else {
    settingslist.style.visibility = "visible";
  }
});

// add event listenr to the previous and forwrd buton 

playprevious.addEventListener("click", () => {
    let current = audioPlayer.src ? audioPlayer.src.split("/").slice(-1)[0] : null;
    let index = songs.indexOf(current);
    if (index > 0) {
      let newSong  =  songs[index-1];
        audioPlayer.src = `http://127.0.0.1:3000/${folder}/${newSong}`;
        audioPlayer.play();
        playicon.src = "img/pause.svg";

        updatesonginfo(newSong);

    }
});

playforwerd.addEventListener("click", () => {
    let current = audioPlayer.src ? audioPlayer.src.split("/").slice(-1)[0] : null;
    let index = songs.indexOf(current);
    if (index > -1 && index < songs.length - 1) {
      const newSong =  songs[index + 1];
        audioPlayer.src = `http://127.0.0.1:3000/${folder}/${newSong}`;
        audioPlayer.play();
        playicon.src = "img/pause.svg";
   
    updatesonginfo(newSong);
    }
    
});



 const audio = document.getElementById("audioPlayer");
  const volumeslider = document.querySelector("#volume-slider");
  const updateicon = document.querySelector(".volumeimg");
  // const circle = document.querySelector(".circle2");
volumeslider.style.background = "linear-gradient(to right, white 0%, #f7f7f7ff 0%)";

  volumeslider.addEventListener("input"  ,()=>{
    const volume = volumeslider.value / 100;
    audio.volume = volume;
    updateimg(volume)

     volumeslider.style.background = `linear-gradient(to right, white ${volumeslider.value}%, #757171 ${volumeslider.value}%)`;
     
  });
  function updateimg(volume){
     if(volume === 0){
      updateicon.src = "img/low.svg";
  }else if(volume < 0.5){
    updateicon.src =  "img/medium.svg";
  }else{
    updateicon.src= "img/volume.svg";
  }
  }

Array.from(document.getElementsByClassName("card")).forEach(e => {
  e.addEventListener("click", async item => {
    folder = `songs.mp3/${item.currentTarget.dataset.folder}`; // <-- update global folder
    songs = await getsongs(folder);
    currfodler = folder; // if you use currfodler elsewhere
  });
});
 
  document.querySelector(".volumeimg").addEventListener("click", e=>{
   console.log(e.target.src)
   if(e.target.src.includes("low.svg") || e.target.src.includes("img/medium.svg")){;
    e.target.src = "img/volume.svg";
    audioPlayer.volume = 1;
    volumeslider.value = 100;
        volumeslider.style.background = "linear-gradient(to right, white 100%, #757171 100%)";

   }else{
 
  e.target.src = "img/low.svg";
    audioPlayer.volume = 0;
    volumeslider.value = 0;
    volumeslider.style.background =  "linear-gradient(to right, white 10%, #757171 10%)";
   }

  })


};
document.addEventListener("DOMContentLoaded", () => {
  main()
});
