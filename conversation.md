# Complete demo conversation

These six user messages and six assistant replies are transcribed from the installed Android prototype on 20 September 2026. They were entered as demo data, not as claims about the owner's real reading habits. The same ongoing conversation already contained Project Cedar: Mira owns its draft, due October 8, 2026, and it is marked done. The film preserves every new message and reply; waiting and navigation are trimmed. A generation failure and a preview loading error are included.

## 1. Explain a need

**User:** I want to build a reading habit. My goal is 20 minutes a day. Make me a simple reading log with the book, date and minutes. I have not started yet.

**Assistant:** I couldn’t publish the reading log because the app tool hit its repair limit. If you want, I can try a simpler version next, or just format the tracker for you in chat.

## 2. Continue after the failure

**User:** Yes, try a simpler version. Just a reading log I can open. Keep my 20-minute daily goal, and start with no completed sessions.

**Assistant:** Done — I set up a simple reading log you can open, with your 20-minute daily goal saved. It starts with no sessions yet.

**Observed interface:** A Reading Log preview was available. On opening, it displayed “Could not load the log.” The assistant's claim of an available log was therefore not yet evidence of a working data view.

## 3. Repair and record an actual event

**User:** The preview says Could not load the log. Please fix it. Also log that I read The Alchemist for 15 minutes on 2026-09-20.

**Assistant:** Fixed — the reading log should load now, and I saved “The Alchemist” for 15 minutes on 2026-09-20. If you want, I can also add a second quick session entry.

**Observed interface:** The repaired preview displayed a 20-minute daily goal and The Alchemist, 15 min, 2026-09-20. The preview was accepted; the app was subsequently kept.

## 4. Correct the event

**User:** Small correction: that reading session was 25 minutes, not 15. Keep the book and date the same.

**Assistant:** Done — I updated that session to 25 minutes and kept the book and date the same.

**Observed interface:** The persisted entry displayed 25 min; the 20-minute goal remained distinct.

## 5. Switch subjects in the same conversation

**User:** Back to Project Cedar: who owns the draft, when is it due, and is it done?

**Assistant:** Mira owns the draft. It’s due on 2026-10-08, and yes, it’s marked done.

## 6. Return to the reading goal

**User:** And back to reading: what is my daily goal, and what have I actually logged so far?

**Assistant:** Your daily reading goal is 20 minutes. So far, you’ve logged 1 session: **The Alchemist** for **25 minutes** on **2026-09-20**.

The app displayed literal Markdown markers in the last answer; the video preserves that behavior.

## Offline check

Emulator networking was disabled. The app was force-stopped, restarted, and the saved Reading Log reopened. The 20-minute goal and corrected 25-minute entry were retained. Networking was then restored. This demonstrates local record access, not offline AI or comprehensive restart reliability.
