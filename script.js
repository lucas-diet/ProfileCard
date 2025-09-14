
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
currentDate();


function getCurrentDate(isEnglish) {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (isEnglish) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${months[month - 1]}/${year}`;
    } else {
        return `${month.toString().padStart(2, "0")}.${year}`;
    }
}


function applyLanguage() {
    const currentLang = localStorage.getItem("language") || "de"; // Standard: Deutsch
    const isEnglish = currentLang === "en";

    const translations = {
        "translate": isEnglish ? "De" : "En",

        "place": isEnglish ? "Hamburg, Germany" : "Hamburg, Deutschland",
        "currentTitle": isEnglish ? "Bioinformatics M. Sc." : "Bioinformatik M. Sc.",
        "exp": isEnglish ? "Work Experience" : "Werdegang",
        "contact": isEnglish ? "Email" : "E-Mail",

        "educ": isEnglish ? "Education" : "Bildungsweg",
        "mrDate": isEnglish ? "Jul/2015" : "07.2015",
        "mr": isEnglish ? "Secondary school diploma" : "Mittlere Reife",
        "ahDate": isEnglish ? "Jul/2016" : "07.2016",
        "ah": isEnglish ? "High School Diploma" : "Allgemeine Hochschulreife",
        "bscDate": isEnglish ? "Mar/2022" : "03.2022",
        "bsc": isEnglish ? "B. Sc. in Bioinformatics" : "B. Sc. in Bioinformatk",
        "mscDate": isEnglish ? "Mar/2025" : "03.2025",
        "msc": isEnglish ? "M. Sc in Bioinformatics" : "M. Sc. in Bioinformatik",
        
        "thesis": isEnglish ? "Theses" : "Abschlussarbeiten",
        "ba": isEnglish ? "Bachelor thesis": "Bachelorarbeit",
        "pa": isEnglish ? "Project work" : "Projektarbeit",
        "ma": isEnglish ? "Master thesis": "Masterarbeit",
        "recommendation": isEnglish ? "recommendation": "Empfehlungsschreiben",

        "workLine": isEnglish ? "Work Experience" : "Beruflicher Werdegang",
        "jobSpan1": isEnglish ? "Oct/2019 - Jul/2020" : "10.2019 - 07.2020",
        "jobTitle1": isEnglish 
            ? "Student Assistant at the Competence & Service Center <br> Friedrich-Schiller-University Jena"
            : "Studentische Hilfskraft im Kompetenz- & Servicezentrum <br> Friedrich-Schiller-Universität Jena",

        "jobSpan2": isEnglish ? `Sep/2025 - ${getCurrentDate(true)}`: `09.2025 - ${getCurrentDate(false)}`,
        "jobTitle2": isEnglish 
            ? "Application Developer at the Computing Center <br> University of Technology Hamburg"
            : "Anwendungsentwickler im Rechenzentrum <br> Technische Universität Hamburg",
    };

    // Alle Elemente mit Übersetzungen aktualisieren
    Object.keys(translations).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = translations[id]; 
        }
    });
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