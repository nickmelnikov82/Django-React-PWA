Noel Wilson
===============================================================================

## Build status

[![CircleCI](https://circleci.com/gh/jwnwilson/django_react_redux_webapp.svg?style=svg)](https://circleci.com/gh/jwnwilson/django_react_redux_webapp)

## Description

My personal website rebuilt using:

- Django 1.11
- React 
- Redux
- Wagtail CMS
- Django Restful API
- Docker
- CI
- Kubernetes (ish)

Features:
- CMS to power Django Restful API
- API data to power a modular react app
- Webpack spliting, each reach component is loaded as needed
- Setup as a PWA with limit offline support

This is my attempt to build a reusable project to build any type of website I need, completely over-engineered for learning and fun but also I can take parts of it away and use in other project. I also wanted to use this project to see how many pieces of tech I could glue together to see how well they worked together, I think the results I got have been better than I expected.

## Setup

To start a local dev server for the front end and backend run:

$  make build

$  make run

## To Do

- Move server to VM / Kubernetes with worker to prerender html
- Fix test --nomigrations 
- Add tests for FE and BE
- Add service worker job for API page calls
- Add pagination
- Remove jquery replace with modular libraries
- Investigate integration tests Cyprus
- Separate Snippets in CMS by tags

## Kubernetes TO DO

- Master server instance connected to media volume as write for cms
- Slave servers instances connected to media volume as read only for website
- Connect nginx to media volume as read only
