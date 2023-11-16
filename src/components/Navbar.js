import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  const styl={
    color: `${props.color}`
  }
  return (
    <div>
    <nav className={`navbar navbar-dark bg-${props.mode} fixed-top`}>
    <div className="container-fluid">
      <a className="navbar-brand" style={styl} href="/">{props.title}</a>
      <div className="form-check form-switch" style={styl}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togle} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
      </div>
    </div>
  </nav>
  </div>
  )
}
Navbar.propTypesropTypes={title:PropTypes.string.isRequired}
Navbar.defaultProps={
 title:"the title"
}