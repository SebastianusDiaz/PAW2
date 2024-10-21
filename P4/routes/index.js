const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    // format data json
    const data = {
        caption: "Mahasiswa",
        layout: "layouts/main-layout",
        data: [
            {
                npm: "2226240114",
                nama: "Diaz"
            },
            {
                npm: "2226240027",
                nama: "Nelsen"
            },
            {
                npm: "2226240024",
                nama: "Ericson"
            }
        ]
    };
    res.render('index', data);
    // menuju ke views/index.ejs
});

module.exports = router;
