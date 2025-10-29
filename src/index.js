import './style.css';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

function clearContent() {
  document.getElementById('content').innerHTML = '';
}

function NavEvents() {
  document.getElementById('homeBtn').addEventListener('click', () => {
    clearContent();
    loadHome();
  });

  document.getElementById('menuBtn').addEventListener('click', () => {
    clearContent();
    loadMenu();
  });

  document.getElementById('contactBtn').addEventListener('click', () => {
    clearContent();
    loadContact();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadHome();
  NavEvents();
});
