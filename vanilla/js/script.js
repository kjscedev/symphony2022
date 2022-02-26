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

function openAfterMovie() {
  window.open(
    "https://youtu.be/mIBRug2k0qw",
    "_blank"
  );
}

function openGallery() {
  window.open("https://drive.google.com/drive/folders/1K7VGrVR-_xqDp1PNFaCmMpBb3-2kEBVF?usp=sharing", "_blank");
}

