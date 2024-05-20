async function getMostRecent() {
    
    //const apiURL = 'http://localhost:3000/spotifylyrics'
    //const apiURL = 'https://inst-377-group-final-repo-lyart.vercel.app/spotifylyrics'
    //const apiURL = 'https://inst-377-group-final-repo-lyart.vercel.app'
    //await fetch(apiURL)
    var host = window.location.origin;
    console.log(host);
    await fetch(`${host}/spotifylyrics`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    let dataLength = data.length;
    const songTable = document.getElementById('songTable'); 

    while (songTable.hasChildNodes()) {
        songTable.removeChild(songTable.firstChild);
    }

    const headers = document.createElement('tr');
    const songTitleHeader = document.createElement('th');
    const artistNameHeader = document.createElement('th');
    songTitleHeader.innerHTML = 'Song Title';
    artistNameHeader.innerHTML = 'Artist Name';
    headers.appendChild(songTitleHeader);
    headers.appendChild(artistNameHeader);
    songTable.appendChild(headers);

        for (let i = dataLength - 5; i < dataLength; i++) {

            var tr = document.createElement('tr');
            var songtitle = document.createElement('td')
            var artistname = document.createElement('td')
            songtitle.innerHTML = data[i].SongTitle;
            artistname.innerHTML = data[i].ArtistName;
            tr.appendChild(songtitle);
            tr.appendChild(artistname);
            songTable.appendChild(tr);
        }


        document.getElementById("songTable").style.visibility = "visible"
});    
}


async function sendData() {
    let artistName = document.getElementById('artist').value;
    let songTitle = document.getElementById('song').value;
    const apiURL = 'http://localhost:3000/spotifylyrics'
    await fetch(apiURL, {
        method: 'POST',
 body: JSON.stringify({
    ArtistName: artistName,
    SongTitle: songTitle
 }),
     headers: {
        'Content-Type': 'application/json'
 }
 } ) 
 .then(response => response.json())
 .then(data => {
 })
}

function showMyLyrics() {
    document.getElementById("lyricText").style.visibility = "visible"
}


function getMyLyrics() {
const myArtist = document.getElementById("artist").value;
const mySongName = document.getElementById("song").value;



fetch(`https://api.lyrics.ovh/v1/${myArtist}/${mySongName}`)

.then((res) => res.json())
.then((data) => {


console.log(data.lyrics)
let myString = data.lyrics
let mySplitString = myString.split("\n")
let myArray = mySplitString
console.log(myArray)

document.getElementById("imageHolder").innerHTML = "";

for (item in myArray) {
    let x = document.createElement("div")
    x.setAttribute("id", "mySlide")
    let y = document.createElement("p")
    y.innerHTML = myArray[item] 
    x.append(y)
    document.getElementById("imageHolder").append(x);
    
}    




for (item in myArray) {
    

    document.getElementById("lyricText").innerHTML = myArray.join("<br>")

    
}


})

}
