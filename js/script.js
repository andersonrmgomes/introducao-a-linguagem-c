// Simple interactivity for exercises: reveal answers and simple quiz checking
document.addEventListener('DOMContentLoaded', function () {
	// Toggle answer visibility for elements with data-toggle-answer
	document.querySelectorAll('[data-toggle-answer]').forEach(function(btn){
		btn.addEventListener('click', function(){
			var id = btn.getAttribute('data-toggle-answer');
			var ans = document.getElementById(id);
			if(!ans) return;
			if(ans.style.display === 'none' || ans.style.display === '') {
				ans.style.display = 'block';
				btn.textContent = 'Ocultar resposta';
			} else {
				ans.style.display = 'none';
				btn.textContent = 'Mostrar resposta';
			}
		});
	});

	// Simple multiple choice checkers
	document.querySelectorAll('[data-quiz-id]').forEach(function(form){
		form.addEventListener('submit', function(e){
			e.preventDefault();
			var id = form.getAttribute('data-quiz-id');
			var correct = form.getAttribute('data-quiz-answer');
			var choice = form.querySelector('input[type=radio]:checked');
			var out = document.getElementById(id + '-result');
			if(!choice) {
				out.textContent = 'Selecione uma opção.';
				out.style.color = '#a33';
				return;
			}
			if(choice.value === correct) {
				out.textContent = 'Correto!';
				out.style.color = '#0a0';
			} else {
				out.textContent = 'Incorreto. Reveja a explicação.';
				out.style.color = '#a33';
			}
		});
	});
});
