---
layout: default
title: Probo FAQ
class: documentation
permalink: /docs/faq/
---
<section>
  <ul class="side-nav">
  {% for link in site.data.side-nav %}
      <li><a href="{{ link.link }}">{{ link.title }}</a></li>
  {% endfor %}
  </ul>
</section>

### How long does it take for Probo to build a site build?

Once a Pull Request is submitted, Probo starts building a site for each automated test setup. The time it takes to finish building a site depends on the complexity of the database and code. A fresh Drupal site install takes about 1 minute. A medium sized site might take about 10 minutes. A large complex site can take up to 2 hours.

