import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PageviewSection from './components/section-pageview'

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
      </div>
      {/* --- Body start --- */}
      <div className={styles.body}>
        <PageviewSection />
      </div>
      {/* --- Body end   --- */}
    </Router>
  )
}

export default App
