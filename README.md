# PickPlay!

🎮 Random Character Selector
![PickPlay! logo](images/PickPlay-icon.jpg)

> 日本語のREADMEは [こちら](README.ja.md) をご覧ください。

## Overview

**PickPlay!** is a simple tool that randomly selects items from a list of candidates.

Use cases include:
- Roleplay games (FPS, RPG, TRPG, etc.): randomly assign roles such as Warrior, Mage, or Thief.
- Randomly generate scenarios, enemies, or character builds.
- Make fair character assignments among players.

## Background

When playing games with friends, we often struggled with decisions like “Which character should I use?” or “We always end up picking the same roles.”
To solve this, I built a lightweight web app that can randomly assign characters or options.

## Target Audience

Gamers and groups who enjoy cooperative or competitive games and want some variety or fairness in role assignments.

## 🌐 Public Page
The application is deployed using GitHub Pages.
▶️ [Open the app](https://black1000.github.io/PickPlay/)

### Example: Using Roles

1. Add roles (e.g., Tank, DPS, Healer), then input candidates (e.g., characters or skills) for each role.
2. Input player names.
3. Click the “Pick!” button — each role will be assigned randomly.
4. Results can be copied and shared on LINE or Discord.

### Example: Without Roles

1. Input candidates (e.g., characters) and player names directly.
2. Click “Pick!” to assign them randomly.
3. Copy and share the results via LINE or Discord.

> ⚠️ If the number of characters is fewer than the number of players, a warning message will be displayed and the pick will not proceed.

## MVP Features

- Random pick functionality using `Math.random()`
- Unlimited number of players
- Users can freely input candidates (comma- or line-separated)
- Supports managing candidates by “Role”
- Can also work without roles using a simple list
- Batch player input (via line breaks)
- Reset character lists with a single action
- Merge all characters registered under roles into one list
- Prevent duplicate role or character names (auto-remove or disallow)
- Copy results to LINE / Discord
- Persistent data saved in `localStorage`
- Language toggle: Japanese / English
- Flexible input handling (comma and newline support)

## Full Release Enhancements

- Responsive layout (mobile-friendly UI)
- Improved UX for duplicate name checks (clear error messages)
- Displays a warning if the number of characters is less than the number of players

## Planned Features (Future Roadmap)

- **PWA Support**: Installable as a web app from mobile home screens
- **Theme Toggle**: Light/Dark mode support
- **UI/UX Improvements**: Optimized layout and usability for mobile devices

## Technologies Used

PickPlay! is built entirely with front-end technologies — no backend or server required.

- Front-end: HTML, CSS, JavaScript
- Local storage via `localStorage`
- Random selection powered by JavaScript’s `Math.random()` and the Fisher-Yates shuffle algorithm:

```js
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
