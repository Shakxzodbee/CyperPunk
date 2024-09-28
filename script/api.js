async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');

        const countries = await response.json();

        const select = document.getElementById('countrySelect');

        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name.common;
            option.textContent = country.name.common;
            select.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}

fetchCountries();