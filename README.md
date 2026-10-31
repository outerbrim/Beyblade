# Beyblade X Tracker

A phone-first web app for Beyblade X: score battles, build combos and decks, track your collection, and keep stats, tournaments and battle clips. Sign in with Discord to sync between your phone and desktop.

It's a plain static site (HTML, CSS and JavaScript, no build step), so it runs free on GitHub Pages. Discord sign-in and sync use a free Supabase project.

## Features

- **Scorer**
  - Casual or Competitive mode, each saved to its own stats.
  - Spin +1, Burst +2, Over +2, Xtreme +3.
  - Launch-error button showing how many faults are left.
  - Undo, a 3-2-1 "Go Shoot" countdown with sound, and live win rates.
  - Points to win and the launch-error limit are adjustable.
- **Camera**
  - Live preview inside the app, with a frame-rate picker based on what your camera supports.
  - Recording can start on the countdown and stops automatically when the match ends. The clip is saved with the date, players and score.
- **Build**
  - Combo builder (blade, CX assist, ratchet, bit) using the parts you own.
  - 3-combo decks, with a check for duplicate parts.
- **Collection**
  - Hasbro and Takara Tomy sets: starters, boosters, random boosters, dual packs, deck sets and event releases. Adding a set fills in its parts.
  - Loose and custom parts.
  - Your own part photos, with bulk import and automatic white-background removal.
  - Attack/Defence/Stamina/Balance tags.
- **Insights**
  - Casual and competitive kept separate.
  - Finish-type breakdown, player table, combo round win rates, and best blades, ratchets and bits.
- **Tournaments:** collect competitive matches into events with standings.
- **Players:** profiles with records, favourite combos and match history.
- **Clips**
  - Storage meter, favourites and delete.
  - Save to your gallery through the phone's share sheet.
  - Slow-motion playback from 0.1× to 1×, and frame-by-frame stepping.

## 1. Put it on GitHub

**In the browser (no tools needed)**

1. On GitHub, click **New repository**. Name it, for example, `beyx-tracker`, and leave it empty.
2. On the new repo page, click **uploading an existing file**.
3. Drag in everything inside this folder, including the `icons` and `supabase` folders, then **Commit changes**.

**Or with git**

```bash
cd beyx-tracker
git init
git add .
git commit -m "Beyblade X Tracker"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/beyx-tracker.git
git push -u origin main
```

## 2. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
3. After a minute your app is live at `https://YOUR-USERNAME.github.io/beyx-tracker/`.

The app works at this point, saving on each device only. The next step adds Discord sign-in and sync.

## 3. Turn on Discord sign-in

You'll need your GitHub Pages address from step 2.

### a. Create the database (Supabase)

1. Sign up at [supabase.com](https://supabase.com) and create a **New project**. The free plan is plenty.
2. Open **SQL Editor**, paste in the contents of [`supabase/schema.sql`](supabase/schema.sql), and click **Run**. This creates one private table. Row-level security means each Discord account can only read and write its own data.
3. Open **Authentication → Sign In / Providers → Discord** and keep the page open. It shows a **Callback URL** like `https://abcdefghijkl.supabase.co/auth/v1/callback`. Copy it.

### b. Create the Discord app

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and click **New Application**. Name it something like "BeyX Tracker".
2. Open **OAuth2**:
   - Copy the **Client ID**.
   - Click **Reset Secret** and copy the **Client Secret**.
   - Under **Redirects**, add the Supabase **Callback URL** from step a.3, then **Save Changes**.

### c. Connect them

1. Back in Supabase on the **Discord** provider page, turn it on and paste the **Client ID** and **Client Secret**. Save.
2. Go to **Authentication → URL Configuration**:
   - **Site URL:** your Pages address, for example `https://YOUR-USERNAME.github.io/beyx-tracker/`.
   - **Redirect URLs:** add the same address. Add `http://localhost:8000/` as well if you'll test locally.
3. Go to **Project Settings → API** (or **API Keys**) and copy the **Project URL** and the **anon / public** key.
4. Put both into [`config.js`](config.js):

   ```js
   window.BEYX_CONFIG = {
     supabaseUrl: 'https://abcdefghijkl.supabase.co',
     supabaseAnonKey: 'eyJhbGciOi...'
   };
   ```

5. Commit the change. In the browser, open `config.js` on GitHub, click the pencil, paste, then **Commit**.

Reload the app and **Sign in with Discord** appears in Setup and the sidebar. Sign in on your phone and your desktop and everything syncs live. Video files are the exception; see "Clips and storage" below.

> The anon key is meant to be public, so it's fine in a public repo. Never put the **service_role** key or the Discord **Client Secret** in this repo. The secret only goes into Supabase.

## 4. Bring over your data from the earlier version

1. In the earlier version of the app, open **Setup → Export backup**.
2. In this version, sign in with Discord first, then open **Setup → Import backup** and choose that file.

Everything you import goes into your Discord account and syncs to your other devices.

## Install on your phone

Open your Pages address and add it to your home screen. It then opens full-screen like a normal app.

- **iPhone (Safari):** Share → Add to Home Screen.
- **Android (Chrome):** ⋮ → Add to Home screen / Install app.

## Clips and storage

- **Where clips live:** videos are stored in the browser on the device that recorded them. Match details sync everywhere; the video files don't, because they're too big to sync cheaply.
- **Keeping clips safe:** use **Save** on a clip to put it in your gallery.
- **Storage meter:** the meter in Clips shows how much space the browser gives the app on that phone.
- **Frame rate:** phone browsers usually record at 30 or 60 fps. The picker only offers what your camera reports. For 120/240 fps slow-mo, film with your phone's camera app in Slo-mo mode, then use **Clips → Import video**.
- **HTTPS required:** the camera only works over HTTPS (GitHub Pages) or on `localhost`.

## Run it locally

Any static web server works:

```bash
cd beyx-tracker
python3 -m http.server 8000
# open http://localhost:8000/
```

## Project layout

```
beyx-tracker/
├── index.html            page shell
├── styles.css            design tokens (light + dark), layout, components
├── app.js                the app: parts database, scorer, camera, sync, views
├── config.js             your Supabase URL + anon key (fill in)
├── manifest.webmanifest  home-screen install
├── icons/                app icons
└── supabase/schema.sql   database table + security rules
```

### Updating the parts database

Parts and products live at the top of `app.js`:

| What you're adding | Where it goes |
|---|---|
| Blades, with type and series | `BLADES` |
| Hasbro names | `HASBRO` |
| CX assist blades | `ASSISTS` |
| Ratchets | `RATCHETS` |
| Bits | `BITS` |
| Products, written as `"Blade\|Assist\|Ratchet\|Bit"` combos | `SETS` |

New releases are usually one line in `SETS`, plus a line in `BLADES` if the blade is new.

## Notes

Fan-made and not affiliated with Takara Tomy or Hasbro. Beyblade and Beyblade X are trademarks of their owners. Part icons are drawn by the app; any photos are ones you add yourself.
