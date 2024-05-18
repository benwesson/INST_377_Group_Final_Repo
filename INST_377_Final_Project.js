
const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))


const supabaseURL = 'https://xcqomanymtwmoryencyb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjcW9tYW55bXR3bW9yeWVuY3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MjU1MzksImV4cCI6MjAzMTMwMTUzOX0.C80pmSb4MB-sgwSeTniLDaydtduQdlEFSqhNTc9rizc'
const supabase = supabaseClient.createClient(supabaseURL, supabaseKey)


app.get('/spotifylyrics', async (req, res) => {
    console.log('Attempting to GET all lyrics')


    const {data, error } = await supabase
        .from('SpotifyLyrics')
        .select()


    if(error) {
        console.log('Error');
        res.send(error);
    } else {
        res.send(data);
        console.log(data.slice(-2));

    }
}
)

app.post('/spotifylyrics', async (req, res) => {
console.log('posting');
    var ArtistName = req.body.ArtistName;
    var SongTitle = req.body.SongTitle;

    const {data, error } = await supabase
    .from('SpotifyLyrics')
    .insert({'ArtistName': ArtistName, 'SongTitle': SongTitle })
    .select()
    if(error) {
        console.log('Error');
        res.send(error);
    } else {
        res.send(data);
        console.log(data);
    }
})



app.listen(port, () => {
    console.log('APP IS ALIVE')
})


