document.addEventListener('DOMContentLoaded', function () {
  // Mobile sidebar toggle
  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('show');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function () {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    });
  }

  // Quiz checker
  document.querySelectorAll('[data-quiz-id]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const id = form.getAttribute('data-quiz-id');
      const correct = form.getAttribute('data-quiz-answer');
      const choice = form.querySelector('input[type=radio]:checked');
      const out = document.getElementById(id + '-result');
      if (!out) return;
      if (!choice) {
        out.textContent = '⚠ Selecione uma opção.';
        out.className = 'result-warn';
        return;
      }
      if (choice.value === correct) {
        out.textContent = '✓ Correto!';
        out.className = 'result-ok';
      } else {
        out.textContent = '✗ Incorreto — reveja a explicação.';
        out.className = 'result-err';
      }
    });
  });

  // Toggle answer
  document.querySelectorAll('[data-toggle-answer]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const id = btn.getAttribute('data-toggle-answer');
      const el = document.getElementById(id);
      if (!el) return;
      const hidden = el.style.display === 'none' || el.style.display === '';
      el.style.display = hidden ? 'block' : 'none';
      btn.textContent = hidden ? 'Ocultar resposta' : 'Mostrar resposta';
    });
  });
});
