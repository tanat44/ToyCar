export type Model = {
  modelName: string;
  maker: Maker;
  country: Country;
  enginePlacement: EnginePlacement;
  driveTrain: DriveTrain;
  engineIntake: EngineIntake;
  modelYear?: number;
  modelYearFrom?: number;
  modelYearTo?: number;
  doors: number;
  horsepower?: number;
  detail?: string;
};

export enum EnginePlacement {
  Front,
  Middle,
  Rear,
  Electric,
}

export enum EngineIntake {
  NA,
  Turbo,
  Supercharge,
  TurboSupercharge,
  Electric,
}

export enum DriveTrain {
  FWD,
  RWD,
  AWD,
}

export enum Country {
  America,
  Croatia,
  German,
  Japan,
  Britain,
}

export enum Maker {
  Cadillac,
  Chevrolet,
  Ford,
  GMC,
  Honda,
  Mazda,
  MercedesBenz,
  Nissan,
  Rimac,
  Subaru,
  Tesla,
}
