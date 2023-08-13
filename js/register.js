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
    let valueEmail = document.getElementById('email').value;
    let valueTen = document.getElementById('name').value;
    let valuePassword = document.getElementById('password').value;
    let valueRePassword = document.getElementById('re_password').value;
    let valueGender = document.getElementById('gender').value;

    valid = valid && kiemTraDuLieuRong(arrIdInput, arrNotiInput, khachHang, arrLabelInput) && kiemTraTen(valueTen, 'tbName') && kiemTraEmail(valueEmail, 'tbEmail') && kiemTraPassword(valuePassword, 'tbPassword') && kiemTraRePassword(valueRePassword, valuePassword, 'tbRePassword') && kiemTraGender(valueGender, 'tbGender') && kiemTraSDT('tbPhone');
    // console.log(valid);
    // console.log(typeof valid);

    if (valid) {
        alert('đăng ký thành công');
        document.getElementById('signUpForm').reset();
    } 
}

