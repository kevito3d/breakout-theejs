var bloques = [],
  ancho = 400,
  alto = 400,
  filas = 16,
  columnas = 5,
  anchoBloque = 80,
  altoBloque = 10,
  renderer = null,
  scene = null,
  camera = null;

var skins = {
    "bola": "imgs/bola.jpg",
    "bloque": "imgs/bricks.png",
}

var patineta = {
  ancho: 80,
  alto: 10,
  speed: 320,
  x: 0,
  y: 0,
  direccion: 0,
  mesh: null,
};

var bola = {
  x: 0,
  y: 0,
  radius: 7,
  velocity: { x: 0, y: 250 },
  mesh: null,
};

var game = {
  estado: "ready",
  coutBloques: filas * columnas,
  puntuacion: 0,
  vidas: 3,
};

function init() {
  // 1. Crear el renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(ancho, alto);
  document.body.appendChild(renderer.domElement);

  // 2. Crear la escena
  scene = new THREE.Scene();

  // 3. Crear la camara
  camera = new THREE.OrthographicCamera(0, ancho, 0, alto, 1, 1000);
  camera.position.z = 100;
  scene.add(camera);

  // 4. Crear el objeto
  crearPatineta();
  crearBola();
  crearBloques();

  // 5. Renderizar
  render();
}
