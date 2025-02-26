function playSong(event, id){ 
  const audio = document.getElementById("audio");
  switch(id) {
        case "dmtsm":
          audio.src = "music/донт мистейк барики3.mp3";
          audio.play();
          break;
        case "mv":
          audio.src = "music/мирный воин 19.mp3";
          audio.play();
          break;
        case "cpc":
          audio.src = "music/сам по сеебе озон.mp3";
          audio.play();
          break;
        case "chnnd":
          audio.src = "music/чого не на13.mp3"
          audio.play();
          break;
        case "n":
          audio.src = "music/нирванушка18.mp3";
          audio.play();
          break;
        case "y":
          audio.src = "music/ухилянт 17.mp3";
          audio.play();
          break;
        case "z":
          audio.src = "music2/Заколебался16.mp3";
          audio.play();
          break;
        case "mmc":
          audio.src = "music2/мила мое солнышко8.mp3";
          audio.play();
          break;
        case "ptbm":
          audio.src = "music2/Пчелка трудится Бизнес мутится.mp3";
          audio.play();
          break;
      }
}

function selected(id){
  document.querySelectorAll(".song.selected").forEach(song => {
    song.classList.remove("selected");
  });

  const songDiv = document.getElementById(id).closest(".song");
  songDiv.classList.add("selected")
}

["dmtsm", "mv", "cpc", "chnnd", "n", "y", "z", "mmc", "ptbm"].forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", (event) => {
      playSong(event, id)
      selected(id)
    });

  }
});
