import PropTypes from 'prop-types'
import React from 'react'
import CSSModules from 'browser/lib/CSSModules'
import styles from './TocBot.styl'
import _ from 'lodash'
import i18n from 'browser/lib/i18n'

class TocBot extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: true
    }
  }

  render () {
    const { className } = this.props
    return (
      <h1>TOC GOES HERE!</h1>
    )
  }
}

TocBot.propTypes = {
  isActive: PropTypes.bool,
}

export default CSSModules(TocBot, styles)
