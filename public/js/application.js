const form = document.querySelector('#form');
const container = document.querySelector('.container');

form.addEventListener('submit', async (event) => {
  // отменить дефолтное поведение формы
  event.preventDefault();

  // получение HTML узлов
  const {
    title, type, action, method,
  } = event.target;

  // формирование запроса с помощью Fetch
  const response = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      title: title.value,
      type: type.value,
    }),
  });

  const data = await response.text();

  container.insertAdjacentHTML('beforeend', data);
});

container.addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete')) {
    event.preventDefault();

    const { id } = event.target;

    console.log(`/orders/${id}`);

    const response = await fetch(`/orders/${id}`, {
      method: 'delete',
    });

    const data = await response.json();

    if (data.delete) {
      document.querySelector(`#card-${id}`).remove();
    }
  }
});
