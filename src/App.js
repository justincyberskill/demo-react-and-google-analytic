import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PageviewSection from './components/section-pageview'
import { GA } from 'constants/index'

// ------ Styling import ------
import SVGGoogleAnalytic from 'assets/svgs/google-analytic.svg'
import SVGReact from 'assets/svgs/react.svg'
import styles from './App.module.scss'

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <img
              src={SVGGoogleAnalytic}
              alt="Google Analytic"
              className={styles.gaLogo}
            />
            <span className={styles.vs}>+</span>
            <img src={SVGReact} alt="ReactJS" className={styles.reactLogo} />
          </div>
        </div>
        {GA.TRACKING_ID && (
          // --- Body start ---
          <div className={styles.body}>
            {GA.TRACKING_ID && (
              <>
                <PageviewSection />
              </>
            )}
          </div>
          //--- Body end -----
        )}
        {!GA.TRACKING_ID && (
          <div className={styles.alert}>
            <div className={styles.alertMessage}>
              You're missing Google Analytic Tracking ID
            </div>
            <div className={styles.alertSubMessage}>
              Please update TRACKING_ID data in your .env file
            </div>
          </div>
        )}
      </div>
    </Router>
  )
}

export default App
