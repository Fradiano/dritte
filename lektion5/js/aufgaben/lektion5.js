/**
 * Lektion 5: Schleifen
 */

/**
 * 1) Schreibe ein Array `artikelListe`, fülle es und geb es auf der Konsole mithilfe einer Schleife aus
 */
function artikelAuflisten() {
  // ToDo: füge ab hier deinen Code ein
  let artikeliste = ["Brokkoli", "Reis", "Streukäse"]

  for (let artikel of artikeliste) {
    console.debug(artikel)
  }

}

/**
 * 2) Erstelle die Arrays `milchListe`, `gemüseListe` und `getreideListe`, fülle diese, füge sie der gruppenListe hinzu und
 * gebe sie auf der Konsole aus
 */
function allesAuflisten() {
  let gruppenListe = []

// ToDo: füge ab hier deinen Code ein
  let gemuese = ["brokkoli", "zwiebeln", "salat"]
    let getreideliste = ["reis", "nudeln", "quinoa"]
    let milchliste = ["Streukäse", "sahne", "joghurt"]

gruppenListe.push (gemuese, getreideliste, milchliste)
  for ( let gruppe of gruppenListe) {
    console.debug(gruppe)
  }

}

/**
 * 3) Erstelle ein befülltes Array `gemueseListe`, entferne diese Elemente aus dem Array und gebe es vor und nach dem Entfernen
 * auf der Konsole aus
 */
function artikelEntfernen() {
  // ToDo: füge ab hier deinen Code ein

}

/**
 * 4) Schreibe die Sortieren-Funktion
 */
function sortieren() {
  // ToDo: füge ab hier deinen Code ein
}

export {
  artikelAuflisten, allesAuflisten, artikelEntfernen, sortieren
}