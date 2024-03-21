var to = 'BabiIuDau';
var gift_url = 'https://drive.google.com/file/d/1DvJa6BsP7LMPMctVGuXgPMKLALnxjlD7/view?usp=sharing';
var gift_image_url = 'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/433120083_786299340096553_3334593389073736793_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JOL_au0damAAX8LYO9M&_nc_ht=scontent-iad3-2.xx&oh=00_AfCiuc-OPm_rAkEt8lMwF6oVv4HORaNEpxQRaJd1hY1r6A&oe=6601078B'

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var graphElem = document.querySelector('.present-box > .side.top .to');
  graphElem.setAttribute('data-before', eventName);
  document.querySelector('#card .title-card').innerHTML = `💘${titleCard}💘`;
  document.querySelector('#card .content-card').innerHTML = `${contentCard}`;
  document.querySelector('#card .honey').setAttribute('src', `${giftImage}`);

  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();
