const cim = document.getElementById("cim");
const szoveg = "Webfejlesztési alapok";

let i = 0;
function adjKaraktert() {
  if (i < szoveg.length) {
    cim.innerHTML += szoveg.charAt(i);
    i++;
    setTimeout(adjKaraktert, 150);
  }
}

adjKaraktert();
