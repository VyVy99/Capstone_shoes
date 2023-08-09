let arrIdInput = [
    'name', 'email', 'password', 're_password', 'gender', 'phone'
];

let arrNotiInput = [
    'tbName', 'tbEmail', 'tbPassword', 'tbRePassword', 'tbGender', 'tbPhone'
];

let arrLabelInput = [
    'lbName', 'lbEmail', 'lbPassword', 'lbRePassword', 'lbGender', 'lbPhone'
];

let dangKy = () => {
    event.preventDefault();

    let khachHang = new KhachHang();
    for (let i = 0; i < arrIdInput.length; i++) {
        let value = document.getElementById(arrIdInput[i]).value;
        khachHang[arrIdInput[i]] = value;
    }
    console.log(khachHang);

    let valid = true;
    valid = valid && kiemTraDuLieuRong(arrIdInput, arrNotiInput, khachHang, arrLabelInput);

    if (valid) {
        alert('đăng ký thành công');
        document.getElementById('signUpForm').reset();
    } 
}

