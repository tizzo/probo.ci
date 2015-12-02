---
layout: "faq"
title: FAQ
class: faq
permalink: /faq/
published: true
---
<a id="faq-1"></a>

## How is it different from other CI tools? 
When your build is finished, the environment where your build ran does not go away.  Instead, you receive a link where you can go see the result before changes are merged into the master branch, and share it with your stakeholders. That way, your stakeholders are brought in much earlier in the process, saving the whole company huge amounts of time, money and aggravation.

<a id="faq-2"></a>

## Can I use it with my other testing tools?
Yes! You can run your test suite on Probo.ci. If you already have a CI pipeline and just want to add QA environments you can run Probo.ci alongside another test runner like Jenkins or Travis.CI in order to provide QA environments.

<a id="faq-3"></a>

## Can I test with an actual database or do I need to do a fresh install of my app every time?
Yes, you can use your own database! Probo gives you the ability to upload copies of your production database (though you may want to sanitize and shrink it first) to use in your build. You can upload your database nightly and always be testing against recent data from production.

<a id="faq-4"></a>

## Can I upload my files to Probo?
Absolutely. That’s how you use your actual database. We allow you to upload any build asset that you want and then use it from within your build steps.

<a id="faq-5"></a>

## Is there a hosted version of Probo and where is it hosted?
Probo.ci is hosted on Packet.net that provides some of the fastest bare metal servers available today. This allows us to scale up and down with the ease of more traditional cloud providers and also allows us to provide the fastest builds possible without any abstraction or virtualization overhead. The core of Probo is open source so you can run a copy of it in any Linux environment that supports Docker and Node.js.

<a id="faq-6"></a>

## What can I run inside of Probo?
Right now, you can run any LAMP stack application complete with selenium testing and solr search. We will be adding additional images with other stacks. If there is something you want to use, please shoot us a note.

<a id="faq-7"></a>

## Can I use probo to host all of my websites?
Probo is not a hosting solution. We provide environments for quality assurance and testing but they are not optimized nor intended for production use.

<a id="faq-8"></a>

## How many containers can I have at the same time?
At the moment, the number of containers that you can have at once is unlimited. When we release our pricing plans the number of containers you can have at one time will vary with the plan that you select.

<a id="faq-9"></a>

## What’s that shape?
The Probo logo is a rhombic triacontahedron, a convex polyhedron with 30 rhombic faces, 60 edges and 32 vertices of two types. 
