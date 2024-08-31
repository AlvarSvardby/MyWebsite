document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('stockChart').getContext('2d');

    const stockData = {
        labels: ['Take-Two Interactive Software', 'Avanza Zero', 'likvida medel'],
        datasets: [{
            label: 'Procentuell Fördelning av Aktier',
            data: [42.2, 47.9, 9.9], // Procentuell fördelning av aktierna
            backgroundColor: [
                '#4caf50', // Grön för aktie 1
                '#2196f3', // Blå för aktie 2
                '#f44336'  // Röd för aktie 3
            ],
            borderColor: '#24292e',
            borderWidth: 5
        }]
    };

    const stockChart = new Chart(ctx, {
        type: 'pie',
        data: stockData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });
});

// Hämta knapparna och modal
const swedishButton = document.getElementById('swedish-button');
const englishButton = document.getElementById('english-button');
const modal = document.getElementById('language-modal');
const body = document.body;

// Kontrollera om användaren redan har valt ett språk
document.addEventListener('DOMContentLoaded', function() {
    const selectedLanguage = sessionStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
        // Om ett språk är valt, visa inte modalen
        modal.style.display = 'none';
        body.classList.remove('modal-active');
    } else {
        // Om inget språk är valt, visa modalen och lägg till blur-effekten
        body.classList.add('modal-active');
    }
});

// När användaren klickar på "Svenska" döljer vi modal, stannar på sidan och sparar valet
swedishButton.addEventListener('click', function() {
    modal.style.display = 'none'; // Döljer modal
    body.classList.remove('modal-active'); // Tar bort blur-effekten
    sessionStorage.setItem('selectedLanguage', 'sv'); // Spara språket i sessionStorage
});

// När användaren klickar på "English" omdirigerar vi till den engelska versionen och sparar valet
englishButton.addEventListener('click', function() {
    sessionStorage.setItem('selectedLanguage', 'en'); // Spara språket i sessionStorage
    window.location.href = 'home_en.html'; // Omdirigering till engelska sidan
});
