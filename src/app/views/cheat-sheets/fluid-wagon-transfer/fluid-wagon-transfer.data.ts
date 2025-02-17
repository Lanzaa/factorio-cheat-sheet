import { RawData } from "app/models/Data.model";
import { FluidWagonTransferData } from "app/models/FluidWagonTransferData.model";

export const FLUID_WAGON_TRANSFER_DATA: RawData<FluidWagonTransferData> = {
  "cheatSheet": {
    "title": "Fluid Wagon Transfer",
    "icon": "Fluid_wagon"
  },
  "data": {
    "pumpRate": 12000,
    "offshorePumpRate": 1200,
    "storageTankSize": 25000,
    "fluidWagonSize": 25000,
    "measuredTransferTimes": [
      {
        "pumps": "1",
        "transferTime": 3.4
      },
      {
        "pumps": "2",
        "transferTime": 2.2
      },
      {
        "pumps": "3",
        "transferTime": 1.8
      }
    ]
  }
};
