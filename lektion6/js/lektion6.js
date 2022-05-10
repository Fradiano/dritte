/**
 * Lektion 6: Funktionen
 */

// Variablen für die Einkaufsliste
  // initialisiere ein Array namens gruppenListe
let gruppenListe = ["Obst & Gemüse", "Getreideprodukte", "Milchprodukte", "Hülsenfrüchte"]
// initialisiere eine NumberVariable mit dem Wert 3
let aktiveGruppe = 3
// erstelle eine function gruppeFinden mit Paramenter gruppenName
function gruppeFinden(gruppenName) {
// gruppenIndex gebe ich dem wert gruppenListe.indexOF gruppenName
  let gruppenIndex = gruppenListe.indexOf(gruppenName)
  // mache if abfrage ob index exisitiert
  if (gruppenIndex > -1) {
    // dann gebe gruppenName zurück
    return gruppenName
    //ansosnten null
  } else {
    console.warn("gruppe", gruppenName, "nicht gefunden")
    return null
  }
}


// TODO: Füge hier die Funktionen `gruppeFinden`, `gruppeHinzufuegen`, `gruppeUmbenennen` und `gruppeEntfernen` hinzu

// ich gucke nur ob eine gruppe schon exisitiert
function gruppeHinzufuegen(name) {
  let gleicheGruppe = gruppenListe.indexOf(name)
  // wenn sie nicht exisitiert ist der index -1
  if (gleicheGruppe == -1) {

    gruppenListe.push(name)
    aktiveGruppe = name
    return name
  } else {
    console.warn("existiert schon")
    return null
  }


}

function gruppeUmbenennen(alterName, neuerName) {

  let vorhandeneGruppe = gruppeFinden(alterName)
  if (vorhandeneGruppe != null) {
    let index = gruppenListe.indexOf(alterName)
    gruppenListe[index] = neuerName
    console.debug("gruppe wurde von " + alterName + " wurde ge " + neuerName + "umbenannt")


  }

}

function gruppeEntfernen(gruppenName) {
  let entfernGruppe = gruppeFinden(gruppenName)
  if (entfernGruppe != null ){
    let index = gruppenListe.indexOf(gruppenName)
    gruppenListe.splice(index,1)
    console.debug("gruppe wurde entfernt")
  }else{
    console.warn(gruppenName + "konnte  NICHT entfertn werden")
  }

}

export {
  gruppenListe, aktiveGruppe,
  gruppeFinden, gruppeHinzufuegen, gruppeUmbenennen, gruppeEntfernen
}