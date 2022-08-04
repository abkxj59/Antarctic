const mapImg = document.querySelector('.contacts__map-img');

const initYmaps = () => ymaps.ready(init);
function init() {
  const myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 16,
  });

  const myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
    hintContent: 'офис Антарктика',
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/svg/icon-location.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -22],
  });
  myMap.geoObjects.add(myPlacemark);

  mapImg.hidden = true;
}

export {initYmaps};
