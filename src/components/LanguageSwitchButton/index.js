import React from 'react'
import { useTranslation } from 'react-i18next'
import GermanFlag from '../../assets/images/128px-Flag_of_Germany.svg.png'
import EnglishFlag from '../../assets/images/128px-Flag_of_the_United_Kingdom.svg.png'
import './index.scss' // import the CSS file

const LanguageSwitchButton = () => {
  const { i18n } = useTranslation()
  const { t } = useTranslation('global')

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="language-switch-container">
      <p>{t('language')}</p>

      <button onClick={() => changeLanguage('de')} className="language-button">
        <img src={GermanFlag} alt="Change language to German" width="30" />
      </button>
      <button onClick={() => changeLanguage('en')} className="language-button">
        <img src={EnglishFlag} alt="Change language to English" width="30" />
      </button>
    </div>
  )
}

export default LanguageSwitchButton
