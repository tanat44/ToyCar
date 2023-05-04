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
};

export enum EnginePlacement {
  Front,
  Middle,
  Rear,
}

export enum EngineIntake {
  NA,
  Turbo,
  Supercharge,
  TurboSupercharge,
}

export enum DriveTrain {
  FWD,
  RWD,
  AWD,
}

export enum Country {
  American,
  Germany,
  Japanese,
  British,
}

export enum Maker {
  Cadillac,
  Chevrolet,
  Ford,
  GMC,
  Honda,
  MercedesBenz,
  Subaru,
}
