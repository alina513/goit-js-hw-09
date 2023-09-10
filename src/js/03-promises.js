
const submit = document.querySelector('button');
const form = document.querySelector("form");
console.log(form.delay.value);

submit.addEventListener('click', createPromise);

function createPromise(event) {
  event.preventDefault();
  let delay = parseInt(form.delay.value);
  let position = parseInt(form.amount.value);
  let step = parseInt(form.step.value); 
  for (let i = 1; i <= position; i += 1) {
    const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({
            position: i,
            delay: delay,
          });
        } else {
          reject({
            position: i,
            delay: delay,
          });
        }
      }, delay)
      
    });
    promise
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

createPromise();