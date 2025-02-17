import { RawData } from "app/models/Data.model";
import { ScienceData } from "app/models/ScienceData.model";

export const SCIENCE_DATA: RawData<ScienceData> = {
  "cheatSheet": {
    "title": "Science",
    "icon": "Lab"
  },
  "data": {
    "packs": [
      {
        "iconId": "Automation_science_pack",
        "count": 5
      },
      {
        "iconId": "Logistic_science_pack",
        "count": 6
      },
      {
        "iconId": "Military_science_pack",
        "count": 5
      },
      {
        "iconId": "Chemical_science_pack",
        "count": 12
      },
      {
        "iconId": "Production_science_pack",
        "count": 7
      },
      {
        "iconId": "Utility_science_pack",
        "count": 7
      }
    ],
    "assembler2": {
      "iconId": "Assembling_machine_2",
      "speed": "45/m"
    },
    "assembler3": {
      "iconId": "Assembling_machine_3",
      "speed": "75/m"
    },
    "space2": {
      "iconId": "Space_science_pack",
      "speed": "1R/22m"
    },
    "space3": {
      "iconId": "Space_science_pack",
      "speed": "1R/13m"
    }
  }
};
