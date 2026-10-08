const button = document.getElementById("lightbutton");

button.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

async function hentData() {

    const response = await fetch("systemdata.json");
    const data = await response.json();

    document.getElementById("hostname").textContent = data.hostname;
    document.getElementById("kernel").textContent = data.kernel;
    document.getElementById("cpu").textContent = data.cpu_percent + "%";
    document.getElementById("ram").textContent = data.raw_percent + "%";
    document.getElementById("disk").textContent = data.disk_percent + "%";
    document.getElementById("processes").textContent = data.process_count;

}

hentData();

setInterval(hentData, 5000)

