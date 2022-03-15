import type { Config } from "@jest/types";

const swcConfigs = {
    sourceMaps: "inline",
    test: "*.spec.ts$",
    module: {
        type: "commonjs",
        strictMode: false
    }
};

const config: Config.InitialOptions = {
    maxWorkers: "50%",
    clearMocks: true,
    restoreMocks: true,
    resetMocks: true,
    resetModules: true,
    silent: true,
    globals: {
        window: {},
    },
    rootDir: "./src",
    testMatch: [
        "**/*/*.spec.ts"
    ],
    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest", swcConfigs]
    },
    coverageReporters: ["text"],
    collectCoverage: false,
    testEnvironment: "jsdom",
    coverageProvider: "v8",
    coveragePathIgnorePatterns: [
        "/\\.spec\\.ts$/i",
        "/.*node_modules.*/",
        "/.*__test-tools__.*/",
        "/.*types.*/",
        "/.*constants.ts"
    ]
};

export default config;
