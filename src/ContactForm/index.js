import React, { Component } from 'react'
import './style.css'

class ContactForm extends Component {
  notSentAlert () {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    if (name !== '' || email !== '' || subject !== '' || message !== '') {
      alert('Please fill out all information boxes. Thanks!')
    }
  }

  render () {
    return (
      <div>
        <form id='contactform' action='//formspree.io/mcholzman1@gmail.com' method='POST' >
          <input type='text' name='name' placeholder='Your name' id='name-input' />
          <input type='email' name='_replyto' placeholder='Your email' id='email-input' />
          <input type='text' name='_subject' placeholder='Subject' id='subject-input' />
          <textarea name='message' rows='4' placeholder='Your message' id='message-input' />
          <input type='text' name='_gotcha' style={{ display: 'none' }} />
          <input id='submit-button' type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default ContactForm
