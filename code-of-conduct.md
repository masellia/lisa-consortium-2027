---
layout: conference
title: Code of Conduct
description: Code of Conduct for the LISA Consortium Meeting 2027 in L'Aquila.
permalink: /code-of-conduct/
conference: lisa-consortium-2027
conference_page: code-of-conduct
conference_section: information
---

{% assign conference = site.data.conferences[page.conference] %}

<section class="conference-page-intro">
  <p class="conference-section-kicker">Respect / safety / inclusion</p>
  <h1>Code of Conduct</h1>
  <p>The LISA Consortium Meeting 2027 follows the official LISA Consortium Code of Conduct.</p>
</section>

<section class="conference-page-body" aria-label="Code of Conduct">
  <div class="conference-prose">
  <p>The official policy applies to all Consortium members and everyone attending Consortium activities, including scientific sessions, social events, tours, and other meeting-related activities.</p>
  <p><a href="{{ conference.code_of_conduct.policy_url }}" target="_blank" rel="noopener noreferrer"><strong>Read the official LISA Consortium Code of Conduct</strong></a></p>

  <h2>Meeting expectations</h2>
  <p>The LISA Consortium is committed to an inclusive, safe, and stimulating environment. Harassment, bullying, discrimination, and retaliation are not tolerated. All participants are expected to act with honesty and integrity, respect the views and contributions of others, and help create a professional environment free from inappropriate or offensive language and behaviour.</p>

  <h2>Reporting and support</h2>
  <p>The LISA Consortium provides an Ombuds office as a confidential, low-threshold resource for discussing possible violations and has a grievance procedure for addressing complaints. During the meeting, concerns may also be raised with any of the following local organizing committee contacts:</p>
  <div class="conference-conduct-contact">
    <strong>Local organizing committee</strong>
    <ul>
      {% for contact in conference.code_of_conduct.contacts %}
        <li><a href="mailto:{{ contact.email }}">{{ contact.name }}</a></li>
      {% endfor %}
    </ul>
  </div>
  </div>
</section>
