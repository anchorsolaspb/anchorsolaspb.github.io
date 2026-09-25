# Anchor Solas Pipe Band website: changelog

## v1.7.0 (25 Sep 2026)
- Home page photo is now a slideshow that moves to the next photo every 5 seconds. It pauses on hover, has dots to jump between photos and can be swiped on phones. It stays still for visitors with reduced motion turned on.
- Slideshow photos are edited in Pages CMS under Home slideshow.
- Events page shows up to 3 Instagram posts as a small hand of cards beside the heading, with "Latest on" and the Instagram icon underneath. The cards fan out on hover and open the post on Instagram. They take no extra space, so the page is no longer.
- Instagram posts are picked in Pages CMS under Instagram posts. The cards stay hidden until at least one post is added.
- Pages CMS uploads are sorted into separate folders for event photos, slideshow photos and Instagram images.

## v1.6.2 (25 Sep 2026)
- Smaller footer. The logo is removed, the Band links sit on one line, and Follow is renamed Socials with an Instagram icon button instead of a text link.
- Site moved to the custom domain www.anchorsolaspb.com. Link previews and page tags now use the new address. The old anchorsolaspb.github.io address redirects automatically.

## v1.6.1 (25 Sep 2026)
- Book Us page shows the band Instagram (@anchorsolas_pb) with its icon under the email address, at the same size. It opens the Instagram profile in a new tab.

## v1.6.0 (25 Sep 2026)
- Booking form sends enquiries directly to admin@anchorsolaspb.com through Web3Forms. Visitors no longer need an email app.
- The form shows "Sending…" while it sends, an "Enquiry sent" confirmation when it works, and an error with an email fallback if it fails.
- Hidden spam trap added to the form.
- The Web3Forms key is kept in assets/js/form-config.js. Until it is added, the form opens the visitor's email app as before.

## v1.5.2 (24 Sep 2026)
- Booking form: the round buttons next to each performance option keep their full size on phones instead of being squashed when the option text wraps onto two lines. They also line up with the first line of text.

## v1.5.1 (24 Sep 2026)
- Link preview image renamed to share-preview-2.jpg so WhatsApp, Facebook and preview sites fetch the new crop with all three pipers instead of a cached copy.

## v1.5.0 (24 Sep 2026)
- Gold corner brackets frame the home page photo and the About page photo, replacing the plain outlines.
- Each page fades in softly when you switch pages.
- Event card photos zoom in slightly and brighten when you hover over the card.

## v1.4.0 (24 Sep 2026)
- Removed the scroll anchor from the left edge. The next-page button at the bottom of each page stays.
- Compact footer: smaller logo (the original stacked ASPB logo), tighter spacing and smaller text. The Band, Contact and Follow labels stay.

## v1.3.0 (24 Sep 2026)
- Scroll anchor: an anchor on the left edge sinks down a rope as you scroll. At the bottom of each page, a button takes you to the next page (Home, About, Events, Book Us, then back to Home).
- Link preview image shows the three pipers and their bagpipes in full.
- Removed the lighthouse beam from the home hero.
- Homepage card "Where to hear us" renamed "Where we've played".

## v1.2.0 (24 Sep 2026)
- Each page has its own link: the home page, #about, #events and #book. The browser back button now moves between pages, and links can be shared.
- The browser tab title changes with the page.
- Menu links are real links, so they work with a keyboard and can be opened in a new tab.
- Link previews: sharing the site on WhatsApp, Telegram, Instagram or Facebook shows a picture, the band name and a short description.
- Home hero: faint lighthouse beams turn slowly from the lighthouse logo behind the headline. They stay still for visitors who have reduced motion turned on.


## v1.1.0 (24 Sep 2026)
- Events can have a description and up to 12 photos, both edited in Pages CMS.
- The first photo shows on the event card. Clicking an event opens its description and photo gallery.
- Photos uploaded in Pages CMS are saved to assets/images/events.
- Removed the "Add to calendar" button from the event pop-up, since it did not add anything to a calendar.

## v1.0.0 (24 Sep 2026)
- Events page shows two tabs, Past Events and Past Competitions. Filters, the Upcoming tab and the Results tab are removed.
- Pages CMS "Type" field renamed "Show under", with options Past Events and Past Competitions.
- Home hero shows the photo to the right of the headline. Yellow "Next up" banner removed.
- Animated underline on menu, footer and email links.
- About page photo caption reads "64th BB Pipe Band at the 19th Pipes and Drums Festival".
- Footer links work, email opens the email app, Follow shows Instagram only, Singapore removed.
- "Keep me posted" checkbox removed from the booking form.
- Layout adjusted for phones and tablets.
- Events are edited in Pages CMS and stored in events.json.
