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
  country: Country.America,
  modelYearFrom: 1979,
  modelYearTo: 1985,
  doors: 4,
  horsepower: 145,
};

const mercedes560: Model = {
  modelName: "560 SEC AMG",
  maker: Maker.MercedesBenz,
  country: Country.German,
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
  country: Country.America,
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
  country: Country.America,
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
  country: Country.America,
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
  country: Country.Japan,
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
  country: Country.America,
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
  country: Country.America,
  modelYear: 1988,
  doors: 2,
  horsepower: 190,
};

const mazda787: Model = {
  modelName: "787B",
  maker: Maker.Mazda,
  enginePlacement: EnginePlacement.Middle,
  engineIntake: EngineIntake.NA,
  driveTrain: DriveTrain.RWD,
  country: Country.Japan,
  modelYear: 1990,
  doors: 1,
  horsepower: 700,
  detail: "Group C sport prototype cars",
};

const nissanZ: Model = {
  modelName: "Z",
  maker: Maker.Nissan,
  enginePlacement: EnginePlacement.Front,
  engineIntake: EngineIntake.Turbo,
  driveTrain: DriveTrain.RWD,
  country: Country.Japan,
  modelYear: 2023,
  doors: 2,
  horsepower: 400,
};

const teslaY: Model = {
  modelName: "Model Y",
  maker: Maker.Tesla,
  enginePlacement: EnginePlacement.Electric,
  engineIntake: EngineIntake.Electric,
  driveTrain: DriveTrain.AWD,
  country: Country.America,
  modelYear: 2020,
  doors: 5,
  horsepower: 456,
};

const rimacNevera: Model = {
  modelName: "Nevera",
  maker: Maker.Rimac,
  enginePlacement: EnginePlacement.Electric,
  engineIntake: EngineIntake.Electric,
  driveTrain: DriveTrain.AWD,
  country: Country.Croatia,
  modelYear: 2022,
  doors: 2,
  horsepower: 1912,
  detail: "Fastest production electric car at top speed of 412 km/h",
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
  mazda787,
  nissanZ,
  teslaY,
];
