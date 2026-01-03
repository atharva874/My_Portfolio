function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
    item.querySelector(".accordion-title").addEventListener("click", () => {
        items.forEach(i => i.classList.remove("active"));
        item.classList.toggle("active");
    });
});
