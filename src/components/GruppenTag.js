import React from 'react'
import ArtikelTag from './ArtikelTag'

class GruppenTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <dt>Obst & Gemüse
          <i className="material-icons">expand_less</i>
        </dt>
        <ArtikelTag name="Käse"/>
        <dt>Getreideprodukte
          <i className="material-icons">expand_less</i>
        </dt>
        <ArtikelTag name="Brot"/>
        <dt>Milchprodukte
          <i className="material-icons">expand_less</i>
        </dt>
        <ArtikelTag name="Senf"/>
      </React.Fragment>
    )
  }
}

export default GruppenTag
