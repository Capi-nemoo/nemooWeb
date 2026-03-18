(function() {
    function formatClock() {
        return new Date().toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    function updateClock() {
        document.querySelectorAll("[data-site-clock]").forEach((node) => {
            const label = node.dataset.label || "time";
            node.textContent = label + ": " + formatClock();
        });
    }

    function syncToggleState(button, panel, isOpen) {
        button.classList.toggle("open", isOpen);
        panel.classList.toggle("open", isOpen);
        button.setAttribute("aria-expanded", String(isOpen));

        const icon = button.querySelector("[data-toggle-icon]");
        if (icon) {
            icon.textContent = isOpen
                ? (button.dataset.iconOpen || "[-]")
                : (button.dataset.iconClosed || "[+]");
        }
    }

    function initToggles() {
        document.querySelectorAll("[data-toggle-next]").forEach((button) => {
            const panel = button.nextElementSibling;
            if (!panel) {
                return;
            }

            const startsOpen = button.classList.contains("open") || panel.classList.contains("open");
            syncToggleState(button, panel, startsOpen);

            button.addEventListener("click", () => {
                const isOpen = !button.classList.contains("open");
                syncToggleState(button, panel, isOpen);
            });
        });
    }

    function setStatusMessage(target, message) {
        if (!target) {
            return;
        }

        target.textContent = message;
        target.classList.add("is-visible");
        clearTimeout(target._statusTimer);
        target._statusTimer = setTimeout(() => {
            target.classList.remove("is-visible");
        }, 2200);
    }

    function initCopyActions() {
        document.querySelectorAll("[data-copy]").forEach((node) => {
            node.addEventListener("click", async () => {
                const scope = node.closest("[data-copy-scope]") || document;
                const statusNode = scope.querySelector("[data-status-message]");
                const message = node.dataset.copyMessage || "Copied to clipboard.";

                try {
                    await navigator.clipboard.writeText(node.dataset.copy || node.textContent || "");
                    node.classList.add("copied");
                    setTimeout(() => node.classList.remove("copied"), 1200);
                    setStatusMessage(statusNode, message);
                } catch (error) {
                    setStatusMessage(statusNode, "Clipboard access failed.");
                }
            });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        updateClock();
        window.setInterval(updateClock, 60000);
        initToggles();
        initCopyActions();
    });

    window.SiteShell = {
        setStatusMessage
    };
})();
