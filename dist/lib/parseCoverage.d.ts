export declare const parseCoverage: (json: JSON) => {
    path: string;
    branches: {
        covered: number;
        all: number;
    };
    statements: {
        covered: number;
        all: number;
    };
    functions: {
        covered: number;
        all: number;
    };
}[];
