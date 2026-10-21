# Ghalia BI Portfolio

A BI-first portfolio with AI as a differentiator.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the URL shown by Vite (usually http://localhost:5173).

## 3. Add your photo

Put your photo here:

```text
public/images/ghalia.jpg
```

Then replace the `photo-placeholder` block in `src/App.jsx` with:

```jsx
<img className="profile-photo" src="/images/ghalia.jpg" alt="Ghalia Abdelkebir" />
```

And add this to `src/styles.css`:

```css
.profile-photo {
  width: 100%;
  min-height: 290px;
  max-height: 390px;
  object-fit: cover;
  border-radius: 20px;
}
```

## 4. Add videos

Place your videos in:

```text
public/videos/
```

Use these exact names or edit `src/projects.js`:

- `churn-demo.mp4`
- `restaurant-bi.mp4`
- `firmaa-demo.mp4`
- `breast-cancer-demo.mp4`

You can replace a video later while keeping the same filename. No code change is needed.

## 5. Add CV

Put your BI CV here:

```text
public/cv/Ghalia_Abdelkebir_CV_BI_DataAnalytics.pdf
```

## 6. Update contact details

Edit:

```text
src/config.js
```

Replace email, LinkedIn and GitHub placeholders.

## 7. Build

```bash
npm run build
```

## 8. Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to Vercel.
3. Import the GitHub repository.
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

Every future GitHub push will redeploy automatically.
