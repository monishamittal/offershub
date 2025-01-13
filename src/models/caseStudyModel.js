const mongoose = require('mongoose');

const caseStudySchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: Buffer },
}, { timestamps: true });

module.exports = mongoose.model('CaseStudy', caseStudySchema);