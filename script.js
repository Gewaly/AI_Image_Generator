const api = "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";
const inp = document.querySelector(".inp");
const img = document.querySelector(".images");
const download=document.querySelector("#download");


const getImage = async () => {
  const methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify({
      prompt: inp.value,
      n: 2,
      size: "256x256",
    }),
  };
  const result = await fetch(
    "https://api.openai.com/v1/images/generations",
    methods
  );
  const data = await result.json();
  //console.log(data);
  const listImages = data.data;
  img.innerHTML = "";
  
  listImages.map((photo) => {
    const container = document.createElement("div");
    img.appendChild(container);
    const image = document.createElement("img");
    container.appendChild(image);
    image.src = photo.url;
  });
};
