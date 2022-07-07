import './index.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'gmail',
                'template_g0ca0eu',
                refForm.current,
                '50pEqC60WQxHcPHvb'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )        
    }

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    Contact Me
                </h1>
                <p id="contact-description">
                    I am actively seeking working opportunities to expand my software engineering experience.
                    Feel free to contact me through the form below or <a href="https://www.linkedin.com/in/cameron-obrien4/" target="_blank" rel="noreferrer noopener">Linkedin!</a>
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <li className='half'>
                            <input type="text" name="name" placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder='Email' required/>
                        </li>
                        <li>
                            <input placeholder='Subject' type="text" name="subject" required/>

                        </li>
                        <li>
                            <textarea placeholder='Message' name="message" required>
                            </textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND"/>

                        </li>

                    </form>


                </div>
                

            </div>
        </div>
    )
}

export default Contact