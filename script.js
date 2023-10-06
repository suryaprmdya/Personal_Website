let btnTech = document.getElementById("btn-tech");
let btnTools = document.getElementById("btn-tools");
let techStack = document.getElementById("tech-stack");
let tools = document.getElementById("tools");


btnTools.addEventListener('click', () => {
    btnTech.classList.remove("active")
    btnTools.classList.add("active");

    tools.classList.remove("hidden");
    techStack.classList.add("hidden");
})

btnTech.addEventListener('click', () => {
    btnTech.classList.add("active")
    btnTools.classList.remove("active");

    tools.classList.add("hidden");
    techStack.classList.remove("hidden");
})