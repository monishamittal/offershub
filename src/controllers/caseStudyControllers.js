const caseStudyModel = require("../models/caseStudyModel");

// Creating CaseStudy  //
const createCaseStudy = async function (req, res) {
  try {
    const data = req.body;
    const caseStudy = await caseStudyModel.create(data);
    return res.status(201).send({ status: true, data: caseStudy });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

// Get CaseStudy //
const getCaseStudy = async function (req, res) {
  try {
    const caseStudy = await caseStudyModel.find();
    if (caseStudy.length === 0) {
      return res.status(404).send({ status: false, msg: 'No caseStudy found' });
    }
    return res.status(200).send({
      status: true,
      data: caseStudy,
    });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

// Update CaseStudy //
const updateCaseStudy = async function (req, res) {
  try {
    const caseStudyId = req.params.caseStudyId;  
    const { title, content } = req.body; 

    const updateFields = {
      $set: { 
        title, 
        content, 
      },
    };
    
    const updatedCaseStudy = await caseStudyModel.findByIdAndUpdate(
      { _id: caseStudyId },  
      updateFields, 
      { new: true}
    );

    if (!updatedCaseStudy) {
      return res.status(404).send({ status: false, msg: 'CaseStudy not found' });
    }

    return res.status(200).send({ status: true, data: updatedCaseStudy });
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.message });
  }
};

// .Making APIs public  //
module.exports.createCaseStudy = createCaseStudy;
module.exports.getCaseStudy = getCaseStudy;
module.exports.updateCaseStudy = updateCaseStudy;