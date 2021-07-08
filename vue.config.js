const DEBUG_PRODUCTION = true;

module.exports = {
    filenameHashing: !DEBUG_PRODUCTION,
    publicPath: process.env.NODE_ENV === 'production'
        ? (DEBUG_PRODUCTION ? 'http://localhost:8080/' : '/v2/')
        : '/',
    outputDir: '../public/v2/'//,
    //indexPath: '../../templates/html_v2.php'
}

