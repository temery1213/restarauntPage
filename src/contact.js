import devilChef from './images/devilChef.png';

export function loadContact() {
  const content = document.getElementById('content');
  const header = document.createElement('h1');
  header.innerText = 'Contact';
  content.append(header);

  const img = document.createElement('img');
    img.src = devilChef
    img.alt = 'devil chef';

  const para = document.createElement('p');
  para.textContent = "CONTACT US FOR ALL YOUR GLUTTONOUS DESIRES!";

  content.append(header, img, para);
}