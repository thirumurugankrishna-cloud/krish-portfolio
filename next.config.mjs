/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/resume",
        destination: "/Krishna_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
