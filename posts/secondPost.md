---
title: 'When to use Static vs Server-side rendering'
date: '2023-07-02'
---

Use *** Static Generation *** (with and without data) 
whenever possible because your page can be built once and served by CDN, which
makes it a lot faster than having a server render the page on every request.

Pages that use Static Gegneration, including:

- Marketing Pages
- Blog posts
- E-commerce product listings
- Help and Documentation

The question you should be asking: "Can I pre-render this page **ahead** of a
user's request?" If the answer 'yes', use Static rendering.

Don't use static generation if you can't pre-render a page: for example, the
page's content changes on every request. 

Server side rendering is better if the page needs to be dynamic or up-to-date.
Or you can skip pre-rendering and use client-side Javascript to populate the
data. 









