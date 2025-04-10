// Payment method selection
function selectPaymentMethod(element) {
  document.querySelectorAll(".payment-method").forEach((method) => {
    method.classList.remove("selected");
  });
  element.classList.add("selected");
}

// Tab switching
document.querySelectorAll(".btn-group .btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and contents
    document.querySelectorAll(".btn-group .btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Add active class to clicked button and corresponding content
    button.classList.add("active");
    const tabId = button.dataset.tab;
    document.getElementById(tabId).classList.add("active");
  });
});
