const MALE_ENUM = "male";
const FEMALE_ENUM = "female";

const GENDER_MAP = {
  [MALE_ENUM]: true,
  [FEMALE_ENUM]: false,
};

const arrIdInput = [
  "name",
  "email",
  "password",
  "re_password",
  "gender",
  "phone",
];

const arrNotiInput = [
  "tbName",
  "tbEmail",
  "tbPassword",
  "tbRePassword",
  "tbGender",
  "tbPhone",
];

const arrLabelInput = [
  "lbName",
  "lbEmail",
  "lbPassword",
  "lbRePassword",
  "lbGender",
  "lbPhone",
];

const REGISTER_URL = "https://shop.cyberlearn.vn/api/Users/signup";

const onSuccess = (response) => {
  const { statusCode, message } = response?.data;
  if (statusCode !== 200) {
    Toastify({
      text: message,
      className: "error", // update css classname
    }).showToast();
  } else {
    Toastify({
      text: `Đăng ký thành công!`,
      className: "success",
    }).showToast();
    document.getElementById("signUpForm").reset();
    document.getElementById("btnGoHome").style.display = "inline-block";
    document.getElementById("btnSignUp").style.display = "none";
  }
};

const onError = (error) => {
  console.log(error);
  const message = error.response.data.message || "Có lỗi xảy ra!";
  Toastify({
    text: message,
    className: "error",
  }).showToast();
};

const getCustomer = () => {
  let customer = new KhachHang();
  for (let i = 0; i < arrIdInput.length; i++) {
    const value = document.getElementById(arrIdInput[i]).value;
    customer[arrIdInput[i]] = value;
  }
  return customer;
};

const getValues = (keys) => {
  const data = {};
  keys.forEach((key) => {
    const valueByKey = document.getElementById(key).value;
    data[key] = valueByKey;
  });

  return data;
};

const isValid = (rawData, customer) => {
  return (
    kiemTraDuLieuRong(arrIdInput, arrNotiInput, customer, arrLabelInput) &&
    kiemTraTen(rawData.name, "tbName") &&
    kiemTraEmail(rawData.email, "tbEmail") &&
    kiemTraPassword(rawData.password, "tbPassword") &&
    kiemTraRePassword(rawData.password, rawData.re_password, "tbRePassword") &&
    kiemTraGender(rawData.gender, "tbGender") &&
    kiemTraSDT("tbPhone")
  );
};

const onRegister = () => {
  event.preventDefault();

  const customer = getCustomer();

  // Get form data
  const rawData = getValues([
    "email",
    "name",
    "password",
    "re_password",
    "gender",
    "phone",
  ]);

  // validation
  if (isValid(rawData, customer)) {
    // Body Data
    const bodyData = {
      email: rawData.email,
      password: rawData.password,
      name: rawData.name,
      gender: GENDER_MAP[rawData.gender],
      phone: rawData.phone,
    };
    // make request
    axios.post(REGISTER_URL, bodyData).then(onSuccess).catch(onError);
  }
};

const goHomePage = () => {
  window.location.href = "./../index.html";
};

