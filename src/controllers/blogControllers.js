const blogModel = require("../models/blogModel");

//Creating blogs  //
const createBlog = async function (req, res) {
  try {
    const data = req.body;
    const blog = await blogModel.create(data);
    return res.status(201).send({ status: true, data: blog });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

//   Get blogs  //
const getBlogs = async function (req, res) {
  try {
    const blogs = await blogModel.find();
    if (blogs.length === 0) {
      return res.status(404).send({ status: false, msg: 'No blogs found' });
    }
    return res.status(200).send({
      status: true,
      data: blogs,
    });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

//    Update blogs   //
const updateBlog = async function (req, res) {
  try {
    const blogId = req.params.blogId;  
    const { title, content } = req.body; 

    const updateFields = {
      $set: { 
        title, 
        content, 
      },
    };

    const updatedBlog = await blogModel.findByIdAndUpdate(
      { _id: blogId },  
      updateFields, 
      { new: true}
    );

    if (!updatedBlog) {
      return res.status(404).send({ status: false, msg: 'Blog not found' });
    }

    return res.status(200).send({ status: true, data: updatedBlog });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

// .Making APIs public  //
module.exports.createBlog = createBlog;
module.exports.getBlogs = getBlogs;
module.exports.updateBlog = updateBlog;