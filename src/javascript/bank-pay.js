document.addEventListener('DOMContentLoaded', () => {
    // Copy functionality for all copy buttons
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.closest('.info-row').querySelector('.yellow-text').textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check me-1"></i> Copied!';
                setTimeout(() => {
                    button.innerHTML = originalText;
                }, 2000);
            });
        });
    });

    // File upload handling
    const fileUpload = document.getElementById('fileUpload');
    fileUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
            if (!validTypes.includes(file.type)) {
                alert('Please upload an image or PDF file');
                fileUpload.value = '';
                return;
            }
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size should be less than 5MB');
                fileUpload.value = '';
                return;
            }
        }
    });

    // Submit button handling
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('click', () => {
        if (!fileUpload.files.length) {
            alert('Please upload your payment slip before submitting');
            return;
        }
        // Add your submit logic here
    });
});
