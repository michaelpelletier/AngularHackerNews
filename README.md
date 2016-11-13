# AngularHackerNews

This is a trial created over the course of about 2 days as part of a programming
test for a job. It is a simple client for Hacker News created with Angular 1.5.8,
that makes use of the Hacker News API provided by Firebase
(https://hacker-news.firebaseio.com/).

Please note that this is mostly a "proof of concept" and is not intended to be
a "perfect" representation of a recreation of the site. It does not currently
support filtering on the main page, authentication, searching, posting, or the
viewing of user profiles. Where applicable, I have linked to the live website
for Hacker News.

There is (limited) Jasmine coverage included in this, again, largely as a proof
of concept and not intended to be a finished project. I would love to finish
this one day, but for the time being it has served its purpose.

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
