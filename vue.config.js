module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/v2/'
        : '/',
    outputDir: '../public/v2/',
    //indexPath: '../../templates/html_v2.php'
    pages: {
        index: 'src/pages/index/main.ts',
        customer: 'src/pages/customer/main.ts'
    }
}

