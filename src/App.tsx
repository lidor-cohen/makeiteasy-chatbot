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
        "היי!",
        "אני אשף האוטומציות 🧙🏻‍♂️, איך אני יכול לייעל את העסק שלך?",
      ],
      i18n: {
        en: {
          title: "אשף האוטומציות 🧙🏻‍♂️",
          subtitle: "אני כאן כדי לענות לך על כל שאלה 😜",
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
