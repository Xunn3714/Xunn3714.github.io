# Lost Mysteries of WPI

A mobile-first main page for a campus puzzle trail. Visitors see their collected locations and progress immediately, followed by a compact list of five planned puzzle stops. Progress is stored in the visitor's current browser through `localStorage`.

## Run locally

Open `index.html` in a browser. The site uses plain HTML, CSS, and JavaScript, so there is no build step.

## Publish with GitHub Pages

This repository is named `Xunn3714.github.io`. In the repository's **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, then save. With those settings, pushes to `main` publish the root `index.html` at `https://xunn3714.github.io/`.

## Team integration

The current location list comes from the project one-pager and can be edited in `script.js` once final stops are decided. Puzzle pages and QR-code routes can link back to the `#locations` section. Account-based progress can be connected when the login work is ready.
