// let currentRevir = 0;
// const reviry = document.querySelectorAll('.revir');

// function changeRevir(direction) {
//     // Skryjeme aktuální revír
//     reviry[currentRevir].classList.remove('active');

//     // Aktualizujeme index aktuálního revíru
//     currentRevir = (currentRevir + direction + reviry.length) % reviry.length;

//     // Zobrazíme nový revír
//     reviry[currentRevir].classList.add('active');
// }

// // Inicializace: skryjeme všechny revíry kromě prvního
// for (let i = 1; i < reviry.length; i++) {
//     reviry[i].classList.remove('active');
// }
// reviry[0].classList.add('active');







let currentRevir = 0;
const reviry = document.querySelectorAll('.revir');

function changeRevir(direction) {
    // Skryjeme aktuální revír
    reviry[currentRevir].classList.remove('active');

    // Aktualizujeme index aktuálního revíru
    currentRevir = (currentRevir + direction + reviry.length) % reviry.length;

    // Zobrazíme nový revír
    reviry[currentRevir].classList.add('active');
}

// Inicializace: skryjeme všechny revíry kromě prvního
for (let i = 1; i < reviry.length; i++) {
    reviry[i].classList.remove('active');
}

// Zobrazíme první revír okamžitě po načtení stránky
reviry[0].classList.add('active');





var recenze = document.getElementsByClassName('recenze'); // Pole všech recenzí
var recenzeContent = document.getElementById('recenzeContent'); // Kontejner pro recenze
var currentRecenze = 0; // Index aktuální recenze


// Zjistíme, která recenze je nejdelší
var maxWidth = 0;
for (var i = 0; i < recenze.length; i++) {
    if (recenze[i].offsetWidth > maxWidth) {
        maxWidth = recenze[i].offsetWidth;
    }
}

// Nastavíme šířku kontejneru na šířku nejdelší recenze
recenzeContent.style.width = maxWidth + 'px';

function changeRecenze(n) {
    recenze[currentRecenze].classList.remove('active');
    currentRecenze += n;
    if (currentRecenze < 0) currentRecenze = recenze.length - 1;
    if (currentRecenze >= recenze.length) currentRecenze = 0;
    recenze[currentRecenze].classList.add('active');
}

// Automatické posouvání recenzí každé 3 sekundy
setInterval(function() {
    changeRecenze(1);
}, 5000);

// Inicializace první recenze jako aktivní
recenze[currentRecenze].classList.add('active');