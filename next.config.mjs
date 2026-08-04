/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a fully static site (`out/`) with `next build`.
  // This makes deployment to static hosting (e.g. Hostinger) simple and
  // avoids Node-server / CDN build-mismatch issues. Note: static export has
  // no server runtime, so there are no API routes — the contact form submits
  // to Supabase directly from the browser.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
