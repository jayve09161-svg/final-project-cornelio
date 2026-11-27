# Acceptance Criteria
<!--
Acceptance criteria tell you when a user story is DONE. Each one must be testable: pass or fail.
Write 2–3 criteria for every user story using this format:

Given [a situation], when [the user does something], then [this should happen].

Tips:
- Number them under their story: AC1.1 and AC1.2 belong to US1.
- Describe what the user SEES, not how the code works.
- Include at least one "what if it goes wrong" case per story (empty input, no results).
- Avoid vague words like "fast," "nice," or "easy." Could a classmate test it and agree it passed?

Example:
## US1: View today's menu
- AC1.1: Given I open the App page, when it loads, then I see each dish with its name, photo and price.
- AC1.2: Given no dishes are added yet, when I open the menu, then I see "No dishes today yet."

AC - Acceptance Criteria
-->

### Feature: Login Page

US1:

- AC1.1: The login page displays the Lost It? Found It. branding, a brief description for Manolo Fortich residents, a prominent "Continue with Google (demo)" button, and a short note stating that sign-in is simulated for demo purposes.
- AC1.2: All page elements use semantic HTML (`<main>`, `<h1>`, `<p>`, `<button>`), accessible labels, clear contrast, and proper spacing with no broken links or missing stylesheet references.
- AC1.3: The login page layout centers cleanly and remains readable without horizontal scrolling or overlapping elements on both desktop and phone-sized screens.

US2:

- AC2.1: Clicking "Continue with Google (demo)" saves a fixed simulated user session (e.g., name and email) into `localStorage`, displays a short status message inside `#auth-status`, and automatically directs the user to `app.html`.
- AC2.2: Reloading `app.html` or reopening the site while signed in keeps the user signed in via `localStorage`.
- AC2.3: Opening `app.html` directly without an active session in `localStorage` redirects the user back to `index.html`.

### Feature: Item Reporting Dashboard

US3:

- AC3.1: Opening `app.html` as an authenticated user displays a header with the "Lost It? Found It." branding, the signed-in simulated demo user's name/email, a Sign Out button, action triggers for Report Found Item and Report Lost Item, search/filter input controls, a Today / All toggle, and dedicated feed sections for Recently Found and Active Lost items.In this story, the action triggers, search/filter controls, and toggle are visible and labeled only; their functions are built in US4 to US10.
- AC3.2: All dashboard landmarks (`<header>`, `<nav>`, `<main>`, `<section>`), buttons, form inputs, and labels use semantic HTML with proper `for`/`id` associations,text contrast of at least 4.5:1, clear contrast, and no broken stylesheet or script links.
- AC3.3: The dashboard adapts cleanly across desktop (3-column card grid), tablet (2-column grid), and phone-sized screens (1-column stack) without horizontal overflow or overlapping controls.

US4:

- AC4.1: Required fields—item category (IDs & Documents, Phones & Electronics, Wallets & Cash, Bags & Accessories, Keys, or Other Items), date and time found, place found, finder name, item description, photo, custom drop-off point, and contact info—must not be blank, timestamps must not be in the future, and uploaded photos must meet allowed file types and size limits while showing only a partial/cropped view (at most half) for IDs & Documents to protect personal data.
- AC4.2: Invalid inputs, missing required fields (including a missing item description), non-compliant photo files, or uncropped/full-view uploads of IDs & Documents must display validation errors and block submission.
- AC4.3: Submitting a valid form stores the found-item post in `localStorage` with an Open status, displays the finder's contact details on the listing for direct owner outreach, and allows the poster to mark the post as Returned once handed over.

US5:

- AC5.1: Required fields—item name and description, category (IDs & Documents, Phones & Electronics, Wallets & Cash, Bags & Accessories, Keys, or Other Items), last-seen location, date and time lost (not in the future), owner name, and valid contact info—must not be blank, and any optional uploaded photo must meet allowed file type and size limits while showing only a partial/cropped view (at most half) for IDs & Documents.
- AC5.2: Missing required fields, future timestamps, invalid contact formats, non-compliant photo files, or uncropped/full-view uploads of IDs & Documents must trigger validation errors and block post submission.
- AC5.3: Submitting a valid form publishes the lost-item post to the dashboard with an Active status and visible owner contact details, and marking it as Resolved removes it from active missing-item listings.

### Feature: Search & Filter

US6:

- AC6.1: Typing keywords into the search bar immediately filters displayed found and lost item cards to those matching the item name, description, or location (case-insensitive).
- AC6.2: Typing a keyword that matches zero items displays a clear on-screen message indicating that no matching items were found.
- AC6.3: Clearing the search input restores the full item list while respecting the active Today / All toggle.

US7–US10:

- AC7.1: Selecting a category (All Categories, IDs & Documents, Phones & Electronics, Wallets & Cash, Bags & Accessories, Keys, or Other Items), entering or selecting a location (case-insensitive), selecting a date (normalized to YYYY-MM-DD), or entering or selecting a custom drop-off point (case-insensitive) filters displayed found and lost item cards to posts matching every active filter and search keyword.
- AC7.2: Applying any filter combination that yields zero matching posts displays a clear on-screen message indicating that no match was found.
- AC7.3: Clearing or resetting any individual filter restores posts matching the remaining active search/filter criteria and the active Today / All toggle.