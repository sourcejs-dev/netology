window.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form');
	const inputs = document.querySelectorAll('.form-control');
	const btnSend = document.querySelector('form button');
	let validForm = true;

	inputs.forEach((item) => {
		item.addEventListener('focus', () => {
			if (item.classList.contains('border-danger'))
				return item.classList.remove('border', 'border-danger');
		});

		item.addEventListener('focusout', () => {
			if (!item.value.length) {
				item.classList.add('border', 'border-danger');
			} else {
				validForm = true;
			}
		});
	});

	btnSend.addEventListener('click', (event) => {
		event.preventDefault();

		const data = new FormData();

		inputs.forEach((item) => {
			const { name, value } = item;

			if (!value) {
				item.classList.add('border', 'border-danger');
				validForm = false;
			}

			if (name === 'image') {
				data.append(name, item.files[0]);
			} else {
				data.append(name, value);
			}
		});

		if (!validForm)
			return notification('danger', 'Некорректно заполнена форма');

		fetch(`/api/books`, {
			method: 'POST',
			body: data,
		})
			.then(async (res) => {
				const resultData = await res.json();

				if (!res.ok)
					return notification(
						'danger',
						resultData?.message || 'Неизвсетная ошибка сервера'
					);

				notification('success', 'Книга успешно создана');
				form.reset();
			})
			.catch((e) => {
				notification(
					'danger',
					'Ошибка при созданий книги. Информация в консоли'
				);
				console.log(e.stack);
			});
	});
});
