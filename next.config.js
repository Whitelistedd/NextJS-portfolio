/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const nextTranslate = require('next-translate')

const nextConfig = withPlugins([withImages, nextTranslate], {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["i.imgur.com"]
    },
});

module.exports = nextConfig