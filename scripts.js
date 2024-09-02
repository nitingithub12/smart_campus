document.addEventListener('DOMContentLoaded', function() {
    // Initialize map here (example placeholder)
    function initMap() {
        const mapElement = document.getElementById('map');
        // Example initialization logic for map (use a real map API like Google Maps or Leaflet)
        // mapElement.innerHTML = 'Map goes here';
    }

    initMap();

    document.querySelector('.ar-mode-btn').addEventListener('click', function() {
        // Switch to AR mode
        alert('AR Mode activated!');
    });

    document.getElementById('class-schedule').addEventListener('click', function() {
        // Redirect or show class schedule
        alert('Navigating to Class Schedule...');
    });

    document.getElementById('sos-button').addEventListener('click', function() {
        // SOS button functionality
        alert('SOS triggered!');
    });

    document.getElementById('help-center').addEventListener('click', function() {
        // Redirect or show help center
        alert('Navigating to Help Center...');
    });
});
