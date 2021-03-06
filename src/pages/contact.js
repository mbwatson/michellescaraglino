import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { SEO } from '../components/seo'
import { Page } from '../layout'
import { useFormState } from 'react-use-form-state'
import { Title, Heading, Paragraph } from '../components/typography'
import { Button, FormControl, TextArea, TextInput, Select, Option } from '../components/form'
import { Spacer } from '../components/spacer'
import { StarLoader } from '../components/loader'

const SendingMessage = () => {
  return (
    <Fragment>
      <br/><br/>
      <StarLoader text="Sending..." textPlacement="bottom"/>
    </Fragment>
  )
}
const SuccessMessage = ({ returnEmail }) => {
  return (
    <Fragment>
      <br/><br/>
      <Heading center>Thanks!</Heading>
      <Paragraph center>
        Your message has been sent, and I'll respond to you
        at <span style={{ textDecoration: 'underline' }}>{ returnEmail }</span> shortly!
      </Paragraph>
      <br/>
      <Spacer />
    </Fragment>
  )
}

const ErrorMessage = () => {
  return (
    <Fragment>
      <br/><br/>
      <Heading center>Oops!</Heading>
      <Paragraph center style={{ margin: '1rem auto', width: '90%', maxWidth: '600px' }}>
        I apologize for the inconvenience, but it looks like an error occurred while sending your message!
      </Paragraph>
      <Paragraph center style={{ margin: '1rem auto', width: '90%', maxWidth: '600px' }}>
        While I work on figuring <em>this</em> out, would you mind contacting me directly
        at <span style={{ textDecoration: 'underline' }}>ms@michellescaraglino.com</span>?
      </Paragraph>
      <Paragraph center style={{ margin: '1rem auto', width: '90%', maxWidth: '600px' }}>
        Thanks!
      </Paragraph>
      <br/>
      <Spacer />
    </Fragment>
  )
}

const ContactPage = () => {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [formState, { text, email, select }] = useFormState()

  const handleSendMessage = async event => {
    event.preventDefault()
    setSending(true)
    try {
      const response = await axios.post('/.netlify/functions/send-contact-email', {
        name: formState.values.name,
        email: formState.values.email,
        subject: formState.values.subject,
        message: formState.values.message,
        referrer: formState.values.referrer,
      })
      if (response.status === 200) {
        setSent(true)
        setError(false)
        setSending(false)
      }
    } catch (error) {
      setError(true)
    }
  }
  
  return (
    <Page>
      <SEO
        title="Contact"
        description="Get in touch to ask a question about services, products, or to schedule an appointment!"
        keywords={ ["appointment", "contact"] }
       />

      <Title center>Contact</Title>
      
      { sending && <SendingMessage /> }
      { sent && <SuccessMessage returnEmail={ formState.values.email } /> }
      { error && <ErrorMessage /> }
      {
        !sending && !sent && !error && (
          <Fragment>
            <form onSubmit={ handleSendMessage }>
              <FormControl style={{ width: '100%', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                <label htmlFor="email">Name</label>
                <TextInput id="email" { ...text('name') } required />
              </FormControl>
              <FormControl style={{ width: '100%', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                <label htmlFor="email">Email Address</label>
                <TextInput id="email" { ...email('email') } required type="email" />
              </FormControl>
              <FormControl style={{ width: '100%', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                <label htmlFor="subject">Subject</label>
                <Select id="subject" { ...select('subject') } required>
                  <Option value="">Select One</Option>
                  <Option value="Hair">Hair</Option>
                  <Option value="Styling">Styling</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </FormControl>
              <FormControl style={{ width: '100%', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                <label htmlFor="referrer">How did you hear about me?</label>
                <TextInput id="referrer" { ...text('referrer') } />
              </FormControl>
              <FormControl style={{ width: '100%', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                <label htmlFor="message">Your Message</label>
                <TextArea id="message" { ...text('message') } required placeholder="Type your message here"/>
              </FormControl>
              <Paragraph center>
                <Button>Send</Button>
              </Paragraph>
            </form>
            <br/>
            <Spacer />
          </Fragment>
        )
      }
       

    </Page>
  )
}

export default ContactPage

// <div style={{ width: '700px', height: '500px', position: 'relative', maxWidth: '100%' }}>
  // <iframe width='100%' height='500px' src='https://forms.vagaro.com/FormResponse/NAqX2yiEuJWZAu5NIUMH2xpOgXhez5h3DtEKUUHKfzC0?embeded=true'
    // style={{ position: 'absolute', top: 0, bottom: 0, left:0,  right:0 }} frameborder='0' marginwidth='0' marginheight='0'
  // >
    // Loading...
  // </iframe>
// </div>