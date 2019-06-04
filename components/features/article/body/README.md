# Fusion Feature Implementation: Article Body

This feature is an example of implementing an Article Body feature in PageBuilder Fusion, using a Arc Core Component.

## Notes about usage

This feature can only inherit from Global Content on a PageBuilder page or template.

You must be using the `content-api-v4` content source in order to inherit global content.

In turn, this also relies on you having a `.env` file properly configured. TODO: write .env recipe

You also must have a proper implementation of mock multisite set up. TODO: Add the recipe for mocking up multisite properly.

**To use on a page:**

1. In the *Page Content* tab, select `content-api-v4` for the global content source for the page.
1. From the site dropdown at the top of the page, select the site you are rendering content from.
1. Pass in a `website_url` for the story you'd like to render. Note: this story must be from the site you want to render and have chosen the site from the dropdown.
1. You should see article content elements appear. Please see the (Core Component Repo)[TODO ADD LINK HERE] to see what is currently supported.

## I want to tweak the underlying markup for one or more content elements -- how do I do that?

You can use the `renderElement` prop! (Take a look at an example implementation via docz)[https://github.com/wapopartners/feature_article-body/blob/dev/src/article-body.mdx#L23-L28]. This allows you to use as many of our underlying components as you'd like, and overwrite any where you need more fine-tuned control.

## I don't have access to the Core Component repo. What gives?

Happy to give you access! Please send your Github name to your Technical Delivery Manager, and say: `Could I please get access to the Core Components?` We will add you to a Github team that has Read access to the components.