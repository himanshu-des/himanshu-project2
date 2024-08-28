// JavaScript code for UI interaction
document.getElementById('searchButton').addEventListener('click', () => {
    const brand = document.getElementById('brandInput').value;
    const minPrice = parseInt(document.getElementById('minPriceInput').value, 10);
    const maxPrice = parseInt(document.getElementById('maxPriceInput').value, 10);

    filterMobiles(brand, minPrice, maxPrice).then(filteredMobiles => {
        const resultsList = document.getElementById('results');
        resultsList.innerHTML = ''; // Clear previous results

        if (filteredMobiles.length === 0) {
            resultsList.innerHTML = '<li>No mobiles found</li>';
        } else {
            filteredMobiles.forEach(mobile => {
                const listItem = document.createElement('li');
                listItem.textContent = `${mobile.brand} - ${mobile.model} -${mobile.price}`;
                resultsList.appendChild(listItem);
            });
        }
    });
});

// Mock mobile phone data
const mobiles = [
    { brand: 'Apple', model: 'iPhone 13', price: 80000 },
    { brand: 'Samsung', model: 'Galaxy S21', price: 60000 },
    { brand: 'Nokia', model: 'Nokia G20', price: 15000 },
    { brand: 'Vivo', model: 'Vivo V21', price: 18000 },
    { brand: 'Vivo', model: 'Vivo Y12', price: 14000 },
    { brand: 'Samsung', model: 'Galaxy M32', price: 16000 },
    { brand: 'Apple', model: 'iPhone SE', price: 40000 },
    // Add more data as needed
];

// Simulate an API call to get the mobiles data
function getMobiles() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mobiles);
        }, 1000);
    });
}

// Function to filter mobiles based on brand and price range
function filterMobiles(brand, minPrice, maxPrice) {
    return getMobiles().then((mobiles) => {
        return mobiles.filter(mobile => 
            mobile.brand.toLowerCase() === brand.toLowerCase() &&
            mobile.price >= minPrice &&
            mobile.price <= maxPrice
        );
    });
}

// Example usage
filterMobiles('Vivo', 10000, 15000).then(filteredMobiles => {
    console.log('Filtered Mobiles:', filteredMobiles);
    // You can then display these results in your UI
});
