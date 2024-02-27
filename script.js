document.addEventListener("DOMContentLoaded", () => {

    let subm = document.querySelector('.buton')

    subm.addEventListener('click', function () {
        fetch('https://animechan.xyz/api/random')
            .then(response => response.json())
            .then(quote => {
                let info = document.querySelector(".krejt");
                let quotett = quote.quote;
                let char = quote.character;
                let animes = quote.anime;
                info.innerHTML = `<p>Anime: ${animes}</p>
            <p>Character: ${char}</p>
            <p>Quote: ${quotett}</p>`;
            })

    })
})

