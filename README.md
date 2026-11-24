# Jarvis Craft Campaign

**Clean-room multi-agent chat UI inspired by OpenMausBot / Jarvis concepts from the video "FREE Grok Bot Alternative is INSANE! (Build Jarvis) 🤯"**

This repository is a **Craft Anything-style campaign**: a Study → Build demonstration of the multi-bot chat interface (sidebar of specialized agents, group HQ, simple prompt screen + 3D visuals mode) without copying any proprietary code or assets.

## What this is

- **Simple mode**: Dark Grok-like chat UI with pill composer, model picker, right-aligned user bubbles, full-width assistant text, empty-state wordmark + chips.
- **3D Visuals mode**: React Three Fiber reactive orb / graph visualization (Pixel-style) that reacts to chat activity.
- Bots: Jarvis (leader), Scout (research), Quill (writing), Pixel (3D), Relay (inbox).
- Clean-room recreation based on publicly described UI/UX patterns and the video's workflow.

## Origin

Craft Anything (storytold/craft-anything) workflow applied to the concepts in:
https://youtube.com/watch?v=i30vQurf-hQ

Original OpenMausBot (Apache-2.0): https://github.com/milind-soni/OpenMausBot

## Stack

- Next.js 15 (App Router)
- Tailwind CSS
- @react-three/fiber + @react-three/drei
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

Toggle between Simple and 3D modes in the header.

## License

MIT — independent clean-room project. Not affiliated with xAI, OpenMausBot, or the video creator.
