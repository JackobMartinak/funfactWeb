// axios.get("https://ffa.aakhilv.me/image/dark").then((res) => {
//     console.log(res.data);
// });

const img = document.querySelector("#img");
const returnButton = document.querySelector(".return-button");
const funfactButton = document.querySelector(".funfact-button");

const fetchFunFactImg = async () => {
    axios
        .get("https://ffa.aakhilv.me/image/dark", {
            responseType: "arraybuffer",
        })
        .then((response) => {
            let blob = new Blob([response.data], {
                type: response.headers["content-type"],
            });
            let image = URL.createObjectURL(blob);
            img.setAttribute("src", image);
        });
};

returnButton.addEventListener("click", () => {
    location.href = "../html/index.html";
});

funfactButton.addEventListener("click", () => {
    fetchFunFactImg();
});

fetchFunFactImg();
