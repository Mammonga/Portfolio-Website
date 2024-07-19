import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'
import { useTranslation } from 'react-i18next'
import LanguageSwitchButton from '../LanguageSwitchButton'

const Home = () => {
  const [t, i18n] = useTranslation('global')

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'v', 'i', 's']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const wrapWithSpan = (text, baseClass, startIdx = 0) =>
    text.split('').map((char, idx) => (
      <span key={idx} className={`${baseClass} _${startIdx + idx}`}>
        {char}
      </span>
    ))

  return (
    <>
      <div className="container home-page">
        <LanguageSwitchButton />
        <div className="text-zone">
          <h1>
            {wrapWithSpan(t('home.hi'), letterClass, 1)}
            <br />
            {wrapWithSpan(t('home.ich'), letterClass, t('home.hi').length + 1)}
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2>Frontend Developer</h2>
          <Link to="/contact" className="flat-button">
            {t('home.contact_me')}
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Home
