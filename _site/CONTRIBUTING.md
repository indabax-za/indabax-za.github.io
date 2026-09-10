# Editing this website

This is a plain website built with a tool called Jekyll. You do **not**
need to install anything to edit text content — you can do it directly on
github.com in your browser. This guide covers the edits you'll need 95% of
the time.

## The one rule to remember

Every page on the site is one file ending in `.md`. Find the file for the
page you want to change, click the pencil (✏️) icon on github.com to edit
it, make your change, and click **"Commit changes"** at the bottom. The
live site updates automatically within a minute or two.

## Which file is which page?

| Page on the site | File to edit |
|---|---|
| Home | `index.md` |
| Program | `program.md` |
| Speakers | `speakers.md` |
| Venue | `venue.md` |
| Register | `register.md` |

## Common tasks

**Change some text on a page**
Open the file, find the sentence, edit it, commit. That's it.

**Add a speaker**
Open `speakers.md`. Copy one existing speaker block (starts with `###` and
ends before the next `###`), paste it at the bottom, and fill in the name,
title, and bio.

**Add a row to a schedule or fee table**
Find the table (the lines with lots of `|` characters). Copy one row,
paste it where you want the new row, and edit the text between the `|`
symbols. Keep the `|` symbols in place — they're what makes it a table.

**Add or rename a tab in the navigation bar**
Open `_config.yml` and look for the `nav:` section. Follow the
instructions in the comments there. You do not need to edit any other file
for this.

**Add a whole new page**
1. Copy `venue.md` and rename the copy, e.g. `sponsors.md`.
2. Delete the placeholder content and write the new page's content.
3. Add an entry for it in the `nav:` list in `_config.yml`, using
   `/sponsors.html` as the url (match the filename, swapping `.md` for
   `.html`).

**Add a header image to a page**
Every page shows a plain color banner at the top by default. To use a
photo instead:
1. Put the image file in `assets/images/` (e.g. `assets/images/venue-hall.jpg`).
2. Open the `.md` file for that page and add two lines to the very top,
   inside the `---` section:
   ```
   hero_image: /assets/images/venue-hall.jpg
   hero_alt: "The main conference hall"
   ```
   `hero_alt` is a short text description of the photo (read aloud by
   screen readers) — describe what's actually in the image.
3. Commit. The photo now appears at the top of that page.

To remove a photo and go back to the plain color banner, delete those two
lines.

**Change the site's colors or fonts**
Everything is controlled from `assets/style.css`. The colors and fonts are
listed at the very top of that file with comments explaining each one.
You shouldn't need to touch anything else in that file.

## Formatting cheat sheet (Markdown)

This is the plain-text formatting used in all `.md` files:

```
# Big heading
## Smaller heading

**bold text**
*italic text*

[link text](https://example.com)

- bullet point
- another bullet point

| Column 1 | Column 2 |
|---|---|
| Row text | Row text |
```

## If something looks broken

- Check that you didn't accidentally delete a line that starts with `---`
  at the very top of a file — every page needs exactly two of these lines
  near the top (they wrap the page's title).
- If a table looks wrong, check that every row has the same number of `|`
  characters as the header row.
- GitHub Pages takes a minute or two to rebuild after you commit — refresh
  after waiting a bit before assuming something's wrong.
- Worst case: use GitHub's history on the file (the "History" button) to
  see the previous version and revert to it.

## Technical notes (for whoever sets this up / hosts it)

- This site is Jekyll, using GitHub Pages' built-in Jekyll build — there is
  no build step to run, no dependencies to install, and no external theme.
  Everything the site needs is in this repository.
- Enable it under repo **Settings → Pages → Build and deployment → Source:
  Deploy from a branch**, and pick the branch this content lives on.
- The `_config.yml` file has `url` and `baseurl` settings near the top that
  need to match your actual GitHub Pages address.
- There is deliberately no JavaScript, no CSS framework, and no external
  font loading, so there's nothing that can go out of date or stop working
  on its own. If future maintainers add complexity, it's worth asking
  whether it's worth the maintenance cost for a site this small.
