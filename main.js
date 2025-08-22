// Рік у підвалі
document.getElementById('y').textContent = new Date().getFullYear();

// Відправка івенту Lead у Facebook Pixel після сабміту форми (якщо fbq є)
const form = document.querySelector('form[name="order"]');
if (form) {
  form.addEventListener('submit', function(){
    if (typeof fbq === 'function') {
      fbq('track', 'Lead');
    }
  });
}
