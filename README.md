# צ'אטבוט מבוסס React עם זיהוי כוונות 🤖
### Intent-Based Chatbot (ללא למידת מכונה)

צ'אטבוט אינטראקטיבי המשלב מנגנון זיהוי כוונות (Intent Recognition) עם ממשק משתמש מודרני ב-React. המערכת מזהה את כוונת המשתמש באמצעות מילות מפתח ומבנה ידע מוגדר מראש, ללא שימוש בלמידת מכונה.

## 🌟 תכונות עיקריות

- 💬 ממשק צ'אט אינטואיטיבי מבוסס React
- 🎯 זיהוי כוונות מבוסס מילות מפתח
- 📱 תמיכה מלאה בעברית ו-RTL
- 📚 מאגר ידע מובנה וניתן להתאמה
- 🎨 עיצוב מודרני עם Tailwind CSS
- ⚡ ביצועים מהירים ללא תלות בשרת

## ⚙️ ארכיטקטורה

המערכת בנויה משלושה חלקים עיקריים:
1. **מנוע זיהוי כוונות** - מבוסס על התאמת מילות מפתח וביטויים
2. **מאגר ידע מובנה** - JSON מובנה עם תשובות ומילות מפתח
3. **ממשק משתמש** - קומפוננטות React עם Tailwind CSS

## 🛠️ טכנולוגיות

- React
- Vite
- Tailwind CSS
- Lucide Icons

## 🚀 התקנה והפעלה

### דרישות מקדימות
- Node.js (גרסה 14 ומעלה)
- npm או yarn

### שלבי התקנה

1. **שכפול הפרויקט**
```bash
git clone https://github.com/yarivtch/intentBasedBot.git
cd chatWIthRag
```

2. **התקנת תלויות**
```bash
npm install
```

3. **הפעלת סביבת פיתוח**
```bash
npm run dev
```

4. **בניית גרסת ייצור**
```bash
npm run build
```

## 📖 שימוש

הצ'אטבוט מציע מספר דרכים לקבלת מידע:

1. **שאילת שאלות ישירות**
   - הקלד שאלה בשפה חופשית
   - המערכת תזהה את הנושא ותספק מידע רלוונטי

2. **ניווט לפי קטגוריות**
   - לחץ על אחד מכפתורי הקטגוריות
   - קבל מידע מפורט בנושא הנבחר

3. **התאמה אישית**
   - אפשרות להתאמת מאגר המידע
   - הוספת קטגוריות ונושאים חדשים
   - עדכון תשובות ומידע

## 🔧 התאמה אישית

### עדכון מאגר הידע
```javascript
const knowledgeBase = {
  "נושא_חדש": {
    "תשובה": "התשובה שלך כאן",
    "מילות_מפתח": ["מילה1", "מילה2", "מילה3"]
  }
}
```


---

# React-Based Intent Recognition Chatbot 🤖
### No Machine Learning Required

An interactive chatbot that combines intent recognition with a modern React user interface. The system identifies user intent through keywords and a predefined knowledge base, without using machine learning.

## 🌟 Key Features

- 💬 Intuitive React-based chat interface
- 🎯 Keyword-based intent recognition
- 📱 Full RTL and Hebrew support
- 📚 Customizable knowledge base
- 🎨 Modern design with Tailwind CSS
- ⚡ Fast performance with no server dependency

## ⚙️ Architecture

The system consists of three main components:
1. **Intent Recognition Engine** - Based on keyword and phrase matching
2. **Structured Knowledge Base** - JSON structure with responses and keywords
3. **User Interface** - React components with Tailwind CSS

## 🛠️ Technologies

- React
- Vite
- Tailwind CSS
- Lucide Icons

## 🚀 Installation and Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the project**
```bash
git clone https://github.com/yarivych/intentBasedBot.git
cd chatWIthRag
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 📖 Usage

The chatbot offers several ways to access information:

1. **Direct Questions**
   - Type questions in natural language
   - System identifies intent and provides relevant information

2. **Category Navigation**
   - Click category buttons
   - Get detailed information on selected topics

3. **Customization**
   - Adapt the knowledge base
   - Add new categories and topics
   - Update responses and information

## 🔧 Customization

### Updating the Knowledge Base
```javascript
const knowledgeBase = {
  "new_topic": {
    "response": "Your response here",
    "keywords": ["word1", "word2", "word3"]
  }
}
```

## 🚀 Deployment

To deploy to GitHub Pages:

1. **Update `vite.config.js`**:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other settings
})
```

2. **Run deploy command**:
```bash
npm run deploy
```

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🤝 Credits

- Icons: [Lucide Icons](https://lucide.dev/)
- UI Components: [Tailwind CSS](https://tailwindcss.com/)

## 🔄 Recent Updates

- Added Hebrew language support
- Improved question recognition
- Added new categories
- UI/UX improvements