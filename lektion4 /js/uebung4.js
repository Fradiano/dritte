/**
 * Uebung 4: Bedingungen
 */

/**
 * 1) Erstelle deine if-Bedingung!
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  let ampel = "gruen";

  //ToDo: füge ab hier deinen Code ein
if (ampel == "gruen") {
  console.debug("Du darfst fahren")

}

}

/**
 * 2) Erstelle deine if-Bedingung mit einem negativen Wert!
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  let ampel = "rot";

  //ToDo: füge ab hier deinen Code ein
if (ampel !="gruen") {


  console.debug("Du musst halten")
}
}


/**
 * 3) Bastel deine if-else Ampel!
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  let ampel = "grün";

  if (ampel == "grün") {
    console.debug("Du darfst fahren")
  }
  else if(ampel =="rot"){
    console.debug("Du musst halten!")
  }
  else if (ampel == "gelb"){
    console.debug("achtung")
  }

  switch (ampel) {

    case "grün":
      console.debug("du darfst fahren")
      break
    case "rot":
      console.debug("du musst stehen bleiben!")
      break
    case "gelb":
      console.debug("warte noch")
      break
    default:
      console.debug("achte auf verkehrs zeichen")
  }

}

/**
 * 4) Bastel deinen Switch Wochenkalender!
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");

  let tag = 5;

  //ToDo: füge ab hier Deinen Code ein
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1();
  aufgabe2();
  aufgabe3();
  aufgabe4();
}
main();