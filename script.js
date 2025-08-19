document.addEventListener('DOMContentLoaded', function() {
    // Key Benefits
    const benefits = [
        {
            title: "Profile Optimization",
            description: "Learn how to create a profile that gets 5x more views from recruiters and hiring managers."
        },
        {
            title: "Networking Strategies",
            description: "Master techniques to build meaningful connections with industry leaders."
        },
        {
            title: "Content Creation",
            description: "Discover how to create posts that establish your thought leadership."
        },
        {
            title: "Job Search Tactics",
            description: "Get proven methods to find and land your dream job through LinkedIn."
        }
    ];

    const benefitsContainer = document.getElementById('benefits-container');
    
    benefits.forEach(benefit => {
        const benefitCard = document.createElement('div');
        benefitCard.className = 'benefit-card';
        benefitCard.innerHTML = `
            <h3>${benefit.title}</h3>
            <p>${benefit.description}</p>
        `;
        benefitsContainer.appendChild(benefitCard);
    });

    // Testimonials Slider
    const testimonials = [
        {
            quote: "This course completely transformed how I use LinkedIn. I went from 200 to 5,000+ connections in 3 months!",
            author: "Sarah K., Marketing Director"
        },
        {
            quote: "After applying what I learned, I got approached by 3 recruiters and landed my dream job within weeks.",
            author: "Michael T., Software Engineer"
        },
        {
            quote: "The networking strategies alone were worth 10x the price of the course. My business leads have tripled.",
            author: "Priya M., Business Consultant"
        }
    ];

    const testimonialSlider = document.getElementById('testimonial-slider');
    
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        testimonialElement.innerHTML = `
            <p>"${testimonial.quote}"</p>
            <div class="testimonial-author">— ${testimonial.author}</div>
        `;
        testimonialSlider.appendChild(testimonialElement);
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});