function greetUser(name) {
  return `Welcome back, ${name}!`;
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  const greetBtn = document.getElementById('greetBtn');
  const nameInput = document.getElementById('nameInput');
  const greeting = document.getElementById('greeting');

  greetBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    if (name) {
      greeting.textContent = greetUser(name);
    } else {
      greeting.textContent = 'Please enter your name.';
    }
  });
});

