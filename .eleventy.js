module.exports = (eleventyConfig) => {
    const config = {
        dir: {
            input: 'src',
            output: 'docs',
        },
        templateFormats: ['html', 'md', 'css', 'js', 'png', 'ico', 'webmanifest'],
        passthroughFileCopy: true,
    }

    return config
}