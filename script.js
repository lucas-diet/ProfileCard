
// Funktion zum Setzen des aktuellen Datums
function currentDate() {
    var date = new Date();
    var showDate = document.getElementById("currDate");

    // Überprüfen, ob das Element vorhanden ist
    if (showDate) {
        var formation = (date.getMonth() + 1).toString().padStart(2, '0') + '.' + date.getFullYear();
        var dateText = document.createTextNode(formation);
        showDate.appendChild(dateText);
    } else {
        console.log("Element mit der ID 'currDate' auf dieser Seite nicht gefunden.");
    }
}




function changeLanguage() {
    const placeElement = document.getElementById("place");
    const stateTitle = document.getElementById("currentTitle");
    const translateButton = document.getElementById("translate");
    const experienceBtn = document.getElementById("exp");
    const contactBtn = document.getElementById("contact");

    const educElement = document.getElementById("educ");
    const mrDate = document.getElementById("mrDate")
    const mr = document.getElementById("mr")
    const ahDate = document.getElementById("ahDate")
    const ah = document.getElementById("ah")
    const bscDate = document.getElementById("bscDate")
    const bsc = document.getElementById("bsc")
    const mscDate = document.getElementById("mscDate")
    const msc = document.getElementById("msc")

    const expElement = document.getElementById("workLine");
    const jobSpan1 = document.getElementById("jobSpan1")
    const jobTitle1 = document.getElementById("jobTitle1");

    // Prüfe aktuelle Sprache
    const currentLang = localStorage.getItem("language") || "de"; // Standardmäßig Deutsch
    const newLang = currentLang === "de" ? "en" : "de";

    // Sprache speichern
    localStorage.setItem("language", newLang);

    // Inhalte anpassen
    const isEnglish = newLang === "en";

    if (window.location.pathname === "/" || window.location.pathname.includes("index.html")) {
        if (placeElement) placeElement.textContent = isEnglish ? "Jena, Germany" : "Jena, Deutschland";
        if (stateTitle) stateTitle.textContent = isEnglish ? "Bioinformatics student" : "Student der Bioinformatik";
        if (experienceBtn) experienceBtn.textContent = isEnglish ? "Work Experience" : "Berufe";
        if (contactBtn) contactBtn.textContent = isEnglish ? "EMail" : "E-Mail";
    } 
    else if (window.location.pathname.includes('education.html')) {
        if (educElement) educElement.textContent = isEnglish ? "Education" : "Bildungsweg";
        if (mrDate) mrDate.textContent = isEnglish ? "Jul/2015" : "07.2015";
        if (mr) mr.textContent = isEnglish ? "Secondary school diploma" : "Mittlere Reife";
        if (ahDate) ahDate.textContent = isEnglish ? "Jul/2016" : "07.2016";
        if (ah) ah.textContent = isEnglish ? "High School Diploma" : "Allgemeine Hochschulreife";
        if (bscDate) bscDate.textContent = isEnglish ? "Mar/2022" : "03.2022";
        if (bsc) bsc.textContent = isEnglish ? "B. Sc. in Bioinformatics" : "B. Sc. in Bioinformatk";
        if (mscDate) mscDate.textContent = isEnglish ? "Mar/2025" : "03.2025";
        if (msc) msc.textContent = isEnglish ? "M. Sc in Bioinformatics" : "M. Sc. in Bioinformatik";
    }
    else if (window.location.pathname.includes("experience.html")) {
        if (expElement) expElement.textContent = isEnglish ? "Work Experience" : "Beruflicher Werdegang";
        if (jobSpan1) jobSpan1.textContent = isEnglish ? "Oct/2019 - Jul/2020" : "10.2019 - 07.2020";
        if (jobTitle1) jobTitle1.innerHTML = isEnglish 
            ? "Student Assistant at the Competence & Service Center <br> Friedrich-Schiller-University Jena"
            : "Studentische Hilfskraft im Kompetenz- & Servicezentrum <br> Friedrich-Schiller-Universität Jena";
    }

    // Flagge ändern
    if (translateButton) {
        translateButton.style.backgroundImage = isEnglish 
            ? "url('https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg')" 
            : "url('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg')";
    }
}

// Sprache beim Laden der Seite anwenden
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('translate').addEventListener('click', changeLanguage);

    // Stelle sicher, dass die gespeicherte Sprache angewendet wird
    if (localStorage.getItem("language") === "en") {
        changeLanguage();
    }
});