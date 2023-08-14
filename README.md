# vivendo-na-europa

[![Netlify Status](https://api.netlify.com/api/v1/badges/7d3912dc-5bad-4b74-a861-817906134ea6/deploy-status)](https://app.netlify.com/sites/vivendonaeuropa/deploys)

## Setup Instructions

Clone the repo, and fist install the dependencies

```
npm install
```

Then, start the local env

```
npm run dev
```

## Todo List

- [x] Example

### Affiliate Links

- [x] Add conditional rendering (condition && <Tag /> ) on Affiliate link and header that is visible on the homepage
- [x] Refactor logic to use map and have only one AffiliateCard and have data coming from an array

#### Later

- [ ] Fetch affiliate links from contentful
- [ ] Fix style props > instead of injecting the colors, pass the theme as a prop

### General

- [ ] Move all images to [imagekit.io](https://imagekit.io/) and check how to resize them
- [ ] Move all icons to icons folder
- [ ] Fix home responsiveness
- [ ] Upgrate project to typescript (javascript with types)
