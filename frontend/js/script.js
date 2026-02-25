// Toggle membership details
function toggleMembership(heading) {
  const details = heading.nextElementSibling;

  if (!details || !details.classList.contains("membership-details")) return;

  details.classList.toggle("d-none");
}

// Open membership modal
function openMembershipModal(event) {
  event.preventDefault();
  const modal = document.getElementById("membershipModal");
  modal.classList.add("show");
  modal.style.display = "block";
  modal.setAttribute("aria-modal", "true");
  modal.removeAttribute("aria-hidden");

  // Add backdrop
  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop fade show";
  backdrop.id = "modalBackdrop";
  document.body.appendChild(backdrop);
  document.body.classList.add("modal-open");
}

// Close membership modal
function closeMembershipModal() {
  const modal = document.getElementById("membershipModal");
  modal.classList.remove("show");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  modal.removeAttribute("aria-modal");

  // Remove backdrop
  const backdrop = document.getElementById("modalBackdrop");
  if (backdrop) {
    backdrop.remove();
  }
  document.body.classList.remove("modal-open");
}

// Form validation and submission
function handleFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Reset errors
  nameError.classList.add("d-none");
  emailError.classList.add("d-none");
  messageError.classList.add("d-none");

  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === "") {
    nameError.classList.remove("d-none");
    nameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.classList.remove("d-none");
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
  }

  // Validate message
  if (messageInput.value.trim() === "") {
    messageError.classList.remove("d-none");
    messageInput.classList.add("is-invalid");
    isValid = false;
  } else {
    messageInput.classList.remove("is-invalid");
    messageInput.classList.add("is-valid");
  }

  // If form is valid, show success message
  if (isValid) {
    showSuccessMessage();
    document.getElementById("contactForm").reset();
    // Remove validation classes
    nameInput.classList.remove("is-valid");
    emailInput.classList.remove("is-valid");
    messageInput.classList.remove("is-valid");
  }
}

// Show success message
function showSuccessMessage() {
  const form = document.getElementById("contactForm");
  const successDiv = document.createElement("div");
  successDiv.className = "alert alert-success alert-dismissible fade show mt-2";
  successDiv.innerHTML = `
    <strong>Success!</strong> Your inquiry has been submitted. We'll get back to you soon.
    <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
  `;
  form.parentElement.insertBefore(successDiv, form.nextSibling);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (successDiv.parentElement) {
      successDiv.remove();
    }
  }, 5000);
}

// Close modal when clicking outside
window.addEventListener("click", function (event) {
  const modal = document.getElementById("membershipModal");
  if (event.target === modal) {
    closeMembershipModal();
  }
});

// Close modal with Escape key
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const modal = document.getElementById("membershipModal");
    if (modal.classList.contains("show")) {
      closeMembershipModal();
    }
  }
});

// Expose functions to global scope
window.toggleMembership = toggleMembership;
window.openMembershipModal = openMembershipModal;
window.closeMembershipModal = closeMembershipModal;
window.handleFormSubmit = handleFormSubmit;
