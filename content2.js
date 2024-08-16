document.addEventListener('DOMContentLoaded', () => {
    const trymeButton = document.querySelector('.tryme');
    console.log("Hello");
    trymeButton.addEventListener('click', () => {
      window.location.href = "tryme.html";
    });
  });