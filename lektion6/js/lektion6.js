/**
 * Lektion 6: Funktionen
 */

// Variablen für die Einkaufsliste
let gruppenListe = ["Obst & Gemüse", "Getreideprodukte", "Milchprodukte", "Hülsenfrüchte"]
let aktiveGruppe = 3

function gruppeFinden(gruppenName) {

   let gruppenIndex = gruppenListe.indexOf(gruppenName)
    if (gruppenIndex > -1 ){
        return gruppenName
    }else{
        console.warn("gruppe", gruppenName, "nicht gefunden")
        return null
    }
}


// TODO: Füge hier die Funktionen `gruppeFinden`, `gruppeHinzufuegen`, `gruppeUmbenennen` und `gruppeEntfernen` hinzu



function gruppeHinzufuegen(name){
  let gleicheGruppe = gruppenListe.indexOf(name)
  if (gleicheGruppe == -1){
    let neueGruppe = name
    gruppenListe.push(neueGruppe)
  }


}

function gruppeUmbenennen(){}
function gruppeEntfernen() {}
export {
    gruppenListe, aktiveGruppe,
    gruppeFinden, gruppeHinzufuegen, gruppeUmbenennen, gruppeEntfernen
}