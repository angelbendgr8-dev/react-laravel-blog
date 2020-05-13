const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');


mix.styles([
   'public/css/bootstrap.min.css',
   'public/css/classy-nav.css',
   'public/css/font-awesome.min.css',
   'public/css/themify-icons.css',
   'public/css/owl.carousel.min.css',
   'public/css/animate.css',
   'public/css/magnific-popup.css',
   'public/style.css', 
], 'public/css/all.css')

mix.scripts([
   'public/js/jquery/jquery-2.2.4.min.js',
   'public/js/bootstrap/popper.min.js',
   'public/js/bootstrap/bootstrap.min.js',
   'public/js/plugins/plugins.js',
   'public/js/active.js'
],'public/js/all.js');

