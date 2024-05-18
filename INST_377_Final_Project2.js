function getMostRecent() {
    const apiURL = 'http://localhost:3000/spotifylyrics'
    fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
    let dataLength = data.length;
    const songTable = document.getElementById('songTable'); 
        for (let i = dataLength - 5; i < dataLength; i++) {

            tr = document.createElement('tr');
            songtitle = document.createElement('td')
            artistname = document.createElement('td')
            songtitle.innerHTML = data[i].SongTitle;
            artistname.innerHTML = data[i].ArtistName;
            tr.appendChild(songtitle);
            tr.appendChild(artistname);
            songTable.appendChild(tr);
        }
});    
}

async function sendData() {
    console.log('data sender');
    let artistName = document.getElementById('artist').value;
    let songTitle = document.getElementById('song').value;
    console.log(songTitle);
    const apiURL = 'http://localhost:3000/spotifylyrics'
    await fetch(apiURL, {
        method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
 },
 body: JSON.stringify({
    ArtistName: artistName,
    SongTitle: songTitle
 })
 } ) 
 .then(response => response.json())
 .then(data => {
    console.log(data);
 })
}




function getMyLyrics() {
//const myArtist = "The Weeknd"
//const mySongName = "Blinding Lights"
const myArtist = document.getElementById("artist").value;
const mySongName = document.getElementById("song").value;



fetch(`https://api.lyrics.ovh/v1/${myArtist}/${mySongName}`)

//document.getElementById("images1").appendChild("p").innerHTML = "hi"
.then((res) => res.json())
.then((data) => {


console.log(data.lyrics)
let myString = data.lyrics
//let myTestString = myString.split("")
let mySplitString = myString.split("\n")
//document.getElementById("lyricText").innerHTML = myString
//console.log(myString.split("\n"))
let myArray = mySplitString
console.log(myArray)

for (item in myArray) {
    let x = document.createElement("div")
    x.setAttribute("id", "mySlide")
    let y = document.createElement("p")
    y.innerHTML = myArray[item] 
    x.append(y)
    document.getElementById("imageHolder").append(x);
    
}

    
    //document.getElementById("images0").innerHTML = myArray[1]
    






for (item in myArray) {
    
    document.getElementById("lyricText").innerHTML += (myArray[item] + "<br>")

    
    //document.getElementById("images1").innerHTML += (myArray[0] + "<br>")
}


})

}

