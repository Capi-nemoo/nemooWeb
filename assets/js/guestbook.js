(function() {
    const STORAGE_KEY = "nemoo_guestbook_entries_v2";
    const SAMPLE_ENTRIES = [
        {
            id: "sample-1",
            name: "maya",
            website: "https://example.com",
            message: "This feels personal in the best way. Keep the site weird and hand-made.",
            createdAt: "2026-03-08T17:15:00.000Z"
        },
        {
            id: "sample-2",
            name: "jun",
            website: "",
            message: "Love the static-first direction. More sites should feel like places again.",
            createdAt: "2026-03-06T22:42:00.000Z"
        },
        {
            id: "sample-3",
            name: "lina",
            website: "https://smallweb.invalid",
            message: "Signed from another corner of the small web. The gallery page rules.",
            createdAt: "2026-03-04T09:20:00.000Z"
        }
    ];

    function readEntries() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) {
                return [...SAMPLE_ENTRIES];
            }

            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [...SAMPLE_ENTRIES];
        } catch (error) {
            return [...SAMPLE_ENTRIES];
        }
    }

    function saveEntries(entries) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    }

    function formatDate(value) {
        return new Date(value).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    function createEntryNode(entry) {
        const article = document.createElement("article");
        article.className = "entry-card";

        const meta = document.createElement("div");
        meta.className = "entry-meta";

        const nameWrap = document.createElement("div");
        nameWrap.className = "entry-name";
        nameWrap.textContent = entry.name;

        const dateWrap = document.createElement("div");
        dateWrap.className = "entry-date";
        dateWrap.textContent = formatDate(entry.createdAt);

        meta.append(nameWrap, dateWrap);
        article.appendChild(meta);

        if (entry.website) {
            const site = document.createElement("a");
            site.className = "entry-site";
            site.href = entry.website;
            site.target = "_blank";
            site.rel = "noreferrer";
            site.textContent = entry.website.replace(/^https?:\/\//, "");
            article.appendChild(site);
        }

        const body = document.createElement("p");
        body.className = "entry-body";
        body.textContent = entry.message;
        article.appendChild(body);

        return article;
    }

    function renderEntries(entries) {
        const list = document.getElementById("guestbook-entries");
        const count = document.getElementById("entry-count");
        if (!list || !count) {
            return;
        }

        list.innerHTML = "";
        count.textContent = String(entries.length);

        if (!entries.length) {
            const empty = document.createElement("p");
            empty.className = "entry-empty";
            empty.textContent = "No entries yet. Be the first one to leave a note.";
            list.appendChild(empty);
            return;
        }

        entries.forEach((entry) => {
            list.appendChild(createEntryNode(entry));
        });
    }

    function resetToSamples() {
        saveEntries([...SAMPLE_ENTRIES]);
        renderEntries(readEntries());
        window.SiteShell?.setStatusMessage(
            document.querySelector("[data-status-message]"),
            "Sample entries restored."
        );
    }

    function clearGuestbook() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        renderEntries([]);
        window.SiteShell?.setStatusMessage(
            document.querySelector("[data-status-message]"),
            "Local guestbook entries cleared."
        );
    }

    function handleSubmit(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const name = form.elements.name.value.trim();
        const website = form.elements.website.value.trim();
        const message = form.elements.message.value.trim();

        if (!name || !message) {
            return;
        }

        const entries = readEntries();
        const nextEntry = {
            id: String(Date.now()),
            name,
            website,
            message,
            createdAt: new Date().toISOString()
        };

        const updatedEntries = [nextEntry, ...entries];
        saveEntries(updatedEntries);
        renderEntries(updatedEntries);
        form.reset();

        window.SiteShell?.setStatusMessage(
            document.querySelector("[data-status-message]"),
            "Entry saved in this browser."
        );
    }

    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("guestbook-form");
        const resetButton = document.getElementById("guestbook-reset");
        const clearButton = document.getElementById("guestbook-clear");

        renderEntries(readEntries());

        if (form) {
            form.addEventListener("submit", handleSubmit);
        }

        if (resetButton) {
            resetButton.addEventListener("click", resetToSamples);
        }

        if (clearButton) {
            clearButton.addEventListener("click", () => {
                if (window.confirm("Clear all local guestbook entries stored in this browser?")) {
                    clearGuestbook();
                }
            });
        }
    });

    window.clearGuestbook = clearGuestbook;
    window.resetToSamples = resetToSamples;
})();
