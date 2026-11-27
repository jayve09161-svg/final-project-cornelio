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

US1:View Login Page

- AC1.1: The login page shows the "Lost It? Found It." title and a one-sentence description that mentions Manolo Fortich.
- AC1.2: The login page shows a prominent "Continue with Google (demo)" button, and the "(demo)" in the label tells users the sign-in is simulated.
- AC1.3: All text has a contrast ratio of at least 4.5:1, and pressing Tab shows a visible outline on the button.
- AC1.4: The page is centered and readable, with no horizontal scrolling or overlapping, at 320px, 360px, and 1280px wide and when zoomed to 200%.

US2: Demo Google Sign-In & Session Handling

- AC2.1: Clicking "Continue with Google (demo)" shows the message "Signing in as Userjv..." under the button.
- AC2.2: About one second after the message appears, the user is taken to the dashboard (app.html).
- AC2.3: Reloading the dashboard while signed in keeps the user signed in.
- AC2.4: Opening the login page while signed in goes straight to the dashboard.
- AC2.5: Opening the dashboard without being signed in sends the user back to the login page.
- AC2.6: If the browser blocks saving the session, the message "Sign-in failed. Please allow browser storage." is shown and the user stays on the login page.

### Feature: Item Dashboard

US3: View Main Dashboard & Sign Out

- AC3.1: The header shows the "Lost It? Found It." branding, the demo user's name and email, and a Sign Out button.
- AC3.2: The page shows Report Found Item and Report Lost Item buttons, a Today / All toggle, and search, category, location, date, and - - -  drop-off point controls. These are visible and labeled only; their functions are built in US4 to US10.
- AC3.3: The page shows separate Recently Found and Active Lost sections.
- AC3.4: Every search and filter control has a visible label, and clicking a label puts the cursor in its field.
- AC3.5: All text has a contrast ratio of at least 4.5:1 against its background.
- AC3.6: Item cards show in 1 column on phones (up to 600px), 2 columns on tablets (601px to 1023px), and 3 columns on desktop (1024px and up), with no horizontal scrolling or overlapping controls.
- AC3.7: Clicking Sign Out ends the session and returns the user to the login page, and opening app.html afterward also returns the user to the login page.

### Feature: Report Found Item

US4: Submit a Found Item Report

- AC4.1: Clicking Report Found Item opens a form with labeled fields for item name, category, date found and time, place found, finder name, description, photo, drop-off point, email, mobile number, and optional social media.
- AC4.2: Leaving any required field blank shows an error beside that field and blocks submission.
- AC4.3: A date and time in the future shows an error and blocks submission.
- AC4.4: An invalid email, a mobile number not in the +639XXXXXXXXX or 09XXXXXXXXX format, or social media text over 50 characters shows an error and blocks submission.
- AC4.5: A photo that is not JPG, PNG, or WebP, or is larger than 5 MB, shows an error and blocks submission.
- AC4.6: For IDs & Documents, the saved photo is fully blurred, and photos in other categories are shown normally.
- AC4.7: A valid submission adds the post to Recently Found with the status Open and the finder's contact details, and the post is still there after reloading the page.

### Feature: Report Lost Item

US5: Submit a Lost Item Report

- AC5.1: Clicking Report Lost Item opens a form with labeled fields for item name, category, description, last-seen location, date lost and time, owner name, email, mobile number, optional social media, and an optional photo.
- AC5.2: Leaving any required field blank shows an error beside that field and blocks submission.
- AC5.3: A date and time in the future shows an error and blocks submission.
- AC5.4: An invalid email, a mobile number not in the +639XXXXXXXXX or 09XXXXXXXXX format, or social media text over 50 characters shows an error and blocks submission.
- AC5.5: A photo that is not JPG, PNG, or WebP, or is larger than 5 MB, shows an error and blocks submission, and for IDs & Documents the saved photo is fully blurred.
- AC5.6: A valid submission adds the post to Active Lost with the status Open and the owner's contact details, and the post is still there after reloading the page.


### Feature: Search

US6: Search Posts by Keyword

- AC6.1: Typing in Search immediately shows only found and lost posts whose item name, description, or location contains the typed text, ignoring capital letters.
- AC6.2: When no post matches, the message "No matching items found." is shown.
- AC6.3: Clearing the search box brings back the posts that match the remaining filters and the active Today / All button.

### Feature: Filter

US7: Filter Posts by Category, Location, Date & Drop-Off

- AC7.1: Choosing a category shows only posts in that category, and "All categories" shows every post.
- AC7.2: Typing in Location shows only posts whose place found or last-seen location contains that text, ignoring capital letters.
- AC7.3: Choosing a date shows only posts whose date found or date lost is that date, the Today button shows only posts from today, and the All button shows every date.
- AC7.4: Typing in Drop-off point filters only the Recently Found posts, and Active Lost posts are not affected.
- AC7.5: When several filters and a search keyword are active, only posts that match every filter that applies to them are shown.
- AC7.6: When no post matches, the message "No matching items found." is shown.
- AC7.7: Clearing a filter brings back the posts that match the remaining filters.

### Feature: Close a Post

US8:Mark Own Post as Returned or Resolved

- AC8.1: Each of my posts with the status Open shows a button to close it.
- AC8.2: Closing a found post changes its status to Returned and shows a Returned label.
- AC8.3: Closing a lost post changes its status to Resolved and shows a Resolved label.
- AC8.4: A closed post stays in its section with its label, and the label is still there after reloading the page.
- AC8.5: A closed post no longer shows the close button.