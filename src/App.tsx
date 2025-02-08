import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";
import "./App.css";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://techiteasy.app.n8n.cloud/webhook/27b8919e-ec16-4111-a1ee-b5d51c9baa0d/chat",
      webhookConfig: {
        method: "POST",
        headers: {},
      },
      target: "#n8n-chat",
      mode: "fullscreen",
      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: "en",
      initialMessages: [
        `היי, אני אשף האוטומציות של Make it Easy - סוכנות אוטומציות לעסקים שחושבים חכם.
          מטרתי לעזור לך לזהות צוורי בקבוק בעסק ולהציע לך דרכים להתייעל ולחסוך זמן וכסף בעזרת אוטומציות עסקיות.
        `,
        `לקביעת פגישת אפיון חינמית ניתן להכנס לקישור
          \nhttps://calendly.com/solutions-makeiteasy`,
        `לשיחה ישירה בווטסאפ ניתן להכנס לקישור
        \nhttps://wa.link/cwgwtr`,
        `כדי שנוכל להתחיל, אשמח לקבל את השם שלך, מספר הטלפון, ומה שם העסק שלך`,
      ],
      i18n: {
        en: {
          title: "אשף האוטומציות 🧙🏻‍♂️",
          subtitle: "",
          footer: "",
          getStarted: "שיחה חדשה",
          inputPlaceholder: "שאל אותי כל דבר",
          closeButtonTooltip: "",
        },
      },
    });
  }, []);

  return <div></div>;
};

export default App;
