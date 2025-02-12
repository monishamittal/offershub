const nodemailer = require('nodemailer');
const { mailSenderDetails: sender, notificationMails } = require('../configurations/config');

const signup_subject = 'Signup Confirmation - Offershub';
const noti_subject = 'New OffersHub Demo Request: ';

function getMailContent(name) {
	return `<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="m_8322143655510895421bodyTable" style="border-collapse:collapse;height:100%;margin:0;padding:0;width:100%;background-color:#f5f5f5">
   <tbody>
      <tr>
         <td align="center" valign="top" id="m_8322143655510895421bodyCell" style="height:100%;margin:0;padding:50px 50px;width:100%">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="m_8322143655510895421templateContainer" style="border-collapse:collapse;border:0;max-width:600px!important">
               <tbody>
                  <tr>
                     <td valign="top" align="center" id="m_8322143655510895421templateHeader" style="padding-bottom:20px;text-align:center"><img src="https://ci3.googleusercontent.com/meips/ADKq_NbNp2bRai1dvlmxVapz6id-8ekmntNZsgDu9y-rsmSudvtv4Az85DlpjXPatVfLyzx44G0I3Yl2tSr7ySZUOvszjQ6cHqnzIxG4Frq5074NHgy-=s0-d-e1-ft#https://offershub.com/wp-content/uploads/Asset-7@8x-1-1-2.png" alt="OffersHub" class="CToWUd" data-bit="iit"></td>
                  </tr>
                  <tr>
                     <td valign="top" id="m_8322143655510895421templateBody" style="background-color:#ffffff;border-top:0;border:1px solid #c1c1c1;padding-top:0;padding-bottom:0px">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
                           <tbody>
                              <tr>
                                 <td valign="top">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse" class="m_8322143655510895421mcnTextContentContainer">
                                       <tbody>
                                          <tr>
                                             <td valign="top" style="padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px" class="m_8322143655510895421mcnTextContent">
                                                Hi ${name},<br>
                                                <br>
                                                Thank you for signing up with <span class="il">Offershub</span>. We have received your signup request and our team will contact you shortly. <br>
                                                <br>
                                                We are delighted to have you as a part of our community. With <span class="il">Offershub</span>, you can discover exciting opportunities, and see substantial increments in conversion rates with valuable insights that could effectively improve your internal KPIs.<br>
                                                <br>
                                                You can book a meeting with our demo experts. They will be more than happy to guide you through our features and answer any questions you may have. <br>
                                                <br>
                                                <a href="http://email-redirect.offershub.com/ls/click?upn=u001.gVQ5aHIYNgPiFMbgimI8gpzs6M1O1O5a7sdHpA2aLZtfP7QMAbmvZysCcYtEfiMDheOK_TEj-2B3upJrXgqtmbrPUYOtJVOY0QroGWqkXNuIIMluzEn-2BaNy10HVk5SITxHqn0-2FIsOcor9dFuicVsmDGcyttNfMa8z2vsPiyp7TisCKpvtfSJsF3VF5AirQMpxHZSRNFSnMYc21iWRawIA0YiCnulIgEq1UrFXeErejVQmkUyaPjo4ynuQtFoLjY-2B4CGJHttRJ5oy18fkqIiJ9jtCuOt7A-3D-3D" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://email-redirect.offershub.com/ls/click?upn%3Du001.gVQ5aHIYNgPiFMbgimI8gpzs6M1O1O5a7sdHpA2aLZtfP7QMAbmvZysCcYtEfiMDheOK_TEj-2B3upJrXgqtmbrPUYOtJVOY0QroGWqkXNuIIMluzEn-2BaNy10HVk5SITxHqn0-2FIsOcor9dFuicVsmDGcyttNfMa8z2vsPiyp7TisCKpvtfSJsF3VF5AirQMpxHZSRNFSnMYc21iWRawIA0YiCnulIgEq1UrFXeErejVQmkUyaPjo4ynuQtFoLjY-2B4CGJHttRJ5oy18fkqIiJ9jtCuOt7A-3D-3D&amp;source=gmail&amp;ust=1738997504794000&amp;usg=AOvVaw2ROBThzBTRumpOvXc4CKqn">Click here to schedule a meeting</a><br>
                                                <br>
                                                <br>
                                                Looking forward to an amazing journey together!<br>
                                                <br>
                                                Best regards,<br>
                                                <span class="il">Offershub</span> Team
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td valign="top" id="m_8322143655510895421templateFooter" style="background-color:#f5f5f5;border-top:0;border-bottom:0;padding-top:12px;padding-bottom:12px">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
                           <tbody>
                              <tr>
                                 <td valign="top">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse" class="m_8322143655510895421mcnTextContentContainer">
                                       <tbody>
                                          <tr>
                                             <td valign="top" class="m_8322143655510895421mcnTextContent" style="padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#aaa;font-family:Helvetica;font-size:12px;line-height:150%;text-align:center">
                                                Sent from <a href="http://email-redirect.offershub.com/ls/click?upn=u001.gVQ5aHIYNgPiFMbgimI8giJRa-2FyDFKboVvoJwxzYIXQ-3D1hJ3_TEj-2B3upJrXgqtmbrPUYOtJVOY0QroGWqkXNuIIMluzEn-2BaNy10HVk5SITxHqn0-2FIsOcor9dFuicVsmDGcyttNTCpag6pdvVPuOBpfZDd3cwAHGUroDlDsdlgKzArUk9O4mXoZrBBGXc-2B-2BNmtm6fEBUsesIpnciF303zYQ79tYke8QWVhxdl6CZcZYpWdvO66yHZrq9zzduyj2ZkY6AkkYg-3D-3D" style="color:#bbbbbb" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://email-redirect.offershub.com/ls/click?upn%3Du001.gVQ5aHIYNgPiFMbgimI8giJRa-2FyDFKboVvoJwxzYIXQ-3D1hJ3_TEj-2B3upJrXgqtmbrPUYOtJVOY0QroGWqkXNuIIMluzEn-2BaNy10HVk5SITxHqn0-2FIsOcor9dFuicVsmDGcyttNTCpag6pdvVPuOBpfZDd3cwAHGUroDlDsdlgKzArUk9O4mXoZrBBGXc-2B-2BNmtm6fEBUsesIpnciF303zYQ79tYke8QWVhxdl6CZcZYpWdvO66yHZrq9zzduyj2ZkY6AkkYg-3D-3D&amp;source=gmail&amp;ust=1738997504794000&amp;usg=AOvVaw03AD-sDCwZd3jUtrB87GmP"><span class="il">OffersHub</span></a>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
         </td>
      </tr>
   </tbody>
</table>`;
}

function getNotificationContent(data) {
	return `<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="m_6000854392163276413m_-4261885927137231780bodyTable" style="border-collapse:collapse;height:100%;margin:0;padding:0;width:100%;background-color:#f5f5f5">
   <tbody>
      <tr>
         <td align="center" valign="top" id="m_6000854392163276413m_-4261885927137231780bodyCell" style="height:100%;margin:0;padding:50px 50px;width:100%">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:0;max-width:600px!important">
               <tbody>
                  <tr>
                     <td valign="top" align="center" id="m_6000854392163276413m_-4261885927137231780templateHeader" style="padding-bottom:20px;text-align:center"><img src="https://ci3.googleusercontent.com/meips/ADKq_NbNp2bRai1dvlmxVapz6id-8ekmntNZsgDu9y-rsmSudvtv4Az85DlpjXPatVfLyzx44G0I3Yl2tSr7ySZUOvszjQ6cHqnzIxG4Frq5074NHgy-=s0-d-e1-ft#https://offershub.com/wp-content/uploads/Asset-7@8x-1-1-2.png" alt="OffersHub" class="CToWUd" data-bit="iit"></td>
                  </tr>
                  <tr>
                     <td valign="top" id="m_6000854392163276413m_-4261885927137231780templateBody" style="background-color:#ffffff;border-top:0;border:1px solid #c1c1c1;padding-top:0;padding-bottom:0px">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
                           <tbody>
                              <tr>
                                 <td valign="top">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
                                       <tbody>
                                          <tr>
                                             <td valign="top" style="padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px">
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Your Name</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px">${data.first_name}</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Email</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px"><a href="mailto:${data.email}" target="_blank">${data.email}</a></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Mobile Number</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px">${data.mobile_number}</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>IM Type</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px">${data.im_type}</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>IM ID</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px">${data.im_id}</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Website</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px"><a href="${data.website_url}">${data.website_url}</a></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Country</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px">${data.country}</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Terms and Conditions</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px">I agree to the Privacy Policy and Master Services Agreement</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>User IP</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px">-</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Source</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px">-</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Campaign</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px">-</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>Click ID</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px">N/A</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top:1px solid #dddddd;display:block;min-width:100%;border-collapse:collapse;width:100%">
                                                   <tbody>
                                                      <tr>
                                                         <td style="color:#333333;padding-top:20px;padding-bottom:3px"><strong>UTMs</strong></td>
                                                      </tr>
                                                      <tr>
                                                         <td style="color:#555555;padding-top:3px;padding-bottom:20px">N/A</td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td valign="top" id="m_6000854392163276413m_-4261885927137231780templateFooter" style="background-color:#f5f5f5;border-top:0;border-bottom:0;padding-top:12px;padding-bottom:12px">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
                           <tbody>
                              <tr>
                                 <td valign="top">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse">
                                       <tbody>
                                          <tr>
                                             <td valign="top" style="padding-top:9px;padding-right:18px;padding-bottom:9px;padding-left:18px;word-break:break-word;color:#aaa;font-family:Helvetica;font-size:12px;line-height:150%;text-align:center">
                                                Sent from <a href="https://offershub.com/">OffersHub</a>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
         </td>
      </tr>
   </tbody>
</table>`;
}

function send_mail(to, subject, html_content) {
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
		subject,
		html: html_content,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error('Error sending email:', error);
		} else {
			console.log('Email sent:', info.response);
		}
	});
}

const mail = async (req, res) => {
	try {
		console.log(req.body);
		if (!req.body.email || !req.body.first_name) {
			return res.send('provide email and name');
		}

		// sending mail to leads
		send_mail(req.body.email, signup_subject, getMailContent(req.body.first_name));

		// sending notification to employee
		for (let mail of notificationMails) {
			send_mail(mail, noti_subject + req.body.first_name, getNotificationContent(req.body));
		}

		return res.status(201).json('mail sent');
	} catch (error) {
		return res.status(500).json('Error sending mail');
	}
};

module.exports = {
	mail,
};
