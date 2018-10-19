var express = require('express');
var router = express.Router();
var notes = require("../db/schema")
/* GET home page. */
router.get('/', function(req, res, next) {
  notes.find({},function(err,sn){
    if(err)return res.send("error fetching data");
    res.render('index', { notes:sn });

  })
});


router.post("/addnotes",function(req,res){
  
  let title = req.body.title;
  let description = req.body.description;
  console.log(req.body)
  let note = { title,description }
  notes.create(note,function(err,result){
      if(err){
          console.log(err);
          return res.redirect("/");
      }

      return res.redirect("/");
  })
})

router.post("/editnotes",function(req,res){
  let _id = req.body._id
  let title = req.body.title;
  let description = req.body.description;
  console.log(req.body)
  let note = { title,description }
  notes.findOneAndUpdate({_id:_id},note,function(err,result){
      if(err){
          console.log(err);
          return res.redirect("/");
      }

      return res.redirect("/");
  })
})


router.post("/deletenotes",function(req,res){
  let _id = req.body._id
  let title = req.body.title;
  let description = req.body.description;
  console.log(req.body)
  let note = { title,description }
  notes.remove({ _id: req.body.id }, function(err) {
    if (!err) {
            res.redirect("/")
    }
    else {
            console.log(err)
    }
  });
  
})



module.exports = router;
