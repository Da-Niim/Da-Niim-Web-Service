
declare module "@storybook/react-webpack5" {
  interface StorybookConfig {
    stories: string[];
    addons: string[];
    framework: {
      name: string;
      options: Record<string, any>;
    };
    docs: {
      autodocs: string;
    };
    staticDirs: string[];
    options: {
      storySort?: {
        method: string;
        order: any[];
      };
    };
  }
}