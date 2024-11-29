document.addEventListener("DOMContentLoaded", () => {
    const alertMessage = document.createElement("div");
    alertMessage.className = "alert alert-info text-center animate__animated animate__fadeInDown";
    alertMessage.textContent = "Bienvenido al Museo Nacional de las Culturas del Mundo";
    document.body.prepend(alertMessage);

    setTimeout(() => {
        alertMessage.classList.add("animate__fadeOutUp");
        alertMessage.addEventListener("animationend", () => alertMessage.remove());
    }, 3000);
});
