---
layout: "about"
title: Our team
class: zivtech
permalink: /about/team/
published: true
---
### Meet the people who make the rhombic triacontahedron spin.

<div class="team">
    {% for member in site.data.members %}
    <div class="member">
      <div class="pic"><img src="/about/images/{{ member.pic }}.jpg" alt="{{ member.name }}"></div>
      <div class="name">{{ member.name }}</div>
      <div class="title">{{ member.title }}</div>
    </div>
    {% endfor %}
</div>