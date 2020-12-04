const parent = document.getElementById('root');
const inverses = document.querySelectorAll('.invert');

window.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		parent.classList.toggle('dark-mode');
		inverses.forEach((el) => el.classList.toggle('inverted'));
	}
});
