const refresh = () => {
  let hue = Math.random() * 360;
  let color = {
    mode: "lchuv",
    l: 90,
    c: 20,
    h: hue,
    alpha: 1,
  };

  document.getElementById("card").style.backgroundColor =
    culori.formatHex8(color);

  fetch("https://www.affirmations.dev/")
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementById("affirmation").innerText = data.affirmation)
    );
};
