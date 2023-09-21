axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response)=>{
        const resultados = response.data;
        console.log(resultados)
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("fin");
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const upButtons = document.querySelectorAll(".up");
        upButtons.forEach(function(button) {
            button.addEventListener("click", scrollToTop);
    });
