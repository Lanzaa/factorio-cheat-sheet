
import { RawData } from "app/models/Data.model";
import { OilRefiningData } from "app/models/OilRefiningData.model";

export const OIL_REFINING_DATA: RawData<OilRefiningData> = {
  "cheatSheet": {
    "title": "Oil Refining",
    "icon": "Oil_refinery"
  },
  "data": {
    "basicOil": [
      {
        "iconId": "Pumpjack",
        "count": 6
      },
      {
        "iconId": "Basic_oil_processing",
        "count": 4.5
      },
      {
        "iconId": "Plastic_bar",
        "count": 2
      }
    ],
    "rushAdvancedOil": {
      "Sulfur": 38,
      "Plastic_bar": 225,
      "Petroleum_gas": 2813,
      "Crude_oil": 6250
    },
    "simpleCrackingRatio": [
      {
        "iconId": "Advanced_oil_processing",
        "count": 8
      },
      {
        "iconId": "Heavy_oil_cracking",
        "count": 2
      },
      {
        "iconId": "Light_oil_cracking",
        "count": 7
      }
    ],
    "perfectCrackingRatio": [
      {
        "iconId": "Advanced_oil_processing",
        "count": 20
      },
      {
        "iconId": "Heavy_oil_cracking",
        "count": 5
      },
      {
        "iconId": "Light_oil_cracking",
        "count": 17
      }
    ],
    "moduledCrackingRatio": [
      {
        "iconId": "Advanced_oil_processing",
        "count": 15
      },
      {
        "iconId": "Heavy_oil_cracking",
        "count": 6
      },
      {
        "iconId": "Light_oil_cracking",
        "count": 22
      }
    ],
    "simpleLiquefactionCrackingRatio": [
      {
        "iconId": "Coal_liquefaction",
        "count": 12
      },
      {
        "iconId": "Heavy_oil_cracking",
        "count": 8
      },
      {
        "iconId": "Light_oil_cracking",
        "count": 11
      }
    ],
    "perfectLiquefactionCrackingRatio": [
      {
        "iconId": "Coal_liquefaction",
        "count": 60
      },
      {
        "iconId": "Heavy_oil_cracking",
        "count": 39
      },
      {
        "iconId": "Light_oil_cracking",
        "count": 55
      }
    ],
    "moduledLiquefactionCrackingRatio": [
      {
        "iconId": "Coal_liquefaction",
        "count": 8
      },
      {
        "iconId": "Heavy_oil_cracking",
        "count": 9
      },
      {
        "iconId": "Light_oil_cracking",
        "count": 15
      }
    ],
    "solidFuel": [
      [
        {
          "iconId": "Heavy_oil",
          "count": 40
        },
        {
          "iconId": "Light_oil",
          "count": 30
        },
        {
          "iconId": "Solid_fuel",
          "count": 3
        }
      ],
      [
        {
          "iconId": "Heavy_oil",
          "count": 40
        },
        {
          "iconId": "Solid_fuel",
          "count": 2
        }
      ],
      [
        {
          "iconId": "Heavy_oil",
          "count": 40
        },
        {
          "iconId": "Light_oil",
          "count": 30
        },
        {
          "iconId": "Petroleum_gas",
          "count": 20
        },
        {
          "iconId": "Solid_fuel",
          "count": 1
        }
      ]
    ],
    "production": [
      {
        "processes": [
          {
            "iconId": "Basic_oil_processing",
            "count": 1
          }
        ],
        "oil": "20/s",
        "water": "-",
        "petrol": "9/s",
        "lightOil": "-",
        "heavyOil": "-"
      },
      {
        "processes": [
          {
            "iconId": "Advanced_oil_processing",
            "count": 1
          }
        ],
        "oil": "20/s",
        "water": "10/s",
        "petrol": "11/s",
        "lightOil": "9/s",
        "heavyOil": "5/s"
      },
      {
        "processes": [
          {
            "iconId": "Advanced_oil_processing",
            "count": 1
          },
          {
            "iconId": "Light_oil_cracking",
            "count": 0.6
          }
        ],
        "oil": "20/s",
        "water": "19/s",
        "petrol": "17/s",
        "lightOil": "-",
        "heavyOil": "5/s"
      },
      {
        "processes": [
          {
            "iconId": "Advanced_oil_processing",
            "count": 1
          },
          {
            "iconId": "Heavy_oil_cracking",
            "count": 0.25
          }
        ],
        "oil": "20/s",
        "water": "13.75/s",
        "petrol": "11/s",
        "lightOil": "12.75/s",
        "heavyOil": "-"
      },
      {
        "processes": [
          {
            "iconId": "Advanced_oil_processing",
            "count": 1
          },
          {
            "iconId": "Heavy_oil_cracking",
            "count": 0.25
          },
          {
            "iconId": "Light_oil_cracking",
            "count": 0.85
          }
        ],
        "oil": "20/s",
        "water": "26.5/s",
        "petrol": "19.5/s",
        "lightOil": "-",
        "heavyOil": "-"
      },
      {
        "processes": [
          {
            "iconId": "Heavy_oil_cracking",
            "count": 1
          }
        ],
        "oil": "-",
        "water": "15/s",
        "petrol": "-",
        "lightOil": "15/s",
        "heavyOil": "20/s"
      },
      {
        "processes": [
          {
            "iconId": "Light_oil_cracking",
            "count": 1
          }
        ],
        "oil": "-",
        "water": "15/s",
        "petrol": "10/s",
        "lightOil": "15/s",
        "heavyOil": "-"
      }
    ]
  }
};
