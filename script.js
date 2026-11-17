const locations = [
  { id: 'cc', name: 'Campus Center' },
  { id: 'unity', name: 'Unity' },
  { id: 'innovation', name: 'Innovation' },
  { id: 'fuller', name: 'Fuller' },
  { id: 'salisbury', name: 'Salisbury' },
];

const progressKey = 'lost-mysteries-progress-v1';
const notesKey = 'lost-mysteries-notes-v1';
const list = document.querySelector('#location-list');
const notes = document.querySelector('#clue-notes');
const status = document.querySelector('#save-status');

function storedProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(progressKey) || '[]');
    return Array.isArray(value) ? value.filter(id => locations.some(location => location.id === id)) : [];
  } catch {
    return [];
  }
}

function updateProgress() {
  const checked = [...list.querySelectorAll('input:checked')].map(input => input.value);
  document.querySelector('#progress-count').textContent = `${checked.length} / ${locations.length}`;
  document.querySelector('#progress-fill').style.width = `${checked.length / locations.length * 100}%`;
  try {
    localStorage.setItem(progressKey, JSON.stringify(checked));
  } catch {
    status.textContent = 'Browser storage unavailable';
  }
}

const completed = storedProgress();
locations.forEach((location, index) => {
  const row = document.createElement('article');
  row.className = 'location';
  row.innerHTML = `<span class="location-index">0${index + 1}</span><h3>${location.name}</h3><span class="location-subtitle">Puzzle location</span><label class="location-check"><input type="checkbox" value="${location.id}" ${completed.includes(location.id) ? 'checked' : ''}><span>Explored</span></label>`;
  list.append(row);
});
list.addEventListener('change', updateProgress);
updateProgress();

try {
  notes.value = localStorage.getItem(notesKey) || '';
} catch {
  status.textContent = 'Browser storage unavailable';
}
notes.addEventListener('input', () => {
  try {
    localStorage.setItem(notesKey, notes.value);
    status.textContent = 'Saved on this device';
  } catch {
    status.textContent = 'Could not save notes';
  }
});
document.querySelector('#clear-notes').addEventListener('click', () => {
  notes.value = '';
  notes.dispatchEvent(new Event('input'));
  notes.focus();
});
