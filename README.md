# Obike Emmanuel — Portfolio

Next.js 14 + Tailwind CSS portfolio for a Computer Science & Mathematics teacher.

## Setup

1. Install Node.js LTS
2. Install dependencies:

```bash
npm install
```

3. Run dev server:

```bash
npm run dev
```

Open http://localhost:3000

## Customization

- Replace contact email and Formspree endpoint in `app/contact/page.tsx`.
- Add `public/images/headshot.jpg` and optional `public/images/og-default.jpg`.
- Update site URL in `next-seo.config.ts` and `app/sitemap.ts`.

### Environment Variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-id
NEXT_PUBLIC_SITE_URL=https://your-domain.tld
```

## Content

- Edit pages in `app/` (Home, About, Philosophy, Courses, Projects, Testimonials, Blog, Contact).
- Blog uses simple static data; can be upgraded to MDX.

## Deploy

- Initialize git and push to GitHub
- Deploy to Vercel: import repo, framework Next.js, defaults.

### Vercel Steps

1. Create a GitHub repo and push your code.
2. Go to Vercel, import the GitHub repo.
3. Set Environment Variables:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - `NEXT_PUBLIC_SITE_URL` (e.g., `https://your-domain.tld`)
4. Deploy. Add a custom domain if desired.



