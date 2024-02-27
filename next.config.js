// /** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  cleanDistDir: true,
  async rewrites() {
    return [
      {
        source: '/htmls/HiddenObjGame.html',
        destination: '/htmls/HiddenObjGame.html',
      },
      {
        source: '/htmls/MahjongGame.html',
        destination: '/htmls/MahjongGame.html',
      },
    ];
  },
  images: {
    domains: ['i.ibb.co'],
  },
};
