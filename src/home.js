import foodImg from './images/gluttony.png';

export function loadHome() {
  const content = document.getElementById('content');

  const header = document.createElement('h1');
  header.innerText = 'The Hellish Gourmand';

  const img = document.createElement('img');
  img.src = foodImg;
  img.alt = 'Restaurant image';

  const para = document.createElement('p');
  para.textContent = "Consume until nothing is left.";

  content.append(header, img, para);
}