var paths = {
  components: {
    babelpolyfill: './node_modules/babel-polyfill/dist/',
    datepicker: './node_modules/js-datepicker/dist/',
    svgmarker: './node_modules/@defvayne23/svg-marker/'
  },
  css: {
    src: './css/src/',
    dist: './css/dist/',
    maps: './css/src/maps/'
  },
  js: {
    src: './js/src/',
    vendor: './js/vendor/',
    dist: './js/dist/',
    jshint: './'
  },
  images: {
    src: './images/src/',
    dist: './images/dist/'
  },
  sprites: {
    src: './images/dist/icons/',
    dist: './images/icons/'
  },
  sprite: {
    dist: './images/'
  }
}

var globs = {
  js: {
    src: [
      paths.components.babelpolyfill + 'polyfill.js',
      paths.js.src + 'wellness.js',
      paths.js.src + 'main.js'
    ],
    dist: {
      original: 'app.js',
      minified: 'app.min.js'
    },
    jshint: '.jshintrc'
  },
  js_map: {
    src: [
      paths.components.svgmarker + 'SVGMarker.js',
      paths.components.datepicker + 'datepicker.min.js',
      paths.js.src + 'map-search.js',
      paths.js.src + 'map-location.js'
    ],
    dist: {
      original: 'map.js',
      minified: 'map.min.js'
    }
  },
  css: {
    raw: [
      paths.css.src + '*.css'
    ],
    src: [
      paths.css.src + 'style.css'
    ],
    dist: {
      original: 'style.css',
      minified: 'style.min.css',
      temp: 'style.temp.css'
    },
    maps: [
      'config.yml',
      'bp.yml',
      'colors.yml',
      'fonts.yml'
    ]
  },
  images: {
    src: paths.images.src + '**',
    dist: paths.images.dist + '*.*'
  },
  sprites: {
    src: paths.sprites.src + '*.svg',
    dist: paths.sprites.dist
  },
  sprite: {
    src: paths.sprites.dist + 'svg-symbols.svg',
    dist: 'icons.svg'
  }
};

module.exports = {
  paths: paths,
  globs: globs
};
