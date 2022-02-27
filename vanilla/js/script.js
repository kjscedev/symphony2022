window.addEventListener("load", (event) => {
  const replaceImage = (i) => {
    document.getElementById(
      "images"
    ).innerHTML = `<div><img src="./assets/${i}.png"  height=400" width="350"/></div>`;
  };

  var imgNo = 1;

  setInterval(function () {
    if (imgNo <= 9) {
      replaceImage(imgNo);
      imgNo++;
    } else {
      imgNo = 1;
    }
  }, 3000);
});

function openAfterMovie() {
  window.open("https://youtu.be/mIBRug2k0qw", "_blank");
}

function openGallery() {
  window.open(
    "https://drive.google.com/drive/folders/1K7VGrVR-_xqDp1PNFaCmMpBb3-2kEBVF?usp=sharing",
    "_blank"
  );
}

function openFacebook() {
  window.open("https://www.facebook.com/KJSCESymphony/", "_blank");
}
function openTwitter() {
  window.open(
    "https://twitter.com/KjsceSymphony?t=ohdBsSBMTqHo7CastroV4A&s=09",
    "_blank"
  );
}
function openInstagram() {
  window.open(
    "https://instagram.com/kjsce_symphony?utm_medium=copy_link",
    "_blank"
  );
}
function openYoutube() {
  window.open("https://youtube.com/c/KJSCELive", "_blank");
}


