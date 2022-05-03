document.querySelectorAll('.bttnCart-04').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('loading')) {
        button.classList.add('loading');
        setTimeout(() => button.classList.remove('loading'), 3700);
    }
    e.preventDefault();
}));
