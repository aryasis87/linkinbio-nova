export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://linkinbio-nova.vercel.app/sitemap.xml",
    host: "https://linkinbio-nova.vercel.app",
  };
}
