document.addEventListener("DOMContentLoaded", function () {
    let boxes = document.querySelectorAll(".boxex div");
    let body = document.querySelector("body");

    let mainbox=document.querySelector(".boxex")

    let containe=document.querySelector(".container div")

    boxes.forEach((box) => {
        box.style.width = "100px";
        box.style.height = "100px";
        // box.style.display = "inline-block";
        box.style.margin = "10px";
        box.style.cursor = "pointer";

        if (box.id === "box1") box.style.backgroundColor = "red"; 
        if (box.id === "box2") box.style.backgroundColor = "blue"; 
        if (box.id === "box3") box.style.backgroundColor = "green";
        if (box.id === "box4") box.style.backgroundColor = "white";

        box.addEventListener("click", function () {
            body.style.backgroundColor = this.style.backgroundColor;
            event.stopPropagation();
        });
    });

    mainbox.addEventListener("click",()=>{
        body.style.backgroundColor='yellowgreen'
    })
});
