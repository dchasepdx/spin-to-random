function spin(arr) {
  const index = Math.floor(Math.random() * arr.length);
  const randoHero = document.getElementById('randoHero');
  const portrait = document.getElementById('portrait');
  let heroName = arr[index].localized_name;
  randoHero.innerHTML = `You randomed ${heroName}`
  heroName = heroName.replace(/ /g,"_").toLowerCase();
  heroName = heroName.replace(/-/g, "");
  portrait.src = `heroPortraits/${heroName}_lg.png`;

}

document.getElementById('spin').addEventListener('click', function() {
  spin(data);
});