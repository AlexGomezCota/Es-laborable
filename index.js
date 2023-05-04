const form = document.querySelector('form');
		const result = document.querySelector('.resultado');

		form.addEventListener('submit', (event) => {
			event.preventDefault();
			const inputDate = document.getElementById('date').value;
			const date = new Date(inputDate);
			const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
			const dayOfWeek = weekdays[date.getDay()];

			if (dayOfWeek === 'Sábado' || dayOfWeek === 'Domingo') {
				result.textContent = `No es día laborable, es ${dayOfWeek}.`;
			} else {
				result.textContent = `Es día laborable, es ${dayOfWeek}.`;
			}
		});