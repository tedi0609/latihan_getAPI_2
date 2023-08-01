
async function fetchData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30", {
    method: "GET",
  });

  const json = await response.json();
  const results = json.results;

  results.forEach((e) => {
    let hasil = fetch(e.url, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        let divPoke = document.getElementById("pokemon");
        let div = document.createElement("div");
        let p1 = document.createElement("p");
        p1.innerHTML = `${res.id} : ${res.name}`;
        let img = document.createElement("img");
        img.src = `${res.sprites.front_default} `;
        let p2 = document.createElement("p");
        p2.innerHTML = `type: ${res.types[0].type.name}`;
        
        div.append(p1, img, p2);
        divPoke.append(div);

        if (res.types[0].type.name === "grass") {
          div.className = "grass";
        } else if (res.types[0].type.name === "fire") {
          div.className = "fire";
        } else if (res.types[0].type.name === "water") {
          div.className = "water";
        } else if (res.types[0].type.name === "normal") {
          div.className = "normal";
        } else if (res.types[0].type.name === "bug") {
          div.className = "bug";
        } else if (res.types[0].type.name === "poison") {
          div.className = "poison";
        } else if (res.types[0].type.name === "electric") {
          div.className = "electric";
        } else if (res.types[0].type.name === "ground") {
          div.className = "ground";
        }
      });
  });
}
