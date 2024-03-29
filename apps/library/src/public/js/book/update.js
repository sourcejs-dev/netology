window.addEventListener('DOMContentLoaded', () => {
	const formUpdate = document.querySelector('#form-update');
	const btnSend = document.querySelector('#form-update button');
	const inputs = document.querySelectorAll('.form-control');
	const idBook = formUpdate.dataset.id;
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

	const updateBook = (event) => {
		event.preventDefault();

		const data = new FormData();

		inputs.forEach((item) => {
			const { name, value } = item;

			if (!value && name !== 'image') {
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

		fetch(`/api/books/${idBook}`, {
			method: 'PUT',
			body: data,
		})
			.then(async (res) => {
				const resultData = await res.json();

				if (!res.ok)
					return notification(
						'danger',
						resultData?.message || 'Неизвсетная ошибка сервера'
					);

				notification('success', 'Данные успешно обновлены');
			})
			.catch((e) => {
				notification(
					'danger',
					'Ошибка при обновлений данных. Информация в консоли'
				);
				console.log(e.stack);
			});
	};

	btnSend.addEventListener('click', updateBook);
});
