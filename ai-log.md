# AI Log
<!--
This file is your record of how you worked with AI (Gemini, ChatGPT, or Claude).
Using AI is allowed. Hiding it is not. This log shows your instructor that YOU
reviewed, understood, and made decisions about your code.

WHEN to add an entry:
- Every time you use AI to plan, write, explain, or debug a part of your app.
- Add the entry right after that step works, BEFORE you commit. Don't write it all at the end.

HOW to write an entry:
- Copy the template below and fill it in. Newest entry at the bottom.
- Write in your own words. Short is fine, but be specific.
- "What I changed or rejected" is the most important part. Even small changes count:
  renaming a class, fixing a bug the AI made, simplifying code, or saying no to a suggestion.
- If you used the AI's code exactly as given, write why it was okay and what you checked.

TEMPLATE (copy from here):

## Entry [#]: [Date]
- **User story:** [US# and short title]
- **What I asked:** [Your prompt, or a short summary of it]
- **What the AI suggested:** [1–2 sentences summarizing the AI's answer]
- **What I changed or rejected, and why:** [Your decisions in your own words]
- **How I tested it:** [Which acceptance criteria you checked, and whether each passed]
- **What I learned:** [One new thing you now understand]

EXAMPLE:

## Entry 3: Nov 20, 2026
- **User story:** US1: View today's menu
- **What I asked:** "Show me how to display my menu array as cards on app.html."
- **What the AI suggested:** A forEach loop that builds the cards with innerHTML.
- **What I changed or rejected, and why:** Renamed `.item-card` to `.menu-card` to match
  my CSS. The AI forgot the empty menu case, so I asked for a hint and added a
  "No dishes today yet" message myself.
- **How I tested it:** AC1.1 passed (cards show name, photo, price). AC1.3 passed
  after my fix (empty message shows).
- **What I learned:** forEach runs the same code once for every item in an array.

Minimum of 5 meaningful AI logs.
-->

## Entry 1: [Date]
- **User story:**
- **What I asked:**
- **What the AI suggested:**
- **What I changed or rejected, and why:**
- **How I tested it:**
- **What I learned:**

## Entry 1: Nov 24, 2026
- **User story:** US1: Login page structure and layout
- **What I asked:** I Shared my project context for "Lost It? Found It." including my `US1` with its acceptance criteria , and asked for a step-by-step plan without code yet, and then requested Step 1 code by showing my existing `index.html` skeleton through copy pasting.
- **What the AI suggested:** It Suggested a 5-step plan for `US1`, and told me to update `<title>` and add `<link rel="stylesheet" href="styles.css">` in `index.html`.
- **What I changed or rejected, and why:** I Kept my existing `index.html` skeleton and asked for only the Step 1 code and target file so I could apply the change step by step.
- **How I tested it:** I Checked the updated `<head>` tags in `index.html`; full browser checks for `AC1`–`AC3` (at `360px` and `1280px` plus contrast and stylesheet testing) remain to be completed as the rest of `US1` is built.
- **What I learned:** Keeping `lang` and `viewport` intact and matching exact lowercase filenames like `styles.css` helps prevent layout and deployment issues early on.

## Entry 2: Nov 25, 2026
- **User story:** US2: Simulated sign-in (originally real Google sign-in)
- **What I asked:** Help me do US2. Then I asked what to do because of my plain HTML/CSS/JS rule.
- **What the AI suggested:** Real Google sign-in needs Google's own script and a Client ID, so it conflicts with my rule. It gave three options (ask my teacher, use real Google sign-in anyway, or simulate the sign-in). It suggested rewording US2 and checking which other stories are affected. It then gave a 5-step plan and code in small pieces.
- **What I changed or rejected, and why:**
  - I chose a simulated sign-in because of my "plain only" rule.
  - The AI first suggested a name and email form. I removed it and chose one button, "Continue with Google (demo)", with a fixed demo user (Userjv, userjv@example.com).
  - I decided that a signed-in user opening index.html goes straight to app.html.
  - Stories affected: US1 (button text and AC1), US2 (new wording and ACs), US3 (profile shows the demo user). US4 to US10 need no change.
  - Still to decide: where the Sign out button goes (US3 or US2).
- **How I tested it:**
  - Step 2: typed `DEMO_USER` in the Console and saw the object with my name and email. Pass.
  - Steps 3 to 5 (AC1 to AC5): not tested yet. I will mark each as pass or fail here.
  - I will also re-test US1's layout at 320px, 360px, and 1280px.
- **What I learned:**
  - Why real Google sign-in cannot be done with plain HTML, CSS and JS only.
  - `localStorage` stores text only, so objects need `JSON.stringify`.
  - A script shared by two pages must check that an element exists before using it.
  - Limits of my solution: nothing is verified, and `localStorage` can be edited by anyone in the browser's developer tools, so it is not real security. I still need to ask my teacher whether a simulated sign-in is accepted.

  ## Entry 3: Nov 27, 2026
- **User story:** US2: Simulated sign-in (build and testing)
- **What I asked:** A step-by-step plan for US2 with my five acceptance criteria, then code in small pieces.
- **What the AI suggested:** A 5-step plan: prepare files, decide the demo user data, sign in on click, keep the session, and protect app.html. It also warned about the shared script.js crashing on pages without the button, and about `localStorage` storing text only.
- **What I changed or rejected, and why:**
  - I chose the demo user name "Userjv" and the email "userjv@example.com".
  - I decided that a signed-in user opening index.html goes straight to app.html.
  - I moved the stray "Dashboard (placeholder)" heading out of index.html, because it was a second h1 on the login page.
- **How I tested it:**
  - AC1 (user saved in Local Storage): Pass.
  - AC2 (status message before redirect): Pass.
  - AC3 (redirect to app.html): Pass.
  - AC4 (session kept after reload or reopening): Pass.
  - AC5 (app.html without a session goes back to index.html): Pass.
  - US1 re-test: login page at 356px looked fine with the longer button label and no Console issues. I still need to test the status message, 320px, and 1280px.
- **What I learned:**
  - `JSON.stringify` and `JSON.parse` convert objects to text and back for `localStorage`.
  - `window.location.replace` does not keep the old page in the history.
  - `requireLogin()` runs in the head so the dashboard does not flash before the redirect.
  - This is not real security, because anyone can edit `localStorage`.

## Entry 4: Nov 27, 2026
- **User story:** US3: Main dashboard (story and AC rewrite)
- **What I asked:** When I started US4, I noticed US3 had two "As a User" sentences. I asked the AI to check them against my ACs. Later I shared my instructor's slides and asked if my ACs followed Format A (rule-based checklist).
- **What the AI suggested:** Merge the two sentences into one story, because neither covered everything in AC3.1. Remove `<nav>` from AC3.2 and add a Sign Out rule. Change the wording to match what I built and never change the working app. It first suggested splitting AC3.1 into 8 rules, then took that back after seeing the slides (about 3 to 7 rules per story).
- **What I changed or rejected, and why:** I merged US3 into one story and deleted the stray `US3:` line. I rewrote the ACs as short rules that describe what the user sees, with no code details. I restored US4 after a copy-paste mistake overwrote it with US3's text.
- **How I tested it:** I changed no code. I compared each new rule with the checks I had already finished and passed, and every rule matched one. I re-read the file to confirm there was one US3 and US4 was restored.
- **What I learned:** I learned that story is short and the ACs hold the details, one testable rule per line. It should match what I built, not the other way around. I should check the AI's advice against my course material, and copy-paste mistake can overwrite a different story, so I should re-read the file after editing.