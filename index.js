function disable() {
    let controls = document.querySelectorAll("input");
    console.log(controls);
    for (let i = 2; i < controls.length; i++) {
        console.log(controls[i]);
        controls[i].setAttribute("disabled","");
    }
}

window.addEventListener('load', function() {
    document.getElementById("ok-button").addEventListener("click", function() {
        let password = document.getElementById("password").value;
        if (password === "TrustNo1") {
            let controls = document.querySelectorAll("input");
            for (let i = 2; i < controls.length; i++) {
                controls[i].removeAttribute("disabled");
            }
        }
    })
})