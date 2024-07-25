import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useTranslation } from 'react-i18next'

const Lebenslauf = () => {
  const { t } = useTranslation('global')
  const [letterClass, setLetterClass] = useState('text-animate')
  const titleArray = t('cv.title').split(' ')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="lebenslauf-page">
      <h1 className="page-title">
        {titleArray.length > 1 ? (
          <>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleArray[0].split('')}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={titleArray.slice(1).join(' ').split('')}
              idx={15 + titleArray[0].length}
            />
          </>
        ) : (
          <AnimatedLetters
            letterClass={letterClass}
            strArray={titleArray[0].split('')}
            idx={15}
          />
        )}
      </h1>
      <div className="container">
        <div className="left-column">
          <section className="personal-info">
            <h2>{t('cv.personal_info')}</h2>
            <p>
              <strong>{t('cv.address')}:</strong> Flurgasse 31, 9020 Klagenfurt
            </p>
            <p>
              <strong>{t('cv.email')}:</strong>{' '}
              <a href="mailto:jelecevic.elvis@gmail.com">
                jelecevic.elvis@gmail.com
              </a>
            </p>
            <p>
              <strong>{t('cv.birthdate')}:</strong> 04.04.2001
            </p>
            <p>
              <strong>{t('cv.nationality')}:</strong> {t('cv.country')}
            </p>
            <p>
              <strong>{t('cv.marital_status')}:</strong>{' '}
              {t('cv.marital_status_data')}
            </p>
            <p>
              <strong>{t('cv.phone')}:</strong> 0677 64743679
            </p>
            <p>
              <strong>{t('cv.birthplace')}:</strong> Ljubljana
            </p>
          </section>
          <section className="skills">
            <h2>{t('cv.skills')}</h2>
            <ul>
              <li>
                {t('cv.office')} <span className="stars">★★★★★</span>
              </li>
              <li>
                {t('cv.blender')} <span className="stars">★★★★★</span>
              </li>
              <li>
                {t('cv.javascript')} <span className="stars">★★★★★</span>
              </li>
              <li>
                {t('cv.video_editing')} <span className="stars">★★★★☆</span>
              </li>
              <li>
                {t('cv.photoshop')} <span className="stars">★★★★☆</span>
              </li>
              <li>
                {t('cv.c_sharp')} <span className="stars">★★★☆☆</span>
              </li>
            </ul>
          </section>
          <section className="languages">
            <h2>{t('cv.languages')}</h2>
            <p>
              {t('cv.slovenian')} - {t('cv.native_language')}
            </p>
            <p>
              {t('cv.serbo-kroatian')} - {t('cv.native_language')}
            </p>
            <p>
              {t('cv.english')} - {t('cv.c2')}
            </p>
            <p>
              {t('cv.german')} - {t('cv.c2')}
            </p>
          </section>
        </div>
        <div className="right-column">
          <section className="education">
            <h2>{t('cv.education')}</h2>
            <div className="education-item">
              <p>
                <strong>09/2016 - 07/2021</strong>
              </p>
              <p>{t('cv.project1')}</p>
            </div>
            <div className="education-item">
              <p>
                <strong>09/2012 - 07/2016</strong>
              </p>
              <p>{t('cv.project2')}</p>
            </div>
          </section>
          <section className="experience">
            <h2>{t('cv.experience')}</h2>
            <div className="experience-item">
              <p>
                <strong>02/2022 - 04/2022</strong>
              </p>
              <p>{t('cv.job1')}</p>
            </div>
            <div className="experience-item">
              <p>
                <strong>07/2021</strong>
              </p>
              <p>{t('cv.job2')}</p>
            </div>
            <div className="experience-item">
              <p>
                <strong>07/2019 - 08/2019</strong>
              </p>
              <p>{t('cv.job3')}</p>
            </div>
          </section>
          <section className="further-education">
            <h2>{t('cv.further_education')}</h2>
            <div className="further-education-item">
              <p>
                <strong>04/2024 - 11/2023</strong>
              </p>
              <p>{t('cv.training1')}</p>
            </div>
            <div className="further-education-item">
              <p>
                <strong>10/2023 - 09/2022</strong>
              </p>
              <p>{t('cv.training2')}</p>
            </div>
          </section>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Lebenslauf
