function disable() {
    let controls = document.querySelectorAll("input");
    console.log(controls);
    for (let i = 2; i < controls.length; i++) {
        console.log(controls[i]);
        controls[i].setAttribute("disabled","");
    }
}

