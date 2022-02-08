export declare function message(message: string): void;
export declare function warn(message: string): void;
export declare function fail(message: string): void;
export declare function markdown(message: string): void;
export interface PluginOptions {
    title: string;
    ignoreCoveragePattern: string[];
    coverageFilesPath: string;
    projectRoot?: string;
}
export declare const defaultPluginOptions: PluginOptions[];
/**
 * Danger.JS plugin to display the code coverage on a pull request by commenting it via the CI
 */
export declare function codeCoverage(pluginOptions?: PluginOptions[]): void;
