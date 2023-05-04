import {
  Country,
  DriveTrain,
  EngineIntake,
  EnginePlacement,
  Maker,
  Model,
} from "./ModelType";

const cadillacSeville: Model = {
  modelName: "Seville",
  maker: Maker.Cadillac,
  enginePlacement: EnginePlacement.Front,
  engineIntake: EngineIntake.NA,
  driveTrain: DriveTrain.FWD,
  country: Country.American,
  modelYearFrom: 1979,
  modelYearTo: 1985,
  doors: 4,
  horsepower: 145,
};

const mercedes560: Model = {
  modelName: "560 SEC AMG",
  maker: Maker.MercedesBenz,
  country: Country.Germany,
  enginePlacement: EnginePlacement.Front,
  engineIntake: EngineIntake.NA,
  driveTrain: DriveTrain.RWD,
  modelYear: 1989,
  doors: 2,
  horsepower: 295,
};

const chevroletC3: Model = {
  modelName: "Stingray Convertible (Corvette C3)",
  maker: Maker.Chevrolet,
  enginePlacement: EnginePlacement.Front,
  engineIntake: EngineIntake.NA,
  driveTrain: DriveTrain.RWD,
  country: Country.American,
  modelYear: 1972,
  doors: 2,
  horsepower: 270,
};

const chevroletC4: Model = {
  modelName: "Corvette C4",
  maker: Maker.Chevrolet,
  enginePlacement: EnginePlacement.Front,
  engineIntake: EngineIntake.NA,
  driveTrain: DriveTrain.RWD,
  country: Country.American,
  modelYear: 1984,
  doors: 2,
  horsepower: 205,
};

const gmcSyclone: Model = {
  modelName: "Syclone",
  maker: Maker.GMC,
  enginePlacement: EnginePlacement.Front,
  engineIntake: EngineIntake.Turbo,
  driveTrain: DriveTrain.AWD,
  country: Country.American,
  modelYear: 1991,
  doors: 2,
  horsepower: 280,
};

const subaruWrx: Model = {
  modelName: "WRX STI",
  maker: Maker.Subaru,
  enginePlacement: EnginePlacement.Front,
  engineIntake: EngineIntake.Turbo,
  driveTrain: DriveTrain.AWD,
  country: Country.Japanese,
  modelYearFrom: 2014,
  modelYearTo: 2020,
  doors: 4,
  horsepower: 341,
};

const fordShelby: Model = {
  modelName: "Shelby GT350R (Mustang)",
  maker: Maker.Ford,
  enginePlacement: EnginePlacement.Front,
  engineIntake: EngineIntake.NA,
  driveTrain: DriveTrain.RWD,
  country: Country.American,
  modelYear: 2019,
  horsepower: 526,
  doors: 2,
};

const fordThunderbird: Model = {
  modelName: "Thunderbird",
  maker: Maker.Ford,
  enginePlacement: EnginePlacement.Front,
  engineIntake: EngineIntake.Turbo,
  driveTrain: DriveTrain.RWD,
  country: Country.American,
  modelYear: 1988,
  doors: 2,
  horsepower: 190,
};

export const modelData: Model[] = [
  cadillacSeville,
  mercedes560,
  chevroletC3,
  chevroletC4,
  gmcSyclone,
  subaruWrx,
  fordShelby,
  fordThunderbird,
];
