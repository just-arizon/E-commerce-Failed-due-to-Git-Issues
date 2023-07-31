// 
var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ] ).mount();
}
// 
  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel' ).mount();
  } );
//  Auto-Scroll Slide 
new Splide( '.splide',{
    autoScroll: {
      speed: 3,
      autoStart: boolean = true,
      height: '50%',
      pauseOnHover: boolean = false,
      rewind: boolean,
    },
  } ).mount( window.splide.Extensions );
