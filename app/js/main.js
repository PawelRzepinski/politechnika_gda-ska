////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///   Modal + map
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const modal = document.querySelector('.modal');
const contactLink = document.querySelector('#modal-open');
const modalCloseBtn = document.querySelector('#modal-close');

mapboxgl.accessToken = 'pk.eyJ1IjoicGF3ZWxyemVwaW5za2kiLCJhIjoiY2pvdHNqMnQyMTFlNDNwbGh4aDUxdnUyYiJ9.kM0KujfgCf878t68Wrt0Fw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pawelrzepinski/cki0lnzxz1qek19omnpk5d2i6',
    center: [18.6127488, 54.3718444],
    zoom: 9,
});
const marker = new mapboxgl.Marker()
    .setLngLat([18.6127488, 54.3718444])
    .addTo(map);



function modalVisibility() {
    modal.classList.toggle('modal--visible');
}


modalCloseBtn.addEventListener('click', modalVisibility);
contactLink.addEventListener('click', function () {
    modalVisibility();
    map.resize();
});





