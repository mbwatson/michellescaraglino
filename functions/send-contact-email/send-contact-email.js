const {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
  FROM_EMAIL_ADDRESS,
  CONTACT_TO_EMAIL_ADDRESS,
} = process.env

// Mailgun's US API host, which mailgun-js always used
const sendMailgunMessage = async (message) => {
  const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
    },
    body: new URLSearchParams(message),
  })
  if (!response.ok) {
    throw new Error(`Mailgun responded ${response.status}: ${await response.text()}`)
  }
}

const successResponse = {
  statusCode: 200,
  body: JSON.stringify({ success: true }),
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
      headers: { Allow: 'POST' },
    }
  }

  // Parse request body.
  let data

  try {
    data = JSON.parse(event.body || '{}')
  } catch {
    return {
      statusCode: 400,
      body: 'Invalid request.',
    }
  }

  // Honeypot: silently discard bot submissions.
  if (typeof data.website === 'string' && data.website.trim()) {
    return successResponse
  }

  // Minimum submission time (supplementary spam protection).
  if (
    typeof data.elapsedTime === 'number' &&
    data.elapsedTime < 2000
  ) {
    return successResponse
  }

  // Normalize inputs.
  const name = typeof data.name === 'string' ? data.name.trim() : ''
  const email = typeof data.email === 'string' ? data.email.trim() : ''
  const subject = typeof data.subject === 'string' ? data.subject.trim() : ''
  const message = typeof data.message === 'string' ? data.message.trim() : ''
  const referrer = typeof data.referrer === 'string' ? data.referrer.trim() : ''

  // Required fields.
  if (!name || !email || !subject || !message) {
    return {
      statusCode: 422,
      body: 'Name, email, subject, and message are all required.',
    }
  }

  // Field length validation.
  if (
    name.length > 200 ||
    email.length > 254 ||
    message.length > 5000 ||
    referrer.length > 500
  ) {
    return {
      statusCode: 422,
      body: 'One or more fields are too long.',
    }
  }

  // Basic email validation.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 422,
      body: 'Invalid email address.',
    }
  }

  // Only accept the subjects offered by the form.
  if (!['Hair', 'Styling', 'Other'].includes(subject)) {
    return {
      statusCode: 422,
      body: 'Invalid subject.',
    }
  }

  // Send email through Mailgun.
  const mailgunData = {
    from: FROM_EMAIL_ADDRESS,
    to: CONTACT_TO_EMAIL_ADDRESS,
    'h:Reply-To': email,
    subject: subject,
    text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
How did you hear about me?: ${referrer}
    `,
  }

  try {
    await sendMailgunMessage(mailgunData)

    return {
      statusCode: 200,
      body: 'SUCCESS',
    }
  } catch (error) {
    console.error('Contact form Mailgun error:', error)

    return {
      statusCode: 500,
      body: 'Unable to send message.',
    }
  }
}
