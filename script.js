function openApplyModal() {
    document.getElementById("applyModal").style.display = "flex";
}

function closeApplyModal() {
    document.getElementById("applyModal").style.display = "none";
}

function sendToWhatsApp() {
    let fullName = document.getElementById("fullname") ? document.getElementById("fullname").value : "";
    let phone = document.getElementById("phone") ? document.getElementById("phone").value : "";
    let parentFullName = document.getElementById("parent_fullname") ? document.getElementById("parent_fullname").value : "";
    let parentPhone = document.getElementById("parent_phone") ? document.getElementById("parent_phone").value : "";
    let education = document.getElementById("education") ? document.getElementById("education").value : "";

    // ⚠️ Номерди өзүңүздүкүнө өзгөртүңүз (башына + же 0 кошпой, 996 менен)
    let myNumber = "996500123456"; 

    let message = `Саламатсызбы! Жаңы онлайн арыз түштү:%0A%0A` +
                  `👤 Окуучу: ${fullName}%0A` +
                  `📞 Телефону: ${phone}%0A` +
                  `👨‍👩‍👧 Ата-энеси: ${parentFullName}%0A` +
                  `📞 Ата-эне телефону: ${parentPhone}%0A` +
                  `🎓 Билими: ${education}`;

    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
}