---
layout: page
title: Contact Me
no_groups: false
permalink: /contact/
---

I would love to hear from you! Please send me your comments, questions, or any thoughts on this website, survey markers, GIS, airway beacons, or surveying in general.

<div class="container contact-form">
    <form name="contact" action="/contact-success" method="POST" class="form" data-netlify="true">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Name" id="name" name="name" tabindex="1" required>
            <label for="name" class="form-label">Name</label>
        </div>
        <div class="form-group">
            <input type="email" class="form-control" placeholder="me@example.com" id="email" name="email" tabindex="2" required>
            <label for="email" class="form-label">Email</label>
        </div>
        <div class="form-group">
            <input type="url" class="form-control" placeholder="www.example.com" id="website" name="website" tabindex="2" required>
            <label for="website" class="form-label">Website</label>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Airway Beacons" id="subject" name="subject" tabindex="2" required>
            <label for="subject" class="form-label">Subject</label>
        </div>
        <div class="form-group">
            <textarea id="comment" name="comment" placeholder="Comment" class="form-control" tabindex="3" required></textarea>
            <label for="comment" class="form-label textarea">Comment</label>
        </div>
        <button type="submit">Send Message</button>
    </form>
</div>