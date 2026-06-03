# Augusto Bastos Portfolio

A responsive one-page personal portfolio website for Augusto Bastos, a Data & CRM Analyst based in Belo Horizonte, Brazil.

The site is a static HTML/CSS/JavaScript project. It is designed to feel calm, editorial, professional and personal, with placeholder assets kept in place for the profile photo, dashboard screenshots, email address and final CV.

## Project Files

```text
index.html
styles.css
script.js
Augusto-Bastos-CV.pdf
preview.png
README.md
```

## Open Locally

You can open the site directly in a browser:

```text
index.html
```

No build step, package manager or local server is required.

## Upload To GitHub

1. Create a new GitHub repository.
2. Upload the contents of this folder, not the parent `outputs` folder.
3. Make sure `index.html` is in the repository root.
4. Commit the files to the main branch.

The repository root should look like this:

```text
Augusto-Bastos-CV.pdf
README.md
index.html
preview.png
script.js
styles.css
```

## Deploy On Vercel

1. Go to Vercel and choose **Add New Project**.
2. Import the GitHub repository.
3. Keep the framework preset as **Other** or **Static**.
4. Leave the build command empty.
5. Leave the output directory empty or set it to the project root.
6. Deploy.

Because this is a static website, Vercel can serve it directly from `index.html`.

## Deployment Notes

- All local site paths are relative, so the site works after upload and deployment.
- The stylesheet is linked with `styles.css`.
- The JavaScript file is linked with `script.js`.
- The CV download buttons link to `Augusto-Bastos-CV.pdf`.
- The current PDF is a placeholder and should be replaced later with the final CV using the same filename.
- The profile photo, dashboard screenshots, LinkedIn URL and email are placeholders and can be updated later.
