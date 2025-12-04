//
pictureSelected;
//
function myFunction(imgs) {
  // get the image big
  var bigImg = document.getElementById("bigImg");
  // get the image text
  var imgText = document.getElementById("imgText");
  // use the same src in the big img as the img being clicked
  bigImg.src = imgs.src;
  // use the value of the alt attribute of the clickable image as text inside the big image
  imgText.innerHTML = imgs.alt;
  // show the container element (hidden due to css)??
  bigImg.parentElement.style.display = "block";
  pictureSelected = true;
}

//tried making a function that "closed down" the big picture if one clicked somewhere else on screen, after having a picture selected.
// document.element(click, () => {
//   pictureSelected = false;
//   bigImg.parentElement.style.display = "none";
// });
