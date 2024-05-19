//Surbase password: INST377_Final

const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


app.get('/api/songs', async (req, res) => {
    const { data, error } = await supabase.from('Songs').select('*');
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
});


app.post('/api/add-song', async (req, res) => {
    const { title, artist } = req.body;
    const { data, error } = await supabase.from('songs').insert([{ title, artist }]);
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(201).json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
