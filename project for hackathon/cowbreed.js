 // Data
const cowBreeds = [
    {
        name: 'Gir',
        origin: 'Gujarat',
        characteristics: 'Known for high milk yield, disease resistance',
        image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1280',
    },
    {
        name: 'Sahiwal',
        origin: 'Punjab',
        characteristics: 'Heat tolerant, good milk producer',
        image: 'https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1280',
    },
    {
        name: 'Red Sindhi',
        origin: 'Sindh',
        characteristics: 'Adaptable to harsh climates, good milk quality',
        image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&q=80&w=1280',
    }
];

const benefits = [
    { 
        icon: 'droplets',
        title: 'A2 Milk',
        description: 'A2 cow milk, containing only the A2 beta-casein protein, is touted for potential digestive benefits and is a good source of nutrients like calcium, protein, and omega-3 fatty acids, supporting bone health, immunity, and overall well-being. '
        
    },
    {
        icon: 'leaf',
        title: 'Sustainable Farming',
        description: 'Desi cows are crucial for sustainable farming due to their natural grazing habits, which enhance soil health, and their manure, which serves as a natural fertilizer, promoting a healthy and balanced ecosystem. '
    },
    {
        icon: 'heart',
        title: 'Cultural Heritage',
        description: 'Cows are closely associated with several deities in Hinduism, the predominant religion in India. They are linked to Lord Krishna, who is often depicted as a cowherd, and Goddess Kamadhenu, the divine cow believed to fulfill all desires.'
    },
    {
        icon: 'shield',
        title: 'Economic Growth',
        description: 'Cows are the primary source of milk, a staple in the Indian diet. In GVAK, our cows contribute to the local dairy industry, providing fresh and nutritious milk. This source of livelihood empowers the local dairy farmers, many of whom are small-scale entrepreneurs'
    }
];

// Populate Benefits Section
function populateBenefits() {
    const benefitsGrid = document.getElementById('benefitsGrid');
    
    benefits.forEach(benefit => {
        const benefitCard = document.createElement('div');
        benefitCard.className = 'benefit-card';
        
        benefitCard.innerHTML = `
            <i data-lucide="${benefit.icon}" class="benefit-icon"></i>
            <h3>${benefit.title}</h3>
            <p>${benefit.description}</p>
        `;
        
        benefitsGrid.appendChild(benefitCard);
    });
}

// Populate Breeds Section
function populateBreeds() {
    const breedsGrid = document.getElementById('breedsGrid');
    
    cowBreeds.forEach(breed => {
        const breedCard = document.createElement('div');
        breedCard.className = 'breed-card';
        
        breedCard.innerHTML = `
            <img src="${breed.image}" alt="${breed.name}" class="breed-image">
            <div class="breed-info">
                <h3>${breed.name}</h3>
                <p>Origin: ${breed.origin}</p>
                <p>${breed.characteristics}</p>
            </div>
        `;
        
        breedsGrid.appendChild(breedCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateBenefits();
    populateBreeds();
    
    // Re-run Lucide icons after dynamic content is added
    lucide.createIcons();
});