/**
 * @author WMXPY
 * @namespace StorybookConfig
 * @description Index
 */

export type StorybookConfigOptions = {

    readonly stories: string[];
};

export const createStorybookConfig = (options: StorybookConfigOptions): any => {

    return {
        stories: options.stories,
        addons: [
            '@storybook/addon-a11y',
            "@storybook/addon-essentials",
            '@storybook/addon-storysource',
            '@storybook/addon-docs'
        ],
        webpackFinal: async (config: any) => {

            config.module.rules.push(
                {
                    test: /\.tsx?$/,
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            "@babel/typescript",
                            "@babel/react",
                        ],
                    },
                }
            );

            config.resolve.extensions.push('.ts', '.tsx');
            return config;
        },
    };
};
