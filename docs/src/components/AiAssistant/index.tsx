import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AiAssistantButton, useAiAssistant } from "@sista/ai-assistant-react";

const AiAssistant = () => {
  const { registerFunctions } = useAiAssistant();
  const history = useHistory();

  const goToNextPage = () => {
    const nextPageButton = document.querySelector(
      "a.pagination-nav__link.pagination-nav__link--next"
    ) as HTMLElement;
    if (nextPageButton) {
      nextPageButton.click();
    }
  };

  const goToPreviousPage = () => {
    const previousPageButton = document.querySelector(
      "a.pagination-nav__link.pagination-nav__link--prev"
    ) as HTMLElement;
    if (previousPageButton) {
      previousPageButton.click();
    }
  };

  const switchTheme = () => {
    const themeToggle = document.querySelector(
      'button[title^="Switch between dark and light mode"][class*="ColorModeToggle-styles-module"]'
    ) as HTMLElement;
    if (themeToggle) {
      themeToggle.click();
    }
  };

  const navigateToPage = ({ page }) => {
    history.push(`/Porto/${page}`);
  };

  useEffect(() => {
    const aiFunctions = [
      {
        function: {
          handler: goToNextPage,
          description:
            "Navigate to the next page. Go to the next page. Click on the next page. Next. Next Page.",
        },
      },
      {
        function: {
          handler: goToPreviousPage,
          description:
            "Navigate to the previous page. Go to the previous page. Click on the previous page. Previous. Previous Page.",
        },
      },
      {
        function: {
          handler: switchTheme,
          description:
            "Turn On / Off the light. Change theme color. Switches between dark and light modes. Toggle the theme.",
        },
      },
      {
        function: {
          handler: navigateToPage,
          description: "Go to a specific page. Navigate to a page.",
          parameters: {
            type: "object",
            properties: {
              page: {
                type: "string",
                description: "The page to navigate to.",
                enum: [
                  "docs/",
                  "docs/Intro",

                  "docs/Layers/Layers Overview",
                  "docs/Layers/Containers Layer",
                  "docs/Layers/Ship Layer",

                  "docs/Components/Components Overview",
                  "docs/Components/Main Components",
                  "docs/Components/Optional Components",

                  "docs/Basics/Components Interaction",
                  "docs/Basics/Containers Dependencies",
                  "docs/Basics/Data Flow",

                  "docs/Features/AI%20Driven Development",
                  "docs/Features/Monolithic to Microservices",

                  "docs/Quality Attributes",
                  "docs/Implementations",
                  "docs/Feedback",
                  "docs/Author",
                  "docs/Donations",
                ],
              },
            },
            required: ["page"],
          },
        },
      },
    ];

    if (registerFunctions) {
      registerFunctions(aiFunctions);
    }
  }, [registerFunctions]);

  return <AiAssistantButton />;
};

export default AiAssistant;
