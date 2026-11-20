# Erkinov Muhammad - Portfolio

React + Vite, Redux Toolkit, Supabase, Framer Motion. Ingliz tili / O‘zbek tili.

## Mahalliy muhitda ishga tushirish
1. `npm install`
2. `.env.example` faylini `.env` nomi bilan nusxalang va unga Supabase **anon** kalitingizni kiriting.
3. Supabase boshqaruv panelida (Dashboard) -> SQL Editor bo‘limiga o‘ting va `supabase/schema.sql` faylidagi kodni ishga tushiring.
4. `npm run dev`

Xabarlar Supabase ichidagi Table Editor -> `contact_messages` jadvalida paydo bo‘ladi.

## Netlify-ga joylashtirish (Deploy)
1. Loyihani GitHub-ga yuklang.
2. Netlify -> "Add new site" -> "Import from Git" bosqichlarini bajaring. Loyihani yig‘ish (build) sozlamalari `netlify.toml` faylidan olinadi.
3. Sayt sozlamalari (Site settings) -> "Environment variables" bo‘limiga `VITE_SUPABASE_URL` va `VITE_SUPABASE_ANON_KEY` o‘zgaruvchilarini qo‘shing, so‘ngra loyihani qayta joylashtiring (redeploy).

## Tarkibni tahrirlash
- Loyihalar: `src/data/projects.js` (tavsiflar `src/i18n/en.js` va `uz.js` fayllarida joylashgan)
- Ko‘nikmalar: `src/data/skills.js`; aloqa havolalari: `src/data/profile.js`