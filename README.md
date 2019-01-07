Check out the final version created by Kent https://github.com/kentcdodds/netlify-shortener

# netlify-short-url

Just a test to see if I could use netlify's redirect as an url shortener.

Got the inspiration from watching [this video from Kent C. Dodds](https://rosell.io/kcd-video)

I started by just adding the `_redirects` file to check if that worked. Then I wanted to build something that I could edit outside of git, so I added [netlify-cms](https://github.com/netlify/netlify-cms) and a small build script to generate the `_redirects` file for me. That worked out okay, but in the end, it was not more comfortable than editing the file in git. All of that work is still on the [netlify-cms branch](https://rosell.io/cms-branch) if someone later wants to look at it.
