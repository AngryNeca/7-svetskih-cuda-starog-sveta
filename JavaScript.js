function Uvecaj(glavna, tekst, naslov, slicica) {
    document.getElementById("glavna").src = glavna.src;
    document.getElementById("slicica").src = slicica.src;

    var visibleP = document.getElementById(tekst);
    var VISIBLEP = document.getElementById(naslov);

    var i, len, ps = document.getElementsByTagName('p');
    var ps1 = document.getElementsByTagName('h1');

    for (i = 0, len = ps.length; i < len; i++) {
        ps[i].style.display = 'none';
        ps1[i].style.display = 'none';
    }
    visibleP.style.display = 'block';
    VISIBLEP.style.display = 'block';
}