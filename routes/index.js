var express = require('express');
var router = express.Router();
var XLSX = require('xlsx');
/* GET home page. */

function to_json(workbook) {
  var result = {};
  workbook.SheetNames.forEach(function(sheetName) {
    var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    if(roa.length > 0){
      result[sheetName] = roa;
    }
  });
  return result;
}

router.get('/', function(req, res, next) {
  var overviewWorkbook = XLSX.readFile('./Overview.xlsx');
  var jsondata = to_json(overviewWorkbook);
  var equipmentStatusFile = XLSX.readFile('./Latitude.xlsx');
  var latitudedata = to_json(equipmentStatusFile);
  res.render('index', { title: 'Express' , data : jsondata ,Latitudedata : latitudedata });
});


/* GET equipment page. */
router.get('/equipment', function(req, res, next) {
  res.render('equipment', { title: 'Express' });
});


module.exports = router;
