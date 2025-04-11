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

// Add tab switching functionality for all tabs
document.querySelectorAll("[data-tab]").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const tabId = button.getAttribute("data-tab");

    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Show selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.classList.add("active");
    }

    // Handle navigation tabs active state
    if (button.classList.contains("nav-tab")) {
      document.querySelectorAll(".nav-tab").forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    }

    // Handle payment tabs active state
    if (button.closest(".btn-group")) {
      document.querySelectorAll(".btn-group .btn").forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    }
  });
});

function openPaymentModal(element) {
  if (element.dataset.paymentType === 'bkash') {
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    paymentModal.show();
  }
}
