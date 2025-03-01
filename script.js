document.addEventListener("DOMContentLoaded", () => { 
  const audio = document.getElementById("audio");
  
  function playAndSelectSong(event) {
    const id = event.currentTarget.dataset.id;
    if (!id) return;

    // Update audio source and play
    const songSources = {
      "dmtsm": "music/донт мистейк барики3.mp3",
      "mv": "music/мирный воин 19.mp3",
      "cpc": "music/сам по сеебе озон.mp3",
      "chnnd": "music/чого не на13.mp3",
      "n": "music/нирванушка18.mp3",
      "y": "music/ухилянт 17.mp3",
      "z": "music2/Заколебался16.mp3",
      "mmc": "music2/мила мое солнышко8.mp3",
      "ptbm": "music2/Пчелка трудится Бизнес мутится.mp3"
    };

    if (songSources[id]) {
      audio.src = songSources[id];
      audio.play();
    }

    // Remove previous selection
    document.querySelectorAll(".song.selected").forEach(song => song.classList.remove("selected"));

    // Add selection to clicked song
    event.currentTarget.classList.add("selected");
  }

  // Attach event listeners dynamically
  document.querySelectorAll(".song").forEach(song => {
    song.addEventListener("click", playAndSelectSong);
  });
});
