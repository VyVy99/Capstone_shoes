let kiemTraDuLieuRong = (arrIdInput, arrNotiInput, customer, arrLabelInput) => {
    let valid = true;
    for (let z = 0; z < arrIdInput.length; z++) {
        // check xem có dữ liệu trong thuộc tính hay không
        if (customer[arrIdInput[z]] == '') {
            valid = valid && false;
            document.getElementById(arrNotiInput[z]).innerHTML = 'Vui lòng nhập dữ liệu';
            document.getElementById(arrLabelInput[z]).style.color = 'red';
            document.getElementById(arrIdInput[z]).style.borderBottomColor = 'red';
        } else {
            document.getElementById(arrNotiInput[z]).innerHTML = '';
            document.getElementById(arrLabelInput[z]).style.color = '#222';
            document.getElementById(arrIdInput[z]).style.borderBottomColor = '#999';
            valid = valid && true;
        }
    }
    return valid;
}

let kiemTraEmail = (valueEmail, notiInput) => {
    let valid = true;
    // biến lưu chuỗi regex
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (valueEmail !== '') {
        if (!regexEmail.test(valueEmail)) {
            document.getElementById('lbEmail').style.color = 'red';
            document.getElementById('email').style.borderBottomColor = 'red';
            document.getElementById(notiInput).innerHTML = 'Định dạng email không đúng';
            valid = valid && false;
        } else {
            // gán giá trị vào cho biến valid + cho ô thông báo input email giá trị chuỗi rỗng
            document.getElementById(notiInput).innerHTML = '';
            document.getElementById('lbEmail').style.color = '#222';
            document.getElementById('email').style.borderBottomColor = '#999';
            valid = valid && true;
        }
    }
    return valid;
}

let kiemTraTen = (valueTen, notiTen) => {
    const regexTen = /^[a-zA-Z ]+$/;
    let validName = regexTen.test(removeAscent(valueTen));
    let valid = true;
    if (validName) {
        document.getElementById(notiTen).innerHTML = '';
        document.getElementById('lbName').style.color = '#222';
        document.getElementById('name').style.borderBottomColor = '#999';
        valid = valid && true;
    } else {
        document.getElementById('lbName').style.color = 'red';
        document.getElementById('name').style.borderBottomColor = 'red';
        document.getElementById(notiTen).innerHTML = 'Tên không đúng định dạng';
        valid = valid && false;
    }
    return valid;
}

let kiemTraPassword = (valuePassword, notiPassword) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,6}$/;
    let validPassword = regexPassword.test(valuePassword);
    let valid = true;
    if (validPassword) {
        document.getElementById(notiPassword).innerHTML = '';
        document.getElementById('lbPassword').style.color = '#222';
        document.getElementById('password').style.borderBottomColor = '#999';
        valid = valid && true;
    } else {
        document.getElementById('lbPassword').style.color = 'red';
        document.getElementById('password').style.borderBottomColor = 'red';
        document.getElementById(notiPassword).innerHTML = 'Password phải có 4 - 6 ký tự (bao gồm ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)';
        valid = valid && false;
    }
    return valid;
}

let kiemTraRePassword = (valueRePassword, valuePassword, notiRePassword) => {
    let valid = true;
    if (valuePassword !== valueRePassword) {
        document.getElementById(notiRePassword).innerHTML = 'Vui lòng nhập đúng mật khẩu như phía trên';
        document.getElementById('lbRePassword').style.color = 'red';
        document.getElementById('re_password').style.borderBottomColor = 'red';
        valid = valid && false;
    } else {
        document.getElementById('lbRePassword').style.color = '#222';
        document.getElementById('re_password').style.borderBottomColor = '#999';
        document.getElementById(notiRePassword).innerHTML = '';
        valid = valid && true;
    }
    return valid;
}

let kiemTraGender = (valueGender, notiGender) => {
    let valid = true;
    if (valueGender.length == 0) {
        valid = valid && false;
        document.getElementById('lbGender').style.color = 'red';
        document.getElementById('gender').style.borderBottomColor = 'red';
        document.getElementById(notiGender).innerHTML = 'Vui lòng chọn giới tính';
    } else {
        valid = valid && true;
        document.getElementById('lbGender').style.color = '#222';
        document.getElementById('gender').style.borderBottomColor = '#999';
        document.getElementById(notiGender).innerHTML = '';
    }
    return valid;
}

let kiemTraSDT = (notiPhone) => {
    let valuePhone = document.getElementById('phone').value;
    const regexPhone = /^(?:\+84|0)(?:3[2-9]|5[2689]|7[0|6-9]|8[1-9]|9[0-4|6-9])\d{7}$/;
    let validPhone = regexPhone.test(valuePhone);
    let valid = true;
    // console.log(validSDT);

    if (validPhone) {
        valid = valid && true;
        document.getElementById('lbPhone').style.color = '#222';
        document.getElementById('phone').style.borderBottomColor = '#999';
        document.getElementById(notiPhone).innerHTML = '';
    } else {
        valid = valid && false;
        document.getElementById('lbPhone').style.color = 'red';
        document.getElementById('phone').style.borderBottomColor = 'red';
        document.getElementById(notiPhone).innerHTML = 'Định dạng SĐT chưa đúng';
    }
    return valid;
}