document.addEventListener("DOMContentLoaded", function () {
  // Helper function for clipboard operations
  const handleCopy = (text, button) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check me-1"></i> Copied!';
        setTimeout(() => (button.innerHTML = originalHTML), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  // Copy bKash number
  document.getElementById("copyNumber").addEventListener("click", function () {
    const bkashNumber = document.getElementById("bkashNumber").textContent;
    handleCopy(bkashNumber, this);
  });

  // Verify transaction
  document.getElementById("verifyBtn").addEventListener("click", function () {
    const transactionId = document.getElementById("transactionId").value;
    if (!transactionId) {
      alert("Please enter a transaction ID");
      return;
    }
    alert("Verification in progress for transaction ID: " + transactionId);
  });

  // Copy all information
  document.getElementById("copyAll").addEventListener("click", function () {
    const bkashNumber = document.getElementById("bkashNumber").textContent;
    const textToCopy = `Amount: 300.00 TK\nbKash Number: ${bkashNumber}`;
    handleCopy(textToCopy, this);
  });
});
