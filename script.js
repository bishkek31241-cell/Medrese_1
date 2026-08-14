function openApplyModal() {
    document.getElementById('applyModal').style.display = 'flex';
}

function closeApplyModal() {
    document.getElementById('applyModal').style.display = 'none';
    document.getElementById('successMsg').classList.add('hidden');
    document.getElementById('applyForm').reset();
}

function submitForm(event) {
    event.preventDefault();
    
    // Форма жиберилгенде билдирүү чыгаруу
    document.getElementById('applyForm').classList.add('hidden');
    document.getElementById('successMsg').classList.remove('hidden');
}

// Модалдык терезени ачуу
function openApplyModal() {
    document.getElementById('applyModal').style.display = 'flex';
}

// Модалдык терезени жабуу
function closeApplyModal() {
    const modal = document.getElementById('applyModal');
    const form = document.getElementById('applyForm');
    const successMsg = document.getElementById('successMsg');

    modal.style.display = 'none';
    
    // Форманы калыбына келтирүү (тазалоо)
    form.reset();
    form.classList.remove('hidden');
    successMsg.classList.add('hidden');
}

// Арызды жөнөтүү
function submitForm(event) {
    event.preventDefault(); // Баракчанын кайра жүктөлүшүн токтотот

    // Форманы жашырып, ийгилик билдирүүсүн көрсөтүү
    document.getElementById('applyForm').classList.add('hidden');
    document.getElementById('successMsg').classList.remove('hidden');

    // 2.5 секунддан кийин модалдык терезени автоматтык түрдө жабуу
    setTimeout(() => {
        closeApplyModal();
    }, 2500);
}

// Модалдык терезенин сырткы караңгы жерин басканда жабуу
window.addEventListener('click', function(event) {
    const modal = document.getElementById('applyModal');
    if (event.target === modal) {
        closeApplyModal();
    }
});