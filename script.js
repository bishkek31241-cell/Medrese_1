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