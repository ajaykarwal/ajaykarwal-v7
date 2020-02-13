---
template: page
title: "Influences"
slug: "influences"
---

Like a dwarf standing on the shoulders of giants, I wouldn't be where I am today if it wasn't for the influence of some of the best in the industry.

This is a list of people who have taught me new skills, new techniques or simply just inspired me to aim a little higher.

## People I'd like to meet

<ul class="influences">
{% for person in site.data.influences %}
  <li>
    {% if person.met %}<strike>{%endif%}
    <a href="https://twitter.com/{{ person.twitter }}" target="_blank">
      {{ person.name }}
    </a>
    {% if person.met %}</strike>{%endif%}
  </li>
{% endfor %}
</ul>

If you're on the list and fancy grabbing a coffee some day, [Get in touch](/contact/).
