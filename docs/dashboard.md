---
layout: default
title: Probo Dashboard
class: documentation
permalink: /docs/dashboard/
---
<section>
  <ul class="side-nav">
  {% for link in site.data.side-nav %}
      <li><a href="{{ link.link }}">{{ link.title }}</a></li>
  {% endfor %}
  </ul>
</section>
