// console.log("Hello from JavaScript!");

// const button = document.querySelector('#button');
// console.log(button);

// const abba = ['Bjorn', 'Benny', 'Anni-frid', 'Agnetha'];

// const abbaMember = abba.map((member) => {
//   return `<li>${member}</li>`;
// });

// const ulContent = document.getElementById('abba-list');
// ulContent.insertAdjacentHTML('beforeend', abbaMember.join(''));


// const elements = document.querySelectorAll('li');
// elements.forEach((element) => {
//   // element.innerText = `${element.innerText} 🎵`;
//   element.innerText += ' 🎵';
// });

// ulContent.style.listStyleType = 'upper-roman';


// const instrument = document.querySelector('#agnetha');
// console.log(instrument.dataset.city);

// const abba = document.querySelectorAll('.abba');

// abba.forEach((member) => {
//   console.log(member.innerHTML);
//   console.log(member.dataset.instrument);
//   member.innerHTML += `: <strong>${member.dataset.instrument}</strong>`;
// });

// const romain = document.getElementById('romain');
// romain.addEventListener("click", (event) => {
//   // console.log(event);
//   // console.log(event.currentTarget);
//   event.currentTarget.classList.toggle('img-circle');
// });

// const imgs = document.querySelectorAll('img');

// imgs.forEach((img) => {
//   img.addEventListener("click", (event) => {
//     event.currentTarget.classList.toggle('img-circle');
//   })
// });

const selectAll = document.getElementById('select-all-checkbox');

selectAll.addEventListener("click", (event) => {
  const checkboxes = document.querySelectorAll('.form-check-input');
  checkboxes.forEach((checkbox) => {
    // console.log(checkbox.checked);
    checkbox.checked ? checkbox.checked = false : checkbox.checked = true;
    // checkbox.checked = !checkbox.checked;
    // checkbox.checked = event.currentTarget.checked;
  });
});
