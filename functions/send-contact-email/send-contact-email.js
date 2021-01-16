require('dotenv').config()

const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_URL, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS } = process.env
const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN, url: MAILGUN_URL })

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }

  const data = JSON.parse(event.body)
  if (!data.message || !data.name || !data.email || !data.subject) {
    return { statusCode: 422, body: 'Name, email, subject, and message are all required.' }
  }

  const mailgunData = {
    from: FROM_EMAIL_ADDRESS,
    to: CONTACT_TO_EMAIL_ADDRESS,
    'h:Reply-To': data.email,
    subject: data.subject,
    text: `
      Name: ${ data.name }\n
      Email: ${ data.email }\n
      Subject: ${ data.subject }\n
      Message: ${ data.message }\n
      How did you hear about me?: ${ data.referrer }
    `
  }
  

  return mailgun.messages().send(mailgunData).then(() => ({
    statusCode: 200,
    body: 'SUCCESS'
  })).catch(error => ({
    statusCode: 422,
    body: `ERROR: ${ error }`
  }))
}