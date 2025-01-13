const express = require('express');
const router = express.Router();

const blogController= require("../controllers/blogControllers")
const caseStudyController= require("../controllers/caseStudyControllers")

router.post("/blog", blogController.createBlog )
router.get("/get/blog", blogController.getBlogs )
router.put("/update/blog/:blogId", blogController.updateBlog )

router.post("/caseStudy", caseStudyController.createCaseStudy )
router.get("/get/caseStudy", caseStudyController.getCaseStudy )
router.put("/update/caseStudy/:caseStudyId", caseStudyController.updateCaseStudy )

module.exports = router;