class Artikel {
  static counter = 1
  id
  index
  name
  gekauft = false


  constructor(name, index) {
    this.name = name
    this.index = index
    this.id = Artikel.counter++

  }

}

export {Artikel}

