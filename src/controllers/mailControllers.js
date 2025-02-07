const nodemailer = require('nodemailer');
const {
	mailSenderDetails: sender,
	mailContent: content,
	getMailContent,
} = require('../configurations/config');

const mail = async (req, res) => {
	try {
		const to = req?.query?.to;
		const name = req?.query?.name;

		if (!to || !name) {
			return res.send('provide email and name');
		}

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: sender.email,
				pass: sender.appPasscode,
			},
		});

		const mailOptions = {
			from: sender.email,
			to,
			subject: content.subject,
			html: getMailContent(name),
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.error('Error sending email:', error);
			} else {
				console.log('Email sent:', info.response);
			}
		});

		return res.status(201).json('mail sent');
	} catch (error) {
		return res.status(500).json('Error sending mail');
	}
};

module.exports = {
	mail,
};
