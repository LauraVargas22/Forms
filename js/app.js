let myForm = document.querySelector("#frmPersonalData");

myForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(myForm));
    postData(data).then(r => {
        document.querySelector("pre").innerHTML = r;
    });
})

const postData = async (data) => {
    return JSON.stringify(data);
}