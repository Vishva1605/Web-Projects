function showForm(type) {
  document.querySelectorAll('.form-section').forEach(f => f.style.display = 'none');
  document.getElementById(`add-${type}`).style.display = 'block';
  document.getElementById('message').textContent = '';
}

document.getElementById('book-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('message').textContent = 'Book added successfully!';
  this.reset();
});

document.getElementById('user-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('message').textContent = 'User added successfully!';
  this.reset();
});

document.getElementById('transaction-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('message').textContent = 'Transaction added successfully!';
  this.reset();
});
