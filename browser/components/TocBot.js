import PropTypes from 'prop-types'
import React from 'react'
import CSSModules from 'browser/lib/CSSModules'
import styles from './TocBot.styl'
import _ from 'lodash'
import i18n from 'browser/lib/i18n'
import tocbot from 'tocbot'

class TocBot extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: true
    }
  }

  render () {
    const { className } = this.props

    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.note-content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3',
    })
    tocbot.refresh()

    return (<h1>TOCBOT</h1>)

  }
}

TocBot.propTypes = {
  isActive: PropTypes.bool,
}

export default CSSModules(TocBot, styles)
