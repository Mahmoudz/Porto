import React from "react";
import OriginalLayout from "@theme-original/Layout";
import {
  AiAssistantButton,
  AiAssistantProvider,
} from "@sista/ai-assistant-react";
const config = require("../config");

const Layout = (props) => (
  // This instance of AiAssistant is for the docs pages only, NOT for the landing page, thers is another instance for that.
  <AiAssistantProvider apiKey={config.SISTA_AI_API_KEY}>
    <OriginalLayout {...props}>
      {props.children}
      <AiAssistantButton />
    </OriginalLayout>
  </AiAssistantProvider>
);

export default Layout;
