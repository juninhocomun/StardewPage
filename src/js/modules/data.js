export let data = [];
export let filteredData = [];
export let activeArray = [];
const files = [
  "http://26.119.241.217:3000/src/js/jsons/big-craftables.json",
  "http://26.119.241.217:3000/src/js/jsons/boots.json",
  "http://26.119.241.217:3000/src/js/jsons/flooring.json",
  "http://26.119.241.217:3000/src/js/jsons/furniture.json",
  "http://26.119.241.217:3000/src/js/jsons/hats.json",
  "http://26.119.241.217:3000/src/js/jsons/mannequins.json",
  "http://26.119.241.217:3000/src/js/jsons/objects.json",
  "http://26.119.241.217:3000/src/js/jsons/pants.json",
  "http://26.119.241.217:3000/src/js/jsons/shirts.json",
  "http://26.119.241.217:3000/src/js/jsons/tools.json",
  "http://26.119.241.217:3000/src/js/jsons/trinkets.json",
  "http://26.119.241.217:3000/src/js/jsons/wallpaper.json",
  "http://26.119.241.217:3000/src/js/jsons/weapons.json",
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
