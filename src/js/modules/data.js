export let data = [];
export let filteredData = [];
export let activeArray = [];
const files = [
  "http://localhost:3000/js/jsons/big-craftables.json",
  "http://localhost:3000/js/jsons/boots.json",
  "http://localhost:3000/js/jsons/flooring.json",
  "http://localhost:3000/js/jsons/furniture.json",
  "http://localhost:3000/js/jsons/hats.json",
  "http://localhost:3000/js/jsons/mannequins.json",
  "http://localhost:3000/js/jsons/objects.json",
  "http://localhost:3000/js/jsons/pants.json",
  "http://localhost:3000/js/jsons/shirts.json",
  "http://localhost:3000/js/jsons/tools.json",
  "http://localhost:3000/js/jsons/trinkets.json",
  "http://localhost:3000/js/jsons/wallpaper.json",
  "http://localhost:3000/js/jsons/weapons.json",
];

export async function callJSON() {
  const results = await Promise.all(
    files.map((f) =>
      fetch(f)
        .then((r) => r.json())
        .catch((err) => console.error(err))
    )
  );
  data = results.flat();
  activeArray = data;
}
