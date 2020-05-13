const displayResult = document.querySelector("#result");
const btn = document.querySelector("#btn");

function checkName(name) {
  return new Promise((resolve, reject) => {
    if (name === "kodlib") {
      resolve(name);
    } else {
      reject("Kullanıcı adınız yanlış.");
    }
  });
}

function getResult() {
  const name = document.querySelector("#name").value;
  checkName(name)
    .then((result) => {
      displayResult.textContent = "Kullanıcı:" + result;
      console.log("İsim doğru: " + result);
    })
    .catch((error) => {
      displayResult.textContent = error;
      console.warn("Hata var" + error);
    });
}

btn.addEventListener("click", getResult);
