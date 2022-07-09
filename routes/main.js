__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
   
     res.sendFile(__path + '/views/index.html')
})

router.get('/pingpong', (req, res) => {
    res.sendFile(__path + '/views/pingpong.html')
})

router.get('/api/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/docs/searching', (req, res) => {
    res.sendFile(__path + '/views/searching.html')
})

router.get('/docs/ephoto', (req, res) => {
   
     res.sendFile(__path + '/docs/ephoto.html')
})

router.get('/docs/textprome', (req, res) => {
    res.sendFile(__path + '/docs/textprome.html')
})

router.get('/docs/movie', (req, res) => {
    res.sendFile(__path + '/docs/movie.html')
})

router.get('/docs/downloader', (req, res) => {
    res.sendFile(__path + '/docs/downloader.html')
})

router.get('/docs/randomimage', (req, res) => {
    res.sendFile(__path + '/views/randomimage.html')
})

router.get('/docs/randomtext', (req, res) => {
   
     res.sendFile(__path + '/docs/randomtext.html')
})

router.get('/docs/information', (req, res) => {
    res.sendFile(__path + '/docs/information.html')
})

router.get('/docs/movie', (req, res) => {
    res.sendFile(__path + '/docs/movie.html')
})


router.get('/docs/meme', (req, res) => {
    res.sendFile(__path + '/docs/meme.html')
})

router.get('/docs/entertainment', (req, res) => {
    res.sendFile(__path + '/docs/entertainment.html')
})

router.get('/docs/photoeditor', (req, res) => {
    res.sendFile(__path + '/docs/photoeditor.html')
})

router.get('/docs/creator', (req, res) => {
    res.sendFile(__path + '/views/creator.html')
})

router.get('/docs/converter', (req, res) => {
   
     res.sendFile(__path + '/docs/converter.html')
})

router.get('/docs/primbon', (req, res) => {
    res.sendFile(__path + '/docs/primbon.html')
})

router.get('/docs/stalking', (req, res) => {
    res.sendFile(__path + '/docs/stalking.html')
})

router.get('/api/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'DAISUKE-MD-BOT',
            namaowner: 'DHAFF OFFICIAL',
            instagram: 'dhaffnavy',
            youtube : 'https://youtube.com/channel/UCIfD_R1Jph8MUe0ZbwKCstQ'
        }
    }
    res.json(config)
})

module.exports = router
