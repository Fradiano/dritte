import {Artikel} from './Artikel.js'


//import {Shopping} from './Shopping.js'


class Gruppe {

  static counter = 1
  id
  name
  index
  artikelListe = []

  constructor(name, index) {
    this.id = Gruppe.counter++
    this.index = index
    this.name = name

  }

  artikelAuflisten(gekauft) {
    for (let artikel of this.artikelListe)
      if (artikel.gekauft == true)
        return artikel


          console.debug(`${artikel.name}`)
  }
}


export {Gruppe}