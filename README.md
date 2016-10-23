# AngularHackerNews

Creation of a client for Hacker News in Angular 1.5.8. Makes use of
the Hacker News API provided by Firebase (https://hacker-news.firebaseio.com/).

# Existing issues

Angular routing doesn't work quite right for pagination. Clicking to load
more articles works correctly, and appending the page filtering to the URL
works correctly (eg: `#/?page=2`), but clicking the "load more articles"
button does not automatically change the URL. Explosions happened when I
tried to do that.

# Instructions

1. Clone repo
2. `npm install`
3. Make sure gulp is installed globally (`npm install -g gulp`).

## Run App
1. `gulp`
2. `http://localhost:4000/`

## Run Tests
1. `gulp jasmine`
2. `http://localhost:8888`
