---
title: NGS PID Search Bookmarklet
author: Zhanna
date: '2014-11-23T16:56:28-05:00'
tags: [NGS]
excerpt: >-
  This bookmarklet provides a quick, convenient way to go directly to a datasheet for a known PID.
featured_image: 
---

I wrote this little bookmarklet a _long_ time ago, but I and several other people are still finding it useful, so I wanted to highlight it here.  

[NGS PID Search](javascript:(function(){void(str=prompt('PID:',''));if(str){location.href='http://www.ngs.noaa.gov/cgi-bin/ds_mark.prl?PidBox='+escape(str);}})();)

Drag the link to your bookmarks bar/favorites bar to install the bookmarklet.

At the moment, the bookmarklet only searches by PID, which must be known ahead of time. I plan to add [other methods of searching](http://www.ngs.noaa.gov/cgi-bin/get_mark_list.prl) in the future.

The [bookmarklet code](https://github.com/jengalas/NGS-bookmarklet) is also available on GitHub.