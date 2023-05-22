const express= require("express");
const cloudinary = require('cloudinary').v2;

const router = express.Router();

cloudinary.config({
  cloud_name: "dunwbzbp6",
  api_key: "723547266699254",
  api_secret: "Y2OZfAPdo-UhKhBukIYZfG7KPbE"
});

router.get("/", async(req,res) => {
  res.json({msg:"Upload work"});
})

// כיצד לעלות בדרך הרגילה לשרתים נורמלים כגון
// הירוקו, אמזון , גוגל וכו
// לא ציקליק
// דורש שבקובץ אפפ נוסיף את הקוד הבא
// app.use(cors());
// app.use(fileUpload({
//   useTempFiles:true,
//   limits: {fileSize: 1024 * 1024 * 5}
// }))
router.post("/upload1", async(req,res) => {
  try{
    console.log(req.files.myFile);
    const myFile = req.files.myFile
    const data = await cloudinary.uploader.upload(myFile.tempFilePath,{unique_filename:true})
    res.json(data)
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

// שיטה שעובדת גם בשרת של ציקליק ושרתים שלא מאפשרים לעלות קבצים
// לשים לב לבטל אפ בקובץ אם במקרה קיים-   את 
// app.use(fileUpload({ useTempFiles:true,.....
router.post("/upload_cyc", async(req,res) => {
  try{
    // אנחנו נשלח את הקובץ כסטרינג שמכיל את כל המידע שקיים בתוכו
    const data = await cloudinary.uploader.upload(req.body.image,{unique_filename:true})
    res.json(data)
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

module.exports = router;