document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.85)';
            header.style.boxShadow = 'none';
        }
    });

    // Payment Method Selection (on appointment page)
    const paymentMethods = document.querySelectorAll('.payment-method-card');
    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            paymentMethods.forEach(m => m.classList.remove('active'));
            method.classList.add('active');
        });
    });

    // Form Submission Simulation
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = appointmentForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Processing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Show Success Message
                alert(`Appointment Confirmed!\n\nDetails:\nFee: Rs. 1000\nStatus: Pending Payment\n\nWe have sent a confirmation to your WhatsApp!`);
                
                // Redirect to WhatsApp
                const phone = "923450731223"; // Pakistan code
                const name = document.getElementById('name').value;
                const message = `Hello, I updated my appointment under the name ${name}.`;
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                appointmentForm.reset();
            }, 1500);
        });
    }

    // Add to Cart Simulation
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.innerText = 'Added!';
            setTimeout(() => {
                btn.innerText = 'Add to Cart';
            }, 2000);
            alert('Service added to cart (Demo Only)');
        });
    });
});
