function toggleMembership(heading) {
  const details = heading.nextElementSibling;

  if (!details || !details.classList.contains("membership-details")) return;

  details.classList.toggle("d-none");
}

window.toggleMembership = toggleMembership;
