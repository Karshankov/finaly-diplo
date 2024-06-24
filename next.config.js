/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "utfs.io"
        ]
    },
    api: {
      bodyParser: false, // This line is important, it disables body parsing
    },

}
module.exports = {
    async redirects() {
      return [
        {
          source: '/cher',
          destination: '../cher/src/App.js', // путь ко второму проекту
          permanent: false,
        },
      ];
    },
  };

module.exports = nextConfig
