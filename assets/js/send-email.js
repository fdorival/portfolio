(function () {
  emailjs.init("2ovCQkgc3byHqSRMv");
})();

window.onload = function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_4xztvbi", "template_15c5e6d", this).then(
      function () {
        alert("Email enviado :)", "primary");
        form.reset();
      },
      function (error) {
        console.log("FAILED SEND EMAIL...", error);
        alert("Algo de errado não está certo :S", "danger");
      }
    );
  });
};
