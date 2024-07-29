import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation('global')
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_osx2shn',
        'template_xy5o4go',
        refForm.current,
        'W_R-6FlZBUN4f4AtP'
      )
      .then(() => {
        alert(t('Sent successfully'))
        refForm.current.reset()
      })
      .catch((error) => {
        console.error('Send email error:', error)
        alert(t('Unexpected Error'))
      })
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={t('contact.title1').split('')}
              idx={15}
              letterClass={letterClass}
            />
            <br />
            <AnimatedLetters
              strArray={t('contact.title2').split('')}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>{t('contact.description')}</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.name')}
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.email')}
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder={t('contact.subject')}
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder={t('contact.message')}
                    name="message"
                  ></textarea>
                </li>
                <li className="half">
                  <input
                    type="submit"
                    className="flat-button"
                    value={t('contact.send')}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          {t('contact.address.line1')}
          <br />
          {t('contact.address.line2')}
          <br />
          {t('contact.address.line3')}
          <br />
          <span>{t('contact.address.email')}</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[46.62417825913038, 14.307696865316503]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[46.62417825913038, 14.307696865316503]}>
              <Popup>{t('contact.address.popup')}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
