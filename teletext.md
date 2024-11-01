---
layout: page
title: "Teletext Pages"
permalink: /teletext/
tag: teletext
---
Here you can navigate Teletext pages which I've pulled off of VHS tapes. FAQ follows.

Some dates may be incorrect and you'll notice various typos that haven't been fixed yet - please bear with me!

<table>
  <tr>
    <th></th>
    <th>Broadcast Date</th>
    <th>Service</th>
    <th>Channel</th>
    <th>Quality</th>
    <th>Notable Content</th>
  </tr>
  {% for capture in site.data.teletextcaptures.captures %}
    <tr>
      <td>
      </td>
      <td>
        <a href="/teletext/{{capture.capture_folder}}/">{{capture.broadcast_date}}</a>
      </td>
      <td>
        {{capture.service}}
      </td>
      <td>
        {{capture.channel}}
      </td>
      <td>
        {% assign stars = capture.quality | plus: 0 %}  <!-- Convert to integer just in case -->
        {% for i in (1..stars) %}
          ★
        {% endfor %}
        {% for i in (stars..4) %}
          ☆
        {% endfor %}
      </td>
      <td>
        {{capture.notable_content}}
      </td>
    </tr>
  {% endfor %}
</table>

## FAQ

### Why?
Why not.

### No but seriously though.
I'm interested in the recovery, preservation and archiving of data. Whether that be radio recordings on reel to reel tapes or old TV shows.

Teletext in particular is a really interesting one. The ONLY place that teletext files now exist are on the tapes used to make home recordings back in the day. These were fleeting pieces of information that were never preserved by those generating it.

### Why does that matter?
Think about all the stuff that was served on teletext. Weather reports, flight information, gig reviews, news articles, interviews. Especially for editorial type articles this is the only place they were ever broadcast. And the only way that information can be retrieved and preserved.

### Is it hard?
Not hard, just awkward. 99% of the heavy lifting has been done by the amazing Alistair Buxton and his phenomenal [vhs-teletext](https://github.com/ali1234/vhs-teletext) tooling. It still requires a mix of the right setup, the right hardware, patience and time though.