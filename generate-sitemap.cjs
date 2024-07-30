// generate-sitemap.js

const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

// Define your website URL
const siteUrl = 'https://www.ibcstudio.com';

// List all your pages
const pages = [  
                 '/',
                '/about', 
                '/WeDo', 
                '/facilities', 
                '/audio', 
                '/webdesign', 
                '/video', 
                '/faq', 
                '/corporate', 
                '/photography', 
                '/prodphoto', 
                '/industphoto', 
                '/foodphoto', 
                '/modelphoto', 
                '/travelhphoto', 
                '/othersphoto', 
                '/stilcov', 
                '/soundstg', 
                '/perishable',
                '/parties', 
                '/schools', 
                '/properties', 
                '/facilitiesg', 
                '/multimedia', 
                '/events', 
                '/eventsvideo', 
                '/aerialtmlps', 
                '/dubbingtut',
                '/tvcsocial', 
                '/arVrvideo', 
                '/animation', 
                '/clients', 
                '/contact', 
                '/audio_services', 
                '/photography_services', 
                '/video_services', 
                '/audio_samples', 
                '/webdev', 
                '/interactive', 
                '/gdesigns', 
                '/paypalgwy', 
 
];

const sitemap = new SitemapStream({ hostname: siteUrl });

pages.forEach(page => {
  sitemap.write({ url: page, changefreq: 'daily', priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then(sm => {
  createWriteStream(resolve(__dirname, 'public', 'sitemap.xml')).write(sm.toString());
});
