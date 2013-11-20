(function() {
  var container;
  var renderer, particle;
  var mouseX = 0, mouseY = 0;

  var stats = new Stats();
  stats.domElement.id = 'stats';
  document.getElementById('info').insertBefore( stats.domElement, document.getElementById('togglefft') );

  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;
  
  // Expose these for the demo
  window.rotateSpeed = 1;
  window.scene = new THREE.Scene();
  window.group = new THREE.Object3D();
  window.camera;

  init();
  animate();

  function init() {
    container = document.createElement( 'div' );
    document.body.appendChild( container );
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
    camera.position.z = 1000;

    scene.add( camera );
    scene.add( group );

    renderer = new THREE.CanvasRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
  }


  function animate() {
    requestAnimationFrame( animate );
    render();
    stats.update();
  }

  var t = 0;
  function render() {
    camera.position.y = Math.sin(t * 0.005 * rotateSpeed) * 1000;
    camera.position.z = Math.cos(t * 0.005 * rotateSpeed) * 1000;
    camera.position.x += ( - mouseX - camera.position.x ) * 0.01;
    camera.lookAt( scene.position );
    t++;
    renderer.render( scene, camera );
  }
})();
