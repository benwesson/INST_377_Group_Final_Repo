//For some reason, when I try to run a song on the code, it doesn't work, even when I use the original code.
//This is for the back end, so it could possibly add the songs to the supabase table.

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

async function fetchSongs() {
    const response = await fetch('/api/songs');
    const songs = await response.json();
    console.log(Songs);
}

async function addSong() {
    const title = document.getElementById('song').value;
    const artist = document.getElementById('artist').value;

    await fetch('/api/add-song', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, artist }),
    });

    fetchSongs(); // Refresh the list of songs
}

document.getElementById('mySubmit').addEventListener('click', addSong);

fetchSongs();
