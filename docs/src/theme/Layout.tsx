import React from "react";
import OriginalLayout from "@theme-original/Layout";
import AiAssistant from "../components/AiAssistant";
import { AiAssistantProvider } from "@sista/ai-assistant-react";
const config = require("../config");

const Layout = (props) => {
  return (
    <OriginalLayout {...props}>
      {props.children}
      <AiAssistant />
    </OriginalLayout>
  );
};

const Providers = (props) => {
  return (
    <AiAssistantProvider
      apiKey={config.SISTA_AI_API_KEY}
    >
      <Layout {...props} />
    </AiAssistantProvider>
  );
};

export default Providers;
