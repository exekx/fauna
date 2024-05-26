const pages = [
    { url: 'about.html', title: 'Про проект' },
    { url: 'contacts.html', title: 'Контакти' },
    { url: 'epochs.html', title: 'Епохи' },
    { url: 'gallery.html', title: 'Галерея' },
    { url: 'index.html', title: 'Головна' },
    { url: 'animals/mammoth.html', title: 'Мамут' },
    { url: 'animals/saber-tooth.html', title: 'Шаблезубий тигр' },
    { url: 'animals/silurian_fish.html', title: 'Біркенія' },
    { url: 'animals/stegosaurus.html', title: 'Стегозавр' },
    { url: 'animals/trilobites.html', title: 'Трилобіт' },
    { url: 'epochs/paleozoic', title: 'Палеозой' },
    { url: 'epochs/mesozoic.html', title: 'Мезозой' },
    { url: 'epochs/cainozoic.html', title: 'Кайнозой' }
];

function showSearchOptions() {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase();
    const searchOptions = document.getElementById('search-options');

    searchOptions.innerHTML = '';

    if (filter === '') {
        searchOptions.style.display = 'none';
        return;
    }

    const filteredPages = pages.filter(page => page.title.toLowerCase().includes(filter));

    filteredPages.forEach(page => {
        const link = document.createElement('a');
        link.href = page.url;
        link.textContent = page.title;
        searchOptions.appendChild(link);
    });

    if (filteredPages.length > 0) {
        searchOptions.style.display = 'block';
    } else {
        searchOptions.style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    const searchInput = document.getElementById('search-input');
    const searchOptions = document.getElementById('search-options');

    if (!searchInput.contains(event.target) && !searchOptions.contains(event.target)) {
        searchOptions.style.display = 'none';
    }
});
