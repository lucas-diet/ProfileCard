
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




function applyLanguage() {
    const currentLang = localStorage.getItem("language") || "de"; // Standard: Deutsch
    const isEnglish = currentLang === "en";

    const translations = {
        "place": isEnglish ? "Jena, Germany" : "Jena, Deutschland",
        "currentTitle": isEnglish ? "Bioinformatics student" : "Student der Bioinformatik",
        "exp": isEnglish ? "Work Experience" : "Berufe",
        "contact": isEnglish ? "E-Mail" : "E-Mail",
        "educ": isEnglish ? "Education" : "Bildungsweg",
        "mrDate": isEnglish ? "Jul/2015" : "07.2015",
        "mr": isEnglish ? "Secondary school diploma" : "Mittlere Reife",
        "ahDate": isEnglish ? "Jul/2016" : "07.2016",
        "ah": isEnglish ? "High School Diploma" : "Allgemeine Hochschulreife",
        "bscDate": isEnglish ? "Mar/2022" : "03.2022",
        "bsc": isEnglish ? "B. Sc. in Bioinformatics" : "B. Sc. in Bioinformatk",
        "mscDate": isEnglish ? "Mar/2025" : "03.2025",
        "msc": isEnglish ? "M. Sc in Bioinformatics" : "M. Sc. in Bioinformatik",
        "workLine": isEnglish ? "Work Experience" : "Beruflicher Werdegang",
        "jobSpan1": isEnglish ? "Oct/2019 - Jul/2020" : "10.2019 - 07.2020",
        "jobTitle1": isEnglish 
            ? "Student Assistant at the Competence & Service Center <br> Friedrich-Schiller-University Jena"
            : "Studentische Hilfskraft im Kompetenz- & Servicezentrum <br> Friedrich-Schiller-Universität Jena"
    };

    // Alle Elemente mit Übersetzungen aktualisieren
    Object.keys(translations).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = translations[id]; 
        }
    });

    // Flaggen-Bild anpassen
    const translateButton = document.getElementById("translate");
    if (translateButton) {
        translateButton.style.backgroundImage = isEnglish 
            ? "url('https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg')" 
            : "url('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg')";
    }
}

function changeLanguage() {
    const currentLang = localStorage.getItem("language") || "de";
    const newLang = currentLang === "de" ? "en" : "de";
    localStorage.setItem("language", newLang);
    applyLanguage();
}

// Sprache direkt beim Laden anwenden
document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(); 
    document.getElementById("translate").addEventListener("click", changeLanguage);
});