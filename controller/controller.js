//Node file system module
//Required to read the JSON File. Mongoose ORM or Mongo can be used for data persistence for
//more elaborate projects
const fs = require('fs');

exports.cats = function (req, res) {
  fs.readFile(process.cwd()+"/data/cats.json", function (err, data) {
    if(err)
      console.log(err);
    else{
      var resultStr = data.toString();
      var resultObj = JSON.parse(resultStr);
      res.json(resultObj);
      console.log(resultObj);
    }

  });
};
  
exports.vote_cat = function (req, res) {
  var path = process.cwd();
  var buffer = fs.readFileSync(path + "/data/cats.json");
  var catsStr = buffer.toString();
  var catsObj = JSON.parse(catsStr);

  console.log(req.params.id);

  let index = catsObj.images.findIndex( x => x.id == req.params.id );

  catsObj.images[index].score += 1;

  catsStr = JSON.stringify(catsObj);

  fs.writeFileSync(path + "/data/cats.json", catsStr);
  

  res.json({success: true});

  // console.log(index);
  // console.log(catsObj);
};