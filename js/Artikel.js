class Artikel {
  static counter = 1
  id = gruppe.counter++
  index
  name
  gekauft
  artikelListe = []

  constructor(index, name) {
    this.name = name
    this.index = index
    this.id = Artikel.counter++
    this.gekauft = false
  }

}

export {Artikel}

