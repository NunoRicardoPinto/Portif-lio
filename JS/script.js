// Para inicializar a função com a minha public Key
emailjs.init("MmSSE6-kzT_N7zuIK"); //No caso de u cliente devo pegar o "private Key".

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //Para não recarregar a tela depois de clicar no botão submit.(É um psdrão dele.)

    // Criação de objecto dos dados ao submeter eles.
    const formData = {
      // O value serve para pegar o valor que está no campo
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      assunto: document.getElementById("assunto").value,
      mensagem: document.getElementById("mensagem").value,
    };

    // console.table(formData); //Verifica se as informaões dos campos estão a ser recebidas pelo JS

    const serveceID = "service_imf1zbo";
    const templeteID = "template_qxmcpgw";
    const submitButton = document.getElementById("submit");
    submitButton.textContent = "Enviando...";
    // Para enviar o emai para mim
    emailjs
      .send(serveceID, templeteID, formData)
      .then(() => {
        Toastify({
          text: "Email enviado!",
          duration: 3000,
          style: {
            background: "#28a745",
            color: "#f4f4f4",
          },
        }).showToast();
        document.getElementById("contact-form").reset()
      })
      .catch((Error) => {
        console.error("Erro no envio.", Error);
      })
      .finally(() => {
        submitButton.textContent = "Enviar";
      });
  });
