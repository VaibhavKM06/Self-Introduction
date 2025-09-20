// Navigation for sections
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active from all
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        // Show the selected section
        const section = this.getAttribute('data-section');
        document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
        document.getElementById('section-' + section).style.display = 'block';
    });
});