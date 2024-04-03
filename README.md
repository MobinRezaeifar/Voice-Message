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

## 🔗 Links
[![github](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/MobinRezaeifar)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/mobinRezaeifar)


