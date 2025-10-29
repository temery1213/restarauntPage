import foodMountain from './images/mountain.jpg';

export function loadMenu() {
  const content = document.getElementById('content');
  const header = document.createElement('h1');
  header.innerText = 'Menu';

  const img = document.createElement('img');
    img.src = foodMountain;
    img.alt = 'Food Mountain';
    img.classList.add('menu-image');

 

  const list = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    li1.textContent = 'BURGER';
    li2.textContent = 'GREASE';
    li3.textContent = 'DECADENCE';
    
    list.append(li1, li2, li3);

    content.append(header, img, list);
}