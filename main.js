let music = document.querySelector('audio');
let images = document.getElementById('img')
let play = document.getElementById('play');
let artist = document.getElementById('artist');
let title = document.getElementById('title');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let progress=document.getElementById('progress');
let total_duration=document.getElementById('duration');
let current_time=document.getElementById('current_time');
let progress_div=document.getElementById('progress_div');

let songs = [
    {
        name: "music-1",
        title: "G.O.A.T",
        artist: "Daljit Dosanjh",
    },

    {
        name: "music-2",
        title: "Mera Inezaar karna",
        artist: "Armaan malik",
    },

    {
        name: "music-3",
        title: "Khuda Hafiz",
        artist: "Title Track",
    },

    {
        name: "music-4",
        title: "Ek-Tarf",
        artist: "Darshan Raval",
    },
    {
        name: "music-5",
        title: "G.A.M.E",
        artist: "Sidhu Moose Wala, Shooter Kahlon",
    },
    {
        name: "music-6",
        title: "Born To Shine",
        artist: "Diljit Dosanjh , Desi Crew",
    },
    {
        name: "music-7",
        title: "Naam",
        artist: "Tulsi Kumar, Millind Gaba, Music MG, Jaani, Nirmaan",
    },



];
isPlaying = false;
let playMusic = () => {
    music.play();
    isPlaying = true;

    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
let pauseMusic = () => {
    music.pause();
    isPlaying = false;

    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};
play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});
let loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = `images/${songs.name}.jpg`;

};
songIndex = 0;
let nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
let prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
music.addEventListener('timeupdate',(event)=>{
    
    const{currentTime, duration}=event.srcElement;
    

    let progress_time=(currentTime/duration)*100;
    progress.style.width=`${progress_time}%`;

    let min_duration=Math.floor(duration/60);
    let sec_duration=Math.floor(duration%60);
    if(sec_duration<10){
        sec_duration=`0${sec_duration}`;

    }

    let tot_duration=`${min_duration}:${sec_duration}`;
    if(duration){
        total_duration.textContent=`${tot_duration}`;
    }

    
    let min_currentTime=Math.floor(currentTime/60);
    let sec_currentTime=Math.floor(currentTime%60);

   
    if(sec_currentTime<10){
        sec_currentTime=`0${sec_currentTime}`;

    }
    let tot_currentTime=`${min_currentTime}:${sec_currentTime}`;
    
        current_time.textContent=`${tot_currentTime}`;
    
    

});
 progress_div.addEventListener('click',(event)=>{
     let{duration}=music;
    
     let move_progress=(event.offsetX/event.srcElement.clientWidth)*duration;
    
     music.currentTime= move_progress;
 });

 music.addEventListener('ended',nextSong); 
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

