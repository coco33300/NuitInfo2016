/**
 * PersonnesController
 *
 * @description :: Server-side logic for managing Personnes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	upload: function (req, res) {
    console.log('REQUEST RECEIVED');

    req.file('picture').upload(function(err, files) {
      if (err) {
        return res.json(400, {
          error: err.toString()
        });
      }
      if (files.length == 0) {
        return res.json(400, {
          error: 'No picture file provided. Send a multipart request with \'picture\' field name'
        });
      }

      var fs = require('fs');
      var file = files[0];
      var old_picture_path = file.fd;
      var new_picture = process.cwd() + '/img/' + req.params.id + '.jpg';
      fs.rename(old_picture_path, new_picture);

      res.json(201, {
        result: 'ok'
      });
    });
  },

  download: function (req, res) {
    var location = process.cwd() + '/img/' + req.params.id + '.jpg';

    console.log('DOWNLOAD');
    fs = require('fs');
    fs.readFile(location, function (err, data) {
      if (err) {
        res.status(500, err);
      }
      res.writeHead(200, {'Content-Type': 'image/jpeg' });
      res.end(data, 'binary');
    });


    // var SkipperDisk = require('skipper-disk');
    // var fileAdapter = SkipperDisk();
    // res.attachment('picture.png');
    // res.setHeader('Content-type', 'image/jpeg');
    // fileAdapter.read(location).on('error', function (err) {
    //   return res.json(400, {
    //     error: err.toString()
    //   });
    // }).pipe(res);
  }
};

