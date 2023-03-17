const Encore = require('@symfony/webpack-encore')

/// ///////////// WEBSITE CONFIG //////////////////

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore

    // directory where compiled assets will be stored
    .setOutputPath('public/build/website/')

    // public path used by the web server to access the output path
    .setPublicPath('/build/website/')

    // only needed for CDN's or subdirectory deploy
    // .setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/website/index.js')
    .addEntry('app-home', './assets/website/home.js')
    .addStyleEntry('global', './assets/website/styles/index.scss')

    .copyFiles({
        from: './assets/website/images',

        // optional target path, relative to the output dir
        to: 'images/[path][name].[ext]'

        // if versioning is enabled, add the file hash too
        // to: 'images/[path][name].[hash:8].[ext]',

        // only copy files matching this pattern
        // pattern: /\.(png|jpg|jpeg)$/
    })

    .configureFontRule({
        type: 'asset'

        // maxSize: 4 * 1024
    })

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    // .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())

    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    // enables and configure @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage'
        config.corejs = '3.23'
    })

    // enables Sass/SCSS support
    .enableSassLoader()
    .enablePostCssLoader()

    // uncomment if you use TypeScript
    // .enableTypeScriptLoader()

    // uncomment if you use React
    // .enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    // .enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()

// build the first configuration
const websiteConfig = Encore.getWebpackConfig()

// Set a unique name for the config (needed later!)
websiteConfig.name = 'website-config'

// reset Encore to build the second config
Encore.reset()

/// ////////////////////////////////////////////////////

/// ///////////// BOOTSTRAP EXAMPLES CONFIG //////////////////

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev')
}

Encore

    // directory where compiled assets will be stored
    .setOutputPath('public/build/bootstrap-examples/')

    // public path used by the web server to access the output path
    .setPublicPath('/build/bootstrap-examples/')

    // only needed for CDN's or subdirectory deploy
    // .setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('home', './assets/bootstrap-examples/index.js')
    .addEntry('sidebar', './assets/bootstrap-examples/sidebar.js')
    .addEntry('checkout-js', './assets/bootstrap-examples/checkout.js')

    .addStyleEntry('global', './assets/bootstrap-examples/styles/index.scss')
    .addStyleEntry('heroes', './assets/bootstrap-examples/styles/heroes.scss')
    .addStyleEntry('headers', './assets/bootstrap-examples/styles/headers.scss')
    .addStyleEntry('features', './assets/bootstrap-examples/styles/features.scss')
    .addStyleEntry('sidebars', './assets/bootstrap-examples/styles/sidebars.scss')
    .addStyleEntry('footers', './assets/bootstrap-examples/styles/footers.scss')
    .addStyleEntry('dropdowns', './assets/bootstrap-examples/styles/dropdowns.scss')
    .addStyleEntry('list-groups', './assets/bootstrap-examples/styles/list-groups.scss')
    .addStyleEntry('modals', './assets/bootstrap-examples/styles/modals.scss')
    .addStyleEntry('album', './assets/bootstrap-examples/styles/album.scss')
    .addStyleEntry('pricing', './assets/bootstrap-examples/styles/pricing.scss')
    .addStyleEntry('checkout', './assets/bootstrap-examples/styles/checkout.scss')
    .addStyleEntry('product', './assets/bootstrap-examples/styles/product.scss')
    .addStyleEntry('cover', './assets/bootstrap-examples/styles/cover.scss')
    .addStyleEntry('carousel', './assets/bootstrap-examples/styles/carousel.scss')
    .addStyleEntry('blog', './assets/bootstrap-examples/styles/blog.scss')
    .addStyleEntry('dashboard', './assets/bootstrap-examples/styles/dashboard.scss')
    .addStyleEntry('sign-in', './assets/bootstrap-examples/styles/sign-in.scss')
    .addStyleEntry('sticky-footer', './assets/bootstrap-examples/styles/sticky-footer.scss')
    .addStyleEntry('sticky-footer-navbar', './assets/bootstrap-examples/styles/sticky-footer-navbar.scss')
    .addStyleEntry('jumbotron', './assets/bootstrap-examples/styles/jumbotron.scss')
    .addStyleEntry('starter-template', './assets/bootstrap-examples/styles/starter-template.scss')
    .addStyleEntry('grid', './assets/bootstrap-examples/styles/grid.scss')
    .addStyleEntry('cheatsheet', './assets/bootstrap-examples/styles/cheatsheet.scss')
    .addStyleEntry('cheatsheet-rtl', './assets/bootstrap-examples/styles/cheatsheet-rtl.scss')
    .addStyleEntry('navbars', './assets/bootstrap-examples/styles/navbars.scss')
    .addStyleEntry('navbars-offcanvas', './assets/bootstrap-examples/styles/navbars-offcanvas.scss')
    .addStyleEntry('navbar-static', './assets/bootstrap-examples/styles/navbar-static.scss')
    .addStyleEntry('navbar-fixed', './assets/bootstrap-examples/styles/navbar-fixed.scss')
    .addStyleEntry('navbar-bottom', './assets/bootstrap-examples/styles/navbar-bottom.scss')
    .addStyleEntry('offcanvas-navbar', './assets/bootstrap-examples/styles/offcanvas-navbar.scss')
    .addStyleEntry('album-rtl', './assets/bootstrap-examples/styles/album-rtl.scss')
    .addStyleEntry('checkout-rtl', './assets/bootstrap-examples/styles/checkout-rtl.scss')
    .addStyleEntry('carousel-rtl', './assets/bootstrap-examples/styles/carousel-rtl.scss')
    .addStyleEntry('blog-rtl', './assets/bootstrap-examples/styles/blog-rtl.scss')
    .addStyleEntry('dashboard-rtl', './assets/bootstrap-examples/styles/dashboard-rtl.scss')
    .addStyleEntry('masonry', './assets/bootstrap-examples/styles/masonry.scss')
    .addStyleEntry('offcanvas', './assets/bootstrap-examples/styles/offcanvas.scss')

    .copyFiles({
        from: './assets/bootstrap-examples/images',

        // optional target path, relative to the output dir
        to: 'images/[path][name].[ext]'

        // if versioning is enabled, add the file hash too
        // to: 'images/[path][name].[hash:8].[ext]',

        // only copy files matching this pattern
        // pattern: /\.(png|jpg|jpeg)$/
    })

    .configureFontRule({
        type: 'asset'

        // maxSize: 4 * 1024
    })

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    // .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())

    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    // enables and configure @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage'
        config.corejs = '3.23'
    })

    // enables Sass/SCSS support
    .enableSassLoader()
    .enablePostCssLoader()

    // uncomment if you use TypeScript
    // .enableTypeScriptLoader()

    // uncomment if you use React
    // .enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    // .enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()

// build the first configuration
const bootstrapExamplesConfig = Encore.getWebpackConfig()

// Set a unique name for the config (needed later!)
bootstrapExamplesConfig.name = 'bootstrap-examples-config'

// reset Encore to build the second config
Encore.reset()

/// ////////////////////////////////////////////////////

module.exports = [websiteConfig, bootstrapExamplesConfig]
