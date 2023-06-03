const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const auth = require("../middleware/auth");
const multer = require('multer')
const sharp = require('sharp')

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    const token = await user.generateAuthToken();
    await user.save();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(500).send(e);
  }
});
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

const upload = multer({
    //papki anuny bayc ete datai mej enq uzum pahenq esi petq chi
    // dest:'avatars',
    limits:1000000,
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error ('Please upload an image'))
        }
        cb(undefined,true)
    }
})

router.post('/users/me/avatar',auth,upload.single('avatar'),async(req,res) => {
    const buffer = await sharp(req.file.buffer).resize({width:250,height:250}).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
},(error,req,res,next)=> {
    //kveradardzni middlewarei PLease upload an image errory
    res.status(400).send({error:error.message})
})
router.delete('/users/me/avatar',auth,async(req,res)=> {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
})
router.get('/users/:id/avatar',async(req,res) => {
    try{
        const user = await User.findById(req.params.id)
        if(!user || !user.avatar){
            throw new Error()
        }
        res.set('Content-Type','image/jpg')
        res.send(user.avatar)
    }catch(e){
        res.status(400).send()
    }
})
// router.patch("/users/:id", async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["name", "password", "email", "age"];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );

//   if (!isValidOperation) {
//     //stugum enq vor valid keya uzum tarmacni
//     return res.status(400).send({ error: "Invalid Updates" });
//   }
//   const user = await User.findById(req.params.id);
//   updates.forEach((update) => (user[update] = req.body[update]));
//   await user.save();
//   try {
//     //runValidatorsy stuguma normal banov enq uzum eghacogh anenq te che
//     // const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
//     if (!user) {
//       return res.status(400).send();
//     }
//     res.send(user);
//   } catch (e) {
//     res.status(404).send();
//   }
// });
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "password", "email", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    //stugum enq vor valid keya uzum tarmacni
    return res.status(400).send({ error: "Invalid Updates" });
  }
  updates.forEach((update) => (req.user[update] = req.body[update]));
  await req.user.save();
  try {
    //runValidatorsy stuguma normal banov enq uzum eghacogh anenq te che
    // const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(req.user);
  } catch (e) {
    res.status(404).send(e);
  }
});
router.delete("/users/me", auth, async (req, res) => {
    try {
      await req.user.remove();
      res.send(req.user);
    } catch (e) {
      res.status(500).send();
    }
  });
// router.get("/users/:id", async (req, res) => {
//     const _id = req.params.id;
//     try {
//         const user = await User.findById(_id);
//         if (!user) {
//             return res.status(400).send();
//         }
//     res.send(user);
// } catch (e) {
//     res.status(500).send();
// }
// });
// router.delete("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(400).send();
//     }
//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
// });
module.exports = router;
