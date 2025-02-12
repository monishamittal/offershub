const isProduction = process.env.NODE_ENV === 'production';
const mailSenderDetails = isProduction
	? {
			email: 'support@offershub.com',
			appPasscode: 'ktfm qjip grfr ylej',
	  }
	: {
			email: 'utkarshgarg143@gmail.com',
			appPasscode: 'oset vrfk ymqu xoni',
	  };

const notificationMails = [
	'anshul@offershub.com',
	'palak@offershub.com',
	'ajay@offershub.com',
	'abhishek@offershub.com',
];

module.exports = {
	mailSenderDetails,
	notificationMails,
};

// {
// 	email: 'palak@offershub.com',
// 	appPasscode: 'ncji rmrk gajc vzxs',
// }
