---
layout: page
title: Alumni Spotlights
---
# Interviews
Read through interviews with previous UC Jazz alums


<div>
  {% for post in site.posts %}
    <div>
        <h2>{{ post.title }}</h2>
        <div><b>{{ post.interviewDate | date: "%b %d, %Y" }}</b></div>
        <p>{{ post.description }}</p>
        <a href="{{ post.url }}">Read the full interview</a>
    </div>
    <hr />
  {% endfor %}
</div>


