document.addEventListener("DOMContentLoaded", function () {
    const newsForm = document.getElementById("news-form");
    const newsTitleInput = document.getElementById("news-title");
    const newsContentInput = document.getElementById("news-content");

    newsForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Zatrzymuje domyślną akcję formularza

        const newNews = {
            title: newsTitleInput.value,
            content: newsContentInput.value
        };

        // Pobieramy istniejące newsy z localStorage
        const existingNews = JSON.parse(localStorage.getItem("news")) || [];

        // Dodajemy nowy news do listy
        existingNews.push(newNews);

        // Zapisujemy zaktualizowaną listę do localStorage
        localStorage.setItem("news", JSON.stringify(existingNews));

        // Czyścimy formularz
        newsTitleInput.value = '';
        newsContentInput.value = '';

        // Przenosimy użytkownika z powrotem do strony z newsami
        window.location.href = "index.html";
    });
});
