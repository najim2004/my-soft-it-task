document.addEventListener("DOMContentLoaded", function () {
  // Copy bKash number
  const copyNumberBtn = document.getElementById("copyNumber");
  copyNumberBtn.addEventListener("click", function () {
    const bkashNumber = document.getElementById("bkashNumber").textContent;
    navigator.clipboard
      .writeText(bkashNumber)
      .then(() => {
        const originalHTML = copyNumberBtn.innerHTML;
        copyNumberBtn.innerHTML = '<i class="fas fa-check me-1"></i> Copied!';
        setTimeout(() => {
          copyNumberBtn.innerHTML = originalHTML;
        }, 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  });

  // Verify button click handler
  document.getElementById("verifyBtn").addEventListener("click", function () {
    const transactionId = document.getElementById("transactionId").value;
    if (!transactionId) {
      alert("Please enter a transaction ID");
      return;
    }
    // Add your verification logic here
    alert("Verification in progress for transaction ID: " + transactionId);
  });

  // Copy all information
  const copyAllBtn = document.getElementById("copyAll");
  copyAllBtn.addEventListener("click", function () {
    const amount = "300.00";
    const bkashNumber = document.getElementById("bkashNumber").textContent;
    const textToCopy = `Amount: ${amount} TK\nbKash Number: ${bkashNumber}`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        const originalHTML = copyAllBtn.innerHTML;
        copyAllBtn.innerHTML = '<i class="fas fa-check me-1"></i> Copied!';
        setTimeout(() => {
          copyAllBtn.innerHTML = originalHTML;
        }, 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  });
});
