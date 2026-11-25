# Michelle Scaraglino

Website for Michelle Scaraglino, hair and personal stylist: https://michellescaraglino.com

Built with [Astro](https://astro.build) and deployed on Netlify. The contact form posts to a Netlify function (`functions/send-contact-email`) that sends mail through Mailgun.

## Development

Requires Node 22.23 or newer.

```shell
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/
```

Page copy lives in `src/content/`: Markdown for the Hair, Styling, Policy, and COVID-19 pages and the testimonials, and `hair-services.yaml` for the service list.

To try the contact form locally, run `netlify dev` with `MAILGUN_API_KEY`, `MAILGUN_DOMAIN`, `FROM_EMAIL_ADDRESS`, and `CONTACT_TO_EMAIL_ADDRESS` set.
