import React from 'react'

class ArtikelTag extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const artikel = this.props.artikel
    let artikelName = artikel.name
    if (artikel.gekauft) {
      artikelName = <s>{artikel.name}</s>
    }

    // erlaubt das abhaken und reaktivieren
    const viewTemplate = (
      <dd>
        <label>
          <input type="checkbox" checked={artikel.gekauft}
                 onChange={() => this.props.checkHandler(artikel)}/>
          {artikelName}
        </label>
        {!artikel.gekauft ?
          <i className="material-icons"
             onClick={() => this.setState({isEditing: true})}>edit</i>
          : ""
        }
        <i className="material-icons"
           onClick={this.props.deleteHandler}>delete</i></dd>
    )

    // erlaubt das Ändern des Namens
    let editTemplate = (
      <dd>
        <input type="search" value={this.state.newName} autoFocus={true}
               onChange={event => this.handleChange(event)}
               onKeyPress={event => this.artikelUmbenennen(artikel, event)}/>
        <i className="material-icons"
           onClick={() => this.setState({isEditing: false})}>cancel </i>
        <i className="material-icons"
           onClick={() => this.artikelUmbenennen(artikel)}>check_circle </i>
      </dd>
    )


    return (
      <React.Fragment>
        <dd><label><input type="checkbox"/> {this.props.name}</label></dd>
      </React.Fragment>
    )
  }
}

export default ArtikelTag
