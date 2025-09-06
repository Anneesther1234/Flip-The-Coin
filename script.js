let boutton = document.querySelector("button");
boutton.addEventListener("click",(event) => {
    let result = Math . random ( ) < 0.5 ? "Heads" : "Tails" ;
    document.getElementById("result").innerText = result;
    let img = document.querySelector("img");
    img.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-20px)" },
        ],
        {duration:500}
    )
    img.src= result == "Heads" ? './resources/heads.svg': './resources/tails.svg';
});


