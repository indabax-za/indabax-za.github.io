# Conference site

A minimal Jekyll site, built to be maintained by non-technical volunteers
over many years with no build tools and no external theme.

- **To edit content:** see [`CONTRIBUTING.md`](CONTRIBUTING.md) — this
  covers everything most editors will ever need, entirely through
  github.com in the browser.
- **To set up hosting:** this is designed to run on GitHub Pages with zero
  configuration beyond enabling it in the repo settings (see the bottom of
  `CONTRIBUTING.md`).
- **To preview locally (optional, only needed for bigger changes):** see
  "Local preview" below.

## Local preview

There's no `index.html` in this repo — Jekyll builds the actual HTML
pages from the `.md` files and the layout when you run it. To see the
site as a real webpage before pushing changes, you run that build on
your own computer.

**One-time setup**

1. Install Ruby, if you don't already have it:
   - **Mac:** `brew install ruby` (the version macOS ships with is too
     old). Or install [rbenv](https://github.com/rbenv/rbenv).
   - **Windows:** install [RubyInstaller](https://rubyinstaller.org/) —
     pick the option that includes "MSYS2 and development toolchain."
   - **Linux:** `sudo apt install ruby-full build-essential` (Debian/
     Ubuntu) or your distro's equivalent.
2. Install Bundler: `gem install bundler`
3. From inside this folder, install the site's dependencies:
   ```
   bundle install
   ```

**Every time you want to preview**

```
bundle exec jekyll serve
```

Then open **http://localhost:4000** in a browser. Leave the command
running — it watches your files and rebuilds automatically when you save
a change, so you can just refresh the browser tab to see edits. Press
`Ctrl+C` in the terminal to stop it.

**If you'd rather not install Ruby at all:** push your changes to a
separate branch (e.g. `preview`) and turn on GitHub Pages for that branch
in a scratch/test repo, or open a pull request — GitHub Pages will build
it on their servers and give you a live preview URL, no local install
needed. Slower feedback loop, but zero setup.

## File map

```
_config.yml         site title, nav tabs, footer text — the "settings" file
_layouts/default.html   the one shared page template (header, nav, footer)
assets/style.css    all colors, fonts, and spacing — the only design file
index.md            Home page
program.md           Program page
speakers.md          Speakers page
venue.md             Venue page
register.md          Register page
CONTRIBUTING.md      plain-language guide for editors
```
