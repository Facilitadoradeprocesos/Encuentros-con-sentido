   document.addEventListener("DOMContentLoaded", function () {
          const form = document.querySelector("form");
      
          form.addEventListener("submit", function (e) {
            e.preventDefault(); 
      
            const formData = new FormData(form);
      
            fetch(form.action, {
              method: "POST",
              body: formData,
              headers: {
                'Accept': 'application/json'
              }
            })
            .then(response => {
              if (response.ok) {
                form.reset(); 
                window.location.href = "gracias.html"; 
              } else {
                alert("Hubo un problema al enviar el formulario. Intenta nuevamente.");
              }
            })
            .catch(error => {
              alert("Error al enviar. Inténtalo más tarde.");
              console.error("Error:", error);
            });
          });
        });