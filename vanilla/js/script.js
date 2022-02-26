window.addEventListener("load", (event) => {
  const replaceImage = (i) => {
    document.getElementById(
      "images"
    ).innerHTML = `<div><img src="./assets/${i}.png"  height=450" width="400"/></div>`;
  };

  var imgNo = 1;

  setInterval(function () {
    if (imgNo <= 9) {
      replaceImage(imgNo);
      imgNo++;
    } else {
      imgNo = 1;
    }
  }, 5000);
});
