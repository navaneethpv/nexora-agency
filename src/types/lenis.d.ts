declare module 'lenis' {
    export default class Lenis {
        constructor(options?: any);
        raf(time: number): void;
        destroy(): void;
        scrollTo(target: any, options?: any): void;
        on(event: string, callback: (data: any) => void): void;
    }
}
