# Voice Message

A component for sending and receiving voice messages in web applications.

## Installation

To install this component, use npm:

```bash
npm install voice-message
npm install -D tailwindcss
npx tailwindcss init
```
# Usage/Examples

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/voice-message/build/VoiceMessage.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

```
```css
// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```javascript
// app.js
import VoiceMessage from "voice-message/build/VoiceMessage";
function App() {
  return (
    <VoiceMessage
      data={"path/audio"}
      status={"inbound" || "outbound" }
    />
  );
}

export default App;
```

## 📷 Demo
![Logo](https://github.com/MobinRezaeifar/Voice-Message/assets/128358943/47e5c88d-f4e9-4195-964b-1ee40535ec34)

## 💰 Donate
If you find this project helpful, you can support its development by donating Bitcoin:

![2024-04-06_08-53-59](https://github.com/MobinRezaeifar/Voice-Message/assets/128358943/078a6a39-0c23-47e5-b098-c734fb9a5cfb)

bc1qc640he5efwezsp864c5nt70uwhttd65sgamdr3

## 🔗 Links
[![npm](https://img.shields.io/badge/npm-red?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/voice-message)
[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MobinRezaeifar)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mobinRezaeifar)


