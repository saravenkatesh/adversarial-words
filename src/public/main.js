const input = document.getElementById('input');
const submit = document.getElementById('submit');

const onSubmit = () => {
  console.log('on submit!')
};

submit.addEventListener('click', onSubmit);