let kiemTraDuLieuRong = (arrIdInput, arrNotiInput, khachHang, arrLabelInput) => {
    let valid = true;
    for (let z = 0; z < arrIdInput.length; z++) {
        // check xem có dữ liệu trong thuộc tính hay không
        if (khachHang[arrIdInput[z]] == '') {
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