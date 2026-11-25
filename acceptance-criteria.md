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

### Feature: 
US1:
- AC1.1: 
- AC1.2: 

### Feature: 
US2:
- AC2.1: 
- AC2.2: 

### Feature: 
US3:
- AC3.1: 
- AC3.2: 

# Acceptance Criteria

### US1: Login Page Structure & Layout
- AC1: The login page displays the Lost It? Found It. branding, a brief description for Manolo Fortich residents, a prominent "Continue with Google (demo)" button, and a short note stating that sign-in is simulated for demo purposes.
- AC2: All page elements use semantic HTML (<main>, <h1>, <p>, <button>), accessible labels, clear contrast, and proper spacing with no broken links or missing stylesheet references.
- AC3: The login page layout centers cleanly and remains readable without horizontal scrolling or overlapping elements on both desktop and phone-sized screens.

### US2: Google Account Login & Session Persistence
- AC1: Clicking "Continue with Google (demo)" saves a fixed simulated user session (e.g., name and email) into localStorage.
- AC2: Clicking the sign-in button displays a short status message inside #auth-status before redirecting.
- AC3: After saving the session, the user is automatically directed to app.html.
- AC4: Reloading app.html (or reopening the site while signed in) keeps the user signed in via localStorage.
- AC5: Opening app.html directly without an active session in localStorage redirects the user back to index.html.
### US3: Main Dashboard Structure & Layout
- AC1: Opening app.html as an authenticated user displays a header with the "Lost It? Found It." branding, the signed-in simulated demo user's name/email, a Sign Out button, action triggers for Report Found Item and Report Lost Item, search/filter input controls, a Today / All toggle, and dedicated feed sections for Recently Found and Active Lost items.
- AC2: All dashboard landmarks (<header>, <nav>, <main>, <section>), buttons, form inputs, and labels use semantic HTML with proper for/id associations, clear contrast, and no broken stylesheet or script links.
- AC3: The dashboard adapts cleanly across desktop (3-column card grid), tablet (2-column grid), and phone-sized screens (1-column stack) without horizontal overflow or overlapping controls.

### US4: Found Item Report
- AC1: Required fields - item category (IDs & Documents, Phones & Electronics, Wallets & Cash, Bags & Accessories, Keys, or Other Items), date and time found, place found, finder name, item description, photo, custom drop-off point, and contact info - must not be blank, date and time must not be in the future, and uploaded photos must meet allowed file types and size limits while showing only a partial/cropped view (at most half) for IDs & Documents to protect personal data.
- AC2: Invalid inputs, missing required fields (including a missing item description), non-compliant photo files, or uncropped/full-view uploads of IDs & Documents must display validation errors and block submission.
- AC3: Submitting a valid form must store the found-item post in localStorage with an Open status, display the finder's contact details on the listing for direct owner outreach, and allow the poster to mark the post as Returned once handed over.

### US5: Lost Item Report
- AC1: Required fields - item name and description, category (IDs & Documents, Phones & Electronics, Wallets & Cash, Bags & Accessories, Keys, or Other Items), last-seen location, date and time lost (not in the future), owner name, and valid contact info - must not be blank, and any optional uploaded photo must meet allowed file type and size limits while showing only a partial/cropped view (at most half) for IDs & Documents.
- AC2: Missing required fields, future timestamps, invalid contact formats, non-compliant photo files, or uncropped/full-view uploads of IDs & Documents must trigger validation errors and block post submission.
- AC3: Submitting a valid form must publish the lost-item post to the dashboard with an Active status and visible owner contact details, and marking it as Resolved must remove it from active missing-item listings.

### US6: Live Keyword Search
- AC1: Typing keywords into the search bar immediately filters displayed found and lost item cards to those matching the item name, description, or location (case-insensitive).
- AC2: Typing a keyword that matches zero items displays a clear on-screen message indicating that no matching items were found.
- AC3: Clearing the search input restores the full item list (respecting the active Today / All toggle).

### US7: Category Filter
- AC1: Selecting a category from the category filter (All Categories, IDs & Documents, Phones & Electronics, Wallets & Cash, Bags & Accessories, Keys, or Other Items) displays only posts matching that category, while combining it with other active filters narrows results to posts matching every active filter.
- AC2: Selecting a category with zero matching posts displays a clear on-screen message indicating that no match was found.
- AC3: Resetting the category filter back to All Categories restores posts matching the remaining active search/filter criteria and Today / All toggle.

### US8: Location Filter
- AC1: Selecting or entering a location filter narrows displayed posts to matching locations (case-insensitive) and works together with other active filters and search keywords.
- AC2: Filtering by a location with zero matching posts displays a clear on-screen message indicating that no match was found.
- AC3: Clearing or resetting the location filter restores posts matching the remaining active search/filter criteria and Today / All toggle.

### US9: Date Filter
- AC1: Selecting a date in the date filter narrows displayed posts to items matching that date (normalized to YYYY-MM-DD) and combines cleanly with other active filters and search keywords.
- AC2: Filtering by a date with zero matching posts displays a clear on-screen message indicating that no match was found.
- AC3: Clearing or resetting the date filter restores posts matching the remaining active search/filter criteria and Today / All toggle.

### US10: Drop-Off Point Filter
- AC1: Selecting or entering a drop-off point filter narrows displayed posts to matching custom drop-off points (case-insensitive) and combines cleanly with other active filters and search keywords.
- AC2: Filtering by a drop-off point with zero matching posts displays a clear on-screen message indicating that no match was found.
- AC3: Clearing or resetting the drop-off point filter restores posts matching the remaining active search/filter criteria and Today / All toggle.

