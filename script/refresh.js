window.addEventListener('load', handlePageLoad);

let refreshCount = parseInt(sessionStorage.getItem('refreshCount') || '0');

function handlePageLoad() {
    if (window.location.hash) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }

    if (refreshCount === 0) {
        refreshCount++;
        sessionStorage.setItem('refreshCount', refreshCount.toString());
        location.reload();
    } else {
        sessionStorage.removeItem('refreshCount');
    }
}