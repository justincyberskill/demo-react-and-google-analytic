import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { usePageViews } from 'utils/hooks'
import styles from './index.module.scss'

export default props => {
  usePageViews()
  return (
    <>
      <div className={styles.navbar}>
        <Link className={styles.navItem} to="/">
          Homepage
        </Link>
        <Link className={styles.navItem} to="/page-1">
          Page 1
        </Link>
        <Link className={styles.navItem} to="/page-2">
          Page 2
        </Link>
      </div>
      <div className={styles.content}>
        <Switch>
          <Route path="/page-1">
            <div>
              <p>PAGE 1 content</p>
              <p>Check GOOGLE ANALYTICS Pageviews when you switched page</p>
            </div>
          </Route>
          <Route path="/page-2">
            <div>
              <p>PAGE 2 content</p>
              <p>Check GOOGLE ANALYTICS Pageviews when you switched page</p>
            </div>
          </Route>
        </Switch>
      </div>
    </>
  )
}
