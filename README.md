This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To run in development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

First of all, i decided to use NextJS since this application seems like the app is not internal use, so you would need SEO, and that's where NextJS excels.

I used server-side rendering on purpose in both pages, because NextJS recommends to use server side by default, and only when there's client interactions (button clicks, data that changes when user interacts) you turn it into a client component (or prefereably: move the interactive code to another component, which you declare as a client component).

But i have also installed REACT QUERY plugin, just to demonstrate how i would use it to fetch data on the client side. I created a new instance of AXIOS where i set up the baseURL, headers (this is where the authentication header would also be passed normally), then i have my api calls in libs/api.ts and then in hooks/queries you can find the react query hoooks i have set up, ready to be called into client side components.

I have also used Typescript, even though it wasn't one of the requirements. This is because i wanted to show it's importance in your application in particular, because it has so many users and a big team is working on it, you need to maintain a strict approach to types.

## Folder structure

The pages are inside of the /app folder. I like creating a (homepage) for the "/" route just to keep it more organized, and not leave it in the root folder.

Then you have src/components folder. This is where i would put all the shared components. And then inside the pages (for example in app/(homepage)/components), you can see another /components folder. This is for components that we are not currently re-using anywhere. So if we know at the moment a component will not be reused, and it's specific to a particular page, i like keeping it inside of that folder so that it's easy to find and know where it's being used. If in the future we need to make it more general, i would refactor it to make it more abstract, and move it into the /src/components folder.

The you have /store where the Zustand store lives. Inside /src/hooks i keep all hooks. Inside /hooks/queries i would configure all my GET requests using React Query, and if i had a POST, PUT or DELETE request i would create a similar hook inside of a /hooks/mutations folder. Inside libs i have api.ts (the api calls i need to make), axios.ts (the axios instance, where i configure axios with baseURL and neccesary headers), data.ts (this is where i kept the dummy data). Styles is where the global styles live. Utils is where i have my Typescript types, and utils is where i have a file with global functions (helper functions) that i will maybe need to reuse.

For JEST tests, i placed them directly beside the component index file, when it's related to the component. When it's more general (like a unit test for a function or something), i would place it higher up in a **tests** folder.

For CYPRESS, i placed my test in /cypress/e2e

## CI configuration using Github Actions

As an extra, i have also created a CI configuration using Github Actions, which you can find in .github/workflows. What this allows us to do is whenever a PR is created by a developer, the Jest & Cypress tests will be automatically run, and merging will not be allowed if the tests have not passed.
