import devilChef from './images/devilChef.png';

export function loadContact() {
  const content = document.getElementById('content');


  const img = document.createElement('img');
    img.src = devilChef
    img.alt = 'devil chef';
    img.classList.add('contact-image');

  const para = document.createElement('p');
  para.textContent = "CONTACT US FOR ALL YOUR GLUTTONOUS DESIRES!";

  content.append(img, para);
}