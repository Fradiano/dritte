import React from 'react'

class ArtikelTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <dd><label><input type="checkbox"/> {this.props.name}</label></dd>
      </React.Fragment>
    )
  }
}

export default ArtikelTag
