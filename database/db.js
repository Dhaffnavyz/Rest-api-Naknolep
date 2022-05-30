var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'https://zahirr-web.herokuapp.com';
try {
if(url == 'https://zahirr-web.herokuapp.com') throw console.log(color('Cek konfigurasi database, var url belum diisi','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, TURU TM','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nGagal connect ke database, \ncek configurasi database apakah Connection URL sudah benar','red'))
	})


module.exports = db
