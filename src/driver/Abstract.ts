export abstract class Driver implements IDriver {
   abstract isApplicable(url: string): boolean;
   abstract init(createIcon: () => HTMLImageElement): void;
}

export interface IDriver {
   isApplicable(url: string): boolean;
   init(createIcon: () => HTMLImageElement): void;
}