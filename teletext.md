---
layout: page
title: "Teletext Pages"
permalink: /teletext_about
---
Here you can navigate Teletext pages which I've pulled off of VHS tapes. FAQ follows.

Some dates may be incorrect and you'll notice various typos that haven't been fixed yet - please bear with me!

<table>
  {% for capture in site.data.teletextcaptures.captures %}
    <tr>
      <td>
        <a href="{{capture.capture_folder}}/">{{capture.broadcast_date}}</a>
      </td>
      <td>
        {{capture.service}}
      </td>
      <td>
        {{capture.channel}}
      </td>
      <td>
        {{capture.quality}}
      </td>
      <td>
        {{capture.notable_content}}
      </td>
    </tr>
  {% endfor %}
</table>






|    | Broadcast Date                                            | Tape  | Service      | Channel        | Quality  | Notable Content |
| ---| --------------------------------------------------------- | ----- | ----------- |--------------- | -------  |                 |
|    |[1995-06-29 00:18](teletext\1995-06-29-00-18_V0003_9611\) | V0003 | Teletext      | ITV(?)         | ★★★★☆  |                 |
|    |[1996-04-27 19:01](teletext\1996-04-27-19-01_V0003_7211\) | V0003 | Disney      | Disney Channel         | ★★★★☆  |                 |
|    |[1996-05-11 15:44](teletext\1996-05-11-15-44_V0005\) | V0005 | Ceefax      | BBC(?)         | ★★☆☆☆  |                 |
|    <img src="teletext\1997-05-09-21-35_V0003\thumb.png" width="50"/><img src="teletext\1997-05-09-21-35_V0003\images\P100-0001.png" width="50"/>|[1997-05-09 21-35](teletext\1997-05-09-21-35_V0003\) | V0003 | Ceefax      | BBC(?)         | ★★★☆☆  |                 |
|    |[1997-05-09 22-11](teletext\1997-05-09-22-11_V0003\) | V0003 | Ceefax      | BBC(?)         | ★★★★☆  |                 |
|    |[2000-01-08 16:12](teletext\2000-01-08-16-12_V0005\) | V0005 | VH1         | VH1            | ★☆☆☆☆  |                 |
|    |[2002-08-31 19:31](teletext\2002-08-31-19-31_V0006\) | V0006 | Ceefax      | BBC(?)         | ★★★☆☆  |                 |
|    |[unknown-11-19 14:41](teletext\unknown-11-19-14-41_V0003_14412\) | V0003 | QVC      | QVC         | ☆☆☆☆☆  |                 |

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