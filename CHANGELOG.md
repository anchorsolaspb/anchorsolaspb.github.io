# Anchor Solas Pipe Band website: changelog

## v1.10.2 (1 Oct 2026)
- Booking form budget now goes up to S$10,000+ (was S$5,000+). Enquiries show "S$... to S$10,000+" when the top end is chosen.
- Budget slider fixes:
  - When both handles are on the same amount, dragging left moves the lower handle and dragging right moves the upper one. Before, it could only move one way.
  - Dragging the lower handle to the right no longer freezes after the first step.
  - Dragging one handle past the other now carries on with the other handle instead of stopping.

## v1.10.1 (1 Oct 2026)
- Smoother page changes. Switching pages now crossfades the whole screen over about half a second, so the navy pages (Home, Book Us) blend into the light pages (About, Events) instead of snapping. This includes the menu bar, the back button and the next-page button.
- Older browsers that can't crossfade keep the previous fade-in and blend the menu bar colours instead. Visitors with reduced motion turned on see an instant change, as before.

## v1.10.0 (1 Oct 2026)
- Book Us page has a new "Ways to book us" section above the enquiry form, with a card for each Performance option in the form: Solo Bagpiper, Duo, Piping Quartet, Quintet Band and Full Band. Each card shows the line-up as dots (gold piper, navy snare, ring bass), who plays and what it suits.
- Pressing Enquire on a card scrolls to the form with that option already ticked and a "Picked from the card above" tag next to it. "Something else in mind?" picks Others. The tag disappears if the option is changed by hand.
- The rest of the Book Us page (heading, description, email and social links, and every form field) is unchanged, and enquiries are sent exactly as before.

## v1.9.1 (1 Oct 2026)
- Instagram cards on the Events page moved down into the empty space beside the Past Events and Past Competitions tabs, so they no longer slide under the menu bar when they fan out on hover. "Latest on" now lines up with the tabs. Phones are unchanged.
- Cards are back to full size on tablets (the smaller tablet size from v1.8.2 is no longer needed).

## v1.9.0 (1 Oct 2026)
- New "page not found" page. Broken or mistyped links (for example www.anchorsolaspb.com/old-page) now show a branded navy page saying "This tune isn't in our set." with Back to home and Book us buttons, instead of GitHub's plain error. Google is told not to list it.

## v1.8.2 (1 Oct 2026)
- Instagram cards on the Events page show the whole photo instead of cropping it. The photo area is now portrait (3:4) like an Instagram post, so portrait posts fill it and landscape photos sit in white bands.
- Cards are a little smaller on tablets (768 to 900 px wide) so they no longer slip under the menu bar.

## v1.8.1 (1 Oct 2026)
- New site icon: the navy lighthouse anchor in a white circle. It shows in browser tabs, on phone home screens and, once Google updates, next to the site in Google search results.
- YouTube (@anchorsolaspb) added: an icon button next to Instagram under Socials in the footer, and a link under the Instagram one on the Book Us page.
- Google is told the site name is "Anchor Solas Pipe Band" and given the band logo and Instagram link, so search results can show the band name instead of anchorsolaspb.com.

## v1.8.0 (1 Oct 2026)
- The year in the footer ("© 2026") and above the Events heading ("Season 2026") now updates itself each new year.
- Faster loading: the home page download drops from about 2.2 MB to about 0.25 MB.
  - Removed 1.4 MB of unused embedded photos and old page code from the design system file.
  - Icon library trimmed to the 7 icons the site uses (356 KB to 3 KB).
  - Large photos resized to 1600 px and compressed. File names are unchanged, so Pages CMS still finds them.
- Keyboard access for events: Tab moves between event cards, Enter or Space opens one, Esc closes the pop-up and returns to the same card. Screen readers read each card's name and date.

## v1.7.1 (25 Sep 2026)
- Added robots.txt and sitemap.xml so Google can find and read the site on www.anchorsolaspb.com.

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
