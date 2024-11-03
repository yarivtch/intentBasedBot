import React, { useState, useEffect, useRef } from 'react';

import { 
  MessageSquare, 
  Send, 
  User, 
  Bot, 
  Info, 
  Calendar, 
  Package, 
  Phone, 
  FileText,
  Users,
  Briefcase,
  ShoppingCart,
  FileQuestion,
  Building
} from 'lucide-react';

import { knowledgeBase } from './knowledgeBase';
import { categories } from './Categories';

const PrisonServiceChatbot = () => {
    const [messages, setMessages] = useState([
      {
        type: 'bot',
        content: 'שלום! ניתן ללחוץ על אחד הנושאים למעלה כדי לקבל את המידע הרצוי. בנוסף. אפשר לשאול שאלות אחרות. איך אוכל לעזור לך? '
      }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ 
                behavior: "smooth",
                block: "end"
            });
        }, 100);
    };
    // פונקציה משופרת למציאת כוונה
    const findIntent = (query) => {
        query = query.toLowerCase();
        let bestMatch = null;
        let highestScore = 0;

        Object.entries(knowledgeBase).forEach(([intent, data]) => {
        // בדיקת התאמה למילות מפתח
        const keywordMatches = data.מילות_מפתח.filter(keyword => 
            query.includes(keyword.toLowerCase())
        ).length;

        // בדיקת התאמה לכותרת הקטגוריה
        const category = categories.find(c => c.intent === intent);
        const titleMatch = category && query.includes(category.title.toLowerCase()) ? 2 : 0;

        const totalScore = keywordMatches + titleMatch;

        if (totalScore > highestScore) {
            highestScore = totalScore;
            bestMatch = intent;
        }
        });

        return highestScore > 0 ? bestMatch : null;
    };

    // פונקציה משופרת לטיפול בשליחת הודעה
    const handleSend = () => {
        if (!input.trim()) return;

        // הוספת הודעת המשתמש
        setMessages(prev => [...prev, { type: 'user', content: input }]);
        setInput('');
        setIsTyping(true);

        // חיפוש התאמה וקבלת תשובה
        const intent = findIntent(input);
        let response;
        
        if (intent) {
        response = knowledgeBase[intent].תשובה;
        
        // הוספת הצעות רלוונטיות
        const relatedCategories = categories
            .filter(c => c.intent !== intent)
            .slice(0, 2);
        
        if (relatedCategories.length > 0) {
            response += '\n\nנושאים קשורים שעשויים לעניין אותך:';
            relatedCategories.forEach(category => {
            response += `\n• ${category.title}`;
            });
        }
        } else {
        response = `מצטער, לא הצלחתי להבין את שאלתך. 
        אנא נסה לנסח אותה אחרת או בחר מהקטגוריות למעלה:
        ${categories.slice(0, 3).map(c => `\n• ${c.title}`).join('')}`;
        }

        // הוספת השהיה לאפקט טבעי
        setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', content: response }]);
        setIsTyping(false);
        }, 1000);
    };

    // פונקציה משופרת לטיפול בלחיצה על קטגוריה
    const handleCategoryClick = (intent) => {
        const category = categories.find(c => c.intent === intent);
        if (knowledgeBase[intent]) {
        setMessages(prev => [
            ...prev,
            { 
            type: 'user', 
            content: `אני מעוניין במידע על ${category.title}` 
            },
            { 
            type: 'bot', 
            content: knowledgeBase[intent].תשובה
            }
        ]);
        setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        }
    };

    // חלק הממשק נשאר זהה, רק עם שינויים קלים בעיצוב
    return (
        <div className="flex flex-col h-[600px] max-w-2xl mx-auto bg-gray-50 rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 text-right">
            <h1 className="text-xl font-bold"></h1>
        </div>

        {/* Categories with improved styling */}
        <div className="flex flex-wrap gap-2 p-3 bg-white border-b">
            {categories.map((category) => (
            <button
                key={category.title}
                onClick={() => handleCategoryClick(category.intent)}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors text-sm group relative"
                title={category.description}
            >
                {category.icon}
                {category.title}
            </button>
            ))}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
            <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
                <div className="flex items-start gap-2 max-w-[80%]">
                {message.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-blue-600" />
                    </div>
                )}
                <div
                    className={`p-3 rounded-lg whitespace-pre-wrap ${
                    message.type === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                >
                    {message.content}
                </div>
                {message.type === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                    </div>
                )}
                </div>
            </div>
            ))}
            {isTyping && (
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Bot className="w-5 h-5 text-blue-600" />
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-gray-500">
                מקליד...
                </div>
            </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t">
            <div className="flex gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="הקלד את שאלתך כאן..."
                className="flex-1 p-2 border rounded-lg text-right"
            />
            <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
                <Send className="w-6 h-6" />
            </button>
            </div>
        </div>
        </div>
    );
    };

export default PrisonServiceChatbot;