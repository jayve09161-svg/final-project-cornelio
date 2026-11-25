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

# AI Log: Lost It? Found It.

## Entry 1: US1 Login Page (Nov 25, 2026)

**What I asked the AI:** Help me plan and build the login page (index.html).

**What the AI suggested:** A 5-step plan: page skeleton, page content, basic styling, responsive styling, and testing against my acceptance criteria. The AI gave small pieces of code and explained each one.

**What I did:**
- Wrote my own acceptance criteria (AC1 to AC3).
- Built the page one step at a time and tested each step.
- Tested AC1 to AC3 at 1280px, 360px, and 320px. All passed.

**What I learned:**
- Semantic HTML (`<main>`, `<h1>`, `<button>`) and accessibility basics (`lang`, viewport tag, `aria-live`).
- `:empty` hides the status box when it has no message.
- `:focus-visible` helps keyboard users.
- Media queries go at the bottom of the CSS file so they can override earlier rules.

## Entry 2: US2 Changes (Nov 25, 2026)

**Original US2:** Sign in with a real Google account, identity verified, session saved, then go to app.html.

**Problem found:** Real Google sign-in needs Google's own script and a Client ID. My project rule is plain HTML, CSS, and JavaScript only.

**Options I compared:**
- A: Ask my teacher.
- B: Use real Google sign-in anyway.
- C: Use a simulated sign-in.

**My decision:** I chose option C.

**How US2 changed:**
- First version: a name and email form.
- Final version (my idea): no form fields. One button, "Continue with Google (demo)", signs in a fixed demo user.
- Session is saved in `localStorage`, then the user goes to app.html.

**Other stories affected:**
- US1: AC1 and the button text now say "Continue with Google (demo)". I need to re-test it.
- US2: new wording and new ACs.
- US3: the profile will show the demo user.
- US4 to US10: no change needed.
- Still to decide: where the Sign out button goes (US3 or US2).

**Limits of my solution:**
- Nothing is verified, because the sign-in is simulated.
- `localStorage` can be edited by anyone in the browser's developer tools, so this is not real security.
- Real Google sign-in would need Google's script and a Client ID.

**AI vs. me:** The AI pointed out the problem and the options, and suggested the first rewrite. I made the final decisions (option C, removing the form fields, the button label).

**Still unsure about:** Whether my teacher accepts a simulated sign-in.

