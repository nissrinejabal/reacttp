const router = require('express').Router();
let User = require('../models/user.model');


router.route("/:page/:size").get( async function(req, res) {
  const offset = (req.params.page - 1) * req.params.size;
if(req.query.search){
 const  regex= new RegExp(escapeRegex(req.query.search),'gi');
 const query={"username":regex}
  User.find({ "username": regex}).skip(offset).limit(Number(req.params.size))
  .exec().then(users => {
    User.countDocuments(query).exec().then(count => {
      return res.json({
         count,
         users
      });
    });
  })
 .catch(err => res.status(400).json('Error: ' + err));
}
 else{
   mysort='';
  User.find().skip(offset).limit(Number(req.params.size)).sort(mysort)
  .exec().then(users => {
    User.countDocuments().exec().then(count => {
      return res.json({
         count,
         users
      });
    });
  })
 .catch(err => res.status(400).json('Error: ' + err));
}
 
 
 
   
});

/////// add user ///////////

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const gender = req.body.gender;
  const dob =Date.parse(req.body.dob);
  const news=req.body.news;
  const photo=req.body.photo;
   const email=req.body.email

  const newUser = new User({
username,
gender,
dob,
news,
email,
photo

  });
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});





////////////get user by id//////

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });



////////// delete user ///////

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('user deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });




  
  // ///// get users/////////////
router.route("/all").get(async (req, res)  =>  {
  await User.find()
  .exec().then(users => {
    User.countDocuments().exec().then(count => {
      return res.json({
         count,
         users
      });
    });
  })
  .catch(err => res.status(400).json('Error: ' + err));
  });



  ////////////update user ////

  router.route('/update/:id').put((req, res) => {
    User.findById(req.params.id)
       .then(user => {
      user.username = req.body.username;
      user.gender = req.body.gender;
      user.email = req.body.email;
      user.dob = Date.parse(req.body.dob);
       user.news = req.body.news;
        user.save()
        .then(() => res.json('user updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
    }
      )
      .catch(err => res.status(400).json('Error: ' + err));
  });

 









  
  function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};





module.exports = router;