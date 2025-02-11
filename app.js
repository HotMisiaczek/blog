document.addEventListener("DOMContentLoaded", function () {
    const newsList = document.getElementById("news-list");

    // Sprawdzamy, czy mamy zapisane newsy w localStorage
    const newsData = JSON.parse(localStorage.getItem("news")) || [];

    // Funkcja renderująca newsy na stronie
    function renderNews() {
        newsList.innerHTML = '';
        newsData.forEach((news) => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");

            const newsTitle = document.createElement("h3");
            newsTitle.textContent = news.title;

            const newsContent = document.createElement("p");
            newsContent.textContent = news.content;

            newsItem.appendChild(newsTitle);
            newsItem.appendChild(newsContent);
            newsList.appendChild(newsItem);
        });
    }

    renderNews();
});
