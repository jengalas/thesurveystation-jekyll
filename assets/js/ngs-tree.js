document.addEventListener("DOMContentLoaded", function () {
    const tree = document.querySelector("#ngs-diagrams-tree");
    if (!tree) return;

    const detailsElements = tree.querySelectorAll("details");
    const STORAGE_KEY = "ngsTreeState";

    const openItems = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    console.log("Open items:", openItems);

    detailsElements.forEach(el => {
        const id = el.dataset.id;
        if (!id) return;

        if (openItems.includes(id)) {
            el.open = true;
        }

        el.addEventListener("toggle", () => {
            let current = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

            if (el.open) {
                if (!current.includes(id)) current.push(id);
            } else {
                current = current.filter(i => i !== id);
            }

            localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
        });
    });
});