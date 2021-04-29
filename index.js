function disable() {
    const controls = document.querySelectorAll("input");
    for (let i = 2; i < controls.length; i++) {
        controls[i].setAttribute("disabled","");
        controls[i].onchange = function() {check_maximum()};
    }
}

window.addEventListener('load', function() {
    document.getElementById("ok-button").addEventListener("click", function() {
        let password = document.getElementById("password").value;
        if (password === "TrustNo1") {
            let controls = document.querySelectorAll("input");
            for (let i = 2; i < controls.length - 1; i++) {
                controls[i].removeAttribute("disabled");
            }
        }
    })

    document.getElementById("launch-button").addEventListener("click", function () {
        console.log("BLAST OFF!");
        window.moving = setInterval(launching, 50);
    })
})

function launching() {
    let y = document.getElementsByClassName("rocket")[0].offsetTop;
    let x = document.getElementsByClassName("rocket")[0].offsetLeft;
    if(y < 1300){y= y - 50;
        document.getElementsByClassName("rocket")[0].style.top= y + "px"; // vertical movement
    }
    if(x < 900){x= x + 50;
        document.getElementsByClassName("rocket")[0].style.left= x + "px";//horizontal move
    } else {
        clearInterval(window.moving);
    }
}

function check_maximum() {
    let i = 2;
    console.log("Checking if checkboxes are checked and all input ranges are set to maximum");
    const controls = document.querySelectorAll("input");
    for (i; i < 8; i++) {
        if (!controls[i].checked) {
            return;
        }
    }
    for (i; i < controls.length - 1; i++) {
        if (controls[i].value !== "100") {
            return;
        }
    }
    controls[i].removeAttribute("disabled");
}