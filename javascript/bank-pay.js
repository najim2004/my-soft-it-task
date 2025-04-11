document.addEventListener("DOMContentLoaded", () => {
  // Copy functionality
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn
        .closest(".info-row")
        .querySelector(".yellow-text").textContent;
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check me-1"></i> Copied!';
        setTimeout(() => (btn.innerHTML = original), 2000);
      });
    });
  });

  // File upload handling
  const fileUpload = document.getElementById("fileUpload");
  fileUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isValidType = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "application/pdf",
    ].includes(file.type);
    const isValidSize = file.size <= 5 * 1024 * 1024;

    if (!isValidType) {
      alert("Please upload an image or PDF file");
      fileUpload.value = "";
    } else if (!isValidSize) {
      alert("File size should be less than 5MB");
      fileUpload.value = "";
    }
  });

  // Submit button handling
  document.querySelector(".submit-btn").addEventListener("click", () => {
    if (!fileUpload.files.length) {
      alert("Please upload your payment slip before submitting");
    }
    // Add your submit logic here
  });
});
