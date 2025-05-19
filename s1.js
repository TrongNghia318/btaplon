let serving = 1;

function update() {
    const text = 'Phục vụ ' + serving + ' khách hàng';
    document.getElementById('count').textContent = text;

    // Cập nhật lại các lượng nguyên liệu
    const amounts = document.querySelectorAll('.amount');
    amounts.forEach(el => {
        const base = parseInt(el.dataset.base);
        const unit = el.textContent.replace(/[0-9]/g, ''); // Lấy đơn vị (g, ml)
        const newAmount = base * serving;
        el.textContent = newAmount + unit;
    });
}

function increase() {
    serving++;
    update();
}

function decrease() {
    if (serving > 1) {
        serving--;
        update();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("darkmode");
}

function showInfo() {
    var pass = document.getElementsByClassName("footerfour");
    var password = pass[0].value;
    var confirmpw = pass[1].value;

    if (password != confirmpw) {
        alert("Mật khẩu không trùng khớp");
        document.getElementsByClassName("footerfour")[1].focus();
        return false;
    }
    alert("Đăng ký thành công ℹ️");
}

