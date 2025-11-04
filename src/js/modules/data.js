export let data = [];
export let filteredData = [];
export let activeArray = [];
const files = [
  "./src/js/jsons/big-craftables.json",
  "./src/js/jsons/boots.json",
  "./src/js/jsons/flooring.json",
  "./src/js/jsons/furniture.json",
  "./src/js/jsons/hats.json",
  "./src/js/jsons/mannequins.json",
  "./src/js/jsons/objects.json",
  "./src/js/jsons/pants.json",
  "./src/js/jsons/shirts.json",
  "./src/js/jsons/tools.json",
  "./src/js/jsons/trinkets.json",
  "./src/js/jsons/wallpaper.json",
  "./src/js/jsons/weapons.json",
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
