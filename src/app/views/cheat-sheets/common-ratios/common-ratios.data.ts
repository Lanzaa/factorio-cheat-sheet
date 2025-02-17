
import { CommonRatioData } from "app/models/CommonRatiosData.model";
import { RawData } from "app/models/Data.model";

export const COMMON_RATIO_DATA: RawData<CommonRatioData> = {
  "cheatSheet": {
      "title": "Common Ratios",
      "icon": "Repair_pack"
  },
  "data": {
      "machineCraftSpeed": [
          {
              "iconId": "Assembling_machine_1",
              "speed": "0.5/s"
          },
          {
              "iconId": "Assembling_machine_2",
              "speed": "0.75/s"
          },
          {
              "iconId": "Assembling_machine_3",
              "speed": "1.25/s"
          },
          {
              "iconId": "Chemical_plant",
              "speed": "1/s"
          },
          {
              "iconId": "Oil_refinery",
              "speed": "1/s"
          }
      ],
      "scienceRatios": [
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=automation-science-pack:r:5/2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "2.5/s"
                  },
                  {
                      "iconId": "Automation_science_pack",
                      "count": 10
                  },
                  {
                      "iconId": "Iron_gear_wheel",
                      "count": 1
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=logistic-science-pack:r:5/2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "2.5/s"
                  },
                  {
                      "iconId": "Logistic_science_pack",
                      "count": 12
                  },
                  {
                      "iconId": "Inserter",
                      "count": 1
                  },
                  {
                      "iconId": "Transport_belt",
                      "count": 0.5
                  },
                  {
                      "iconId": "Iron_gear_wheel",
                      "count": 1.5
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=military-science-pack:r:5/2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "2.5/s"
                  },
                  {
                      "iconId": "Military_science_pack",
                      "count": 10
                  },
                  {
                      "iconId": "Piercing_rounds_magazine",
                      "count": 3
                  },
                  {
                      "iconId": "Grenade",
                      "count": 8
                  },
                  {
                      "iconId": "Wall",
                      "count": 1
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=chemical-science-pack:r:5/2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "2.5/s"
                  },
                  {
                      "iconId": "Chemical_science_pack",
                      "count": 24
                  },
                  {
                      "iconId": "Sulfur",
                      "count": 0.7
                  },
                  {
                      "iconId": "Advanced_circuit",
                      "count": 18
                  },
                  {
                      "iconId": "Engine_unit",
                      "count": 20
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=production-science-pack:r:5/2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "2.5/s"
                  },
                  {
                      "iconId": "Production_science_pack",
                      "count": 14
                  },
                  {
                      "iconId": "Straight_rail",
                      "count": 5
                  },
                  {
                      "iconId": "Electric_furnace",
                      "count": 3.33
                  },
                  {
                      "iconId": "Productivity_module",
                      "count": 10
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=utility-science-pack:r:5/2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "2.5/s"
                  },
                  {
                      "iconId": "Utility_science_pack",
                      "count": 14
                  },
                  {
                      "iconId": "Processing_unit",
                      "count": 13.33
                  },
                  {
                      "iconId": "Flying_robot_frame",
                      "count": 13.33
                  },
                  {
                      "iconId": "Low_density_structure",
                      "count": 40
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-60&rate=s&min=4&items=space-science-pack:r:5/2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "2.5/s"
                  },
                  {
                      "iconId": "Space_science_pack",
                      "count": 1
                  },
                  {
                      "iconId": "Rocket_control_unit",
                      "count": 60
                  },
                  {
                      "iconId": "Low_density_structure",
                      "count": 44
                  },
                  {
                      "iconId": "Rocket_fuel",
                      "count": 63
                  },
                  {
                      "iconId": "Solar_panel",
                      "count": 2
                  },
                  {
                      "iconId": "Accumulator",
                      "count": 2
                  },
                  {
                      "iconId": "Processing_unit",
                      "count": 2
                  }
              ]
          }
      ],
      "electronicsRatios": [
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=electronic-circuit:f:2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "5/s"
                  },
                  {
                      "iconId": "Electronic_circuit",
                      "count": 2
                  },
                  {
                      "iconId": "Copper_cable",
                      "count": 3
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=advanced-circuit:f:6",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "1.25/s"
                  },
                  {
                      "iconId": "Advanced_circuit",
                      "count": 6
                  },
                  {
                      "iconId": "Electronic_circuit",
                      "count": 1
                  },
                  {
                      "iconId": "Copper_cable",
                      "count": 1
                  },
                  {
                      "name": "Plastic",
                      "iconId": "Plastic_bar",
                      "count": 1.3
                  },
                  {
                      "comment": "Doesn't take into account Wire for GC"
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=processing-unit:f:5",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": ".625/s"
                  },
                  {
                      "iconId": "Processing_unit",
                      "count": 5
                  },
                  {
                      "iconId": "Advanced_circuit",
                      "count": 6
                  },
                  {
                      "iconId": "Electronic_circuit",
                      "count": 5
                  },
                  {
                      "comment": "Doesn't take into account GC for RC"
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-60&rate=s&min=4&items=speed-module:f:2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": ".167/s"
                  },
                  {
                      "iconId": "Speed_module",
                      "count": 2
                  },
                  {
                      "iconId": "Advanced_circuit",
                      "count": 4
                  },
                  {
                      "iconId": "Electronic_circuit",
                      "count": 1
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=speed-module-3:f:2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": ".042/s"
                  },
                  {
                      "iconId": "Speed_module_3",
                      "count": 2
                  },
                  {
                      "iconId": "Speed_module_2",
                      "count": 5
                  },
                  {
                      "iconId": "Speed_module",
                      "count": 10
                  },
                  {
                      "comment": "Same for Other Modules"
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=speed-module-3:f:2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": ".042/s"
                  },
                  {
                      "iconId": "Speed_module_3",
                      "count": 2
                  },
                  {
                      "iconId": "Processing_unit",
                      "count": 10
                  },
                  {
                      "iconId": "Advanced_circuit",
                      "count": 38
                  },
                  {
                      "iconId": "Electronic_circuit",
                      "count": 18
                  },
                  {
                      "name": "Plastic",
                      "iconId": "Plastic_bar",
                      "count": 8
                  }
              ]
          }
      ],
      "productionRatios": [
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=uranium-rounds-magazine:f:10",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "1.25/s"
                  },
                  {
                      "iconId": "Uranium_rounds_magazine",
                      "count": 10
                  },
                  {
                      "iconId": "Piercing_rounds_magazine",
                      "count": 3
                  },
                  {
                      "iconId": "Firearm_magazine",
                      "count": 1
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=rail:f:2",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "10/s"
                  },
                  {
                      "iconId": "Straight_rail",
                      "count": 2
                  },
                  {
                      "iconId": "Iron_stick",
                      "count": 1
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&min=4&items=flying-robot-frame:f:20",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "1.25/s"
                  },
                  {
                      "iconId": "Flying_robot_frame",
                      "count": 20
                  },
                  {
                      "iconId": "Electric_engine_unit",
                      "count": 10
                  },
                  {
                      "iconId": "Engine_unit",
                      "count": 10
                  },
                  {
                      "iconId": "Battery",
                      "count": 10
                  },
                  {
                      "iconId": "Pipe",
                      "count": 1
                  },
                  {
                      "iconId": "Iron_gear_wheel",
                      "count": 0.5
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=rocket-fuel:f:6",
              "name": "SF*1*1/2 = RF*1.25*10/30",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "0.833/s"
                  },
                  {
                      "iconId": "Rocket_fuel",
                      "count": 6
                  },
                  {
                      "iconId": "Solid_fuel",
                      "count": 5
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=battery:f:20",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "5/s"
                  },
                  {
                      "iconId": "Battery",
                      "count": 20
                  },
                  {
                      "iconId": "Sulfuric_acid",
                      "count": 2
                  },
                  {
                      "iconId": "Sulfur",
                      "count": 5
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=processing-unit:f:75",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "9.375/s"
                  },
                  {
                      "iconId": "Processing_unit",
                      "count": 75
                  },
                  {
                      "iconId": "Sulfuric_acid",
                      "count": 1
                  }
              ]
          }
      ],
      "miscRatios": [
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=transport-belt:f:1",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "5/s"
                  },
                  {
                      "iconId": "Transport_belt",
                      "count": 1
                  },
                  {
                      "iconId": "Iron_gear_wheel",
                      "count": 1
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=inserter:f:1",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "2.5/s"
                  },
                  {
                      "iconId": "Inserter",
                      "count": 1
                  },
                  {
                      "iconId": "Electronic_circuit",
                      "count": 1
                  },
                  {
                      "iconId": "Iron_gear_wheel",
                      "count": 1
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&items=electric-engine-unit:f:16",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "2/s"
                  },
                  {
                      "iconId": "Electric_engine_unit",
                      "count": 16
                  },
                  {
                      "iconId": "Lubricant",
                      "count": 3
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=4&furnace=stone-furnace&items=stone-wall:f:1",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_3",
                      "count": "2.5/s"
                  },
                  {
                      "iconId": "Wall",
                      "count": 1
                  },
                  {
                      "iconId": "Stone_brick",
                      "count": "12.5/s"
                  },
                  {
                      "iconId": "Stone_furnace",
                      "count": 40
                  },
                  {
                      "iconId": "Electric_furnace",
                      "count": 20
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&furnace=stone-furnace&items=iron-gear-wheel:f:1",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_1",
                      "count": "1/s"
                  },
                  {
                      "iconId": "Iron_gear_wheel",
                      "count": 1
                  },
                  {
                      "iconId": "Iron_plate",
                      "count": "2/s"
                  },
                  {
                      "iconId": "Stone_furnace",
                      "count": 6.5
                  }
              ]
          },
          {
              "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&rate=s&min=2&furnace=stone-furnace&items=iron-gear-wheel:f:1",
              "name": "",
              "ratio": [
                  {
                      "iconId": "Assembling_machine_2",
                      "count": "1.5/s"
                  },
                  {
                      "iconId": "Iron_gear_wheel",
                      "count": 1
                  },
                  {
                      "iconId": "Iron_plate",
                      "count": "3/s"
                  },
                  {
                      "iconId": "Stone_furnace",
                      "count": 10
                  },
                  {
                      "iconId": "Steel_furnace",
                      "count": 5
                  }
              ]
          }
      ],
      "rocketComponentsRatioNoSatellite": {
          "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&min=4&items=rocket-part:r:15",
          "name": "Rocket Comp. Ratio",
          "ratio": [
              {
                  "iconId": "Rocket_silo",
                  "count": 1
              },
              {
                  "iconId": "Low_density_structure",
                  "count": 40
              },
              {
                  "iconId": "Rocket_fuel",
                  "count": 60
              },
              {
                  "iconId": "Rocket_control_unit",
                  "count": 60
              }
          ]
      },
      "rocketComponentsRatioWithSatellite": {
          "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-1&min=4&items=space-science-pack:r:150",
          "name": "Rocket Comp. Ratio w/ Sat",
          "ratio": [
              {
                  "iconId": "Rocket_silo",
                  "count": 1
              },
              {
                  "iconId": "Low_density_structure",
                  "count": 44
              },
              {
                  "iconId": "Rocket_fuel",
                  "count": 63
              },
              {
                  "iconId": "Rocket_control_unit",
                  "count": 60
              }
          ]
      },
      "rocketComponentsModuledRatioWithSatellite": {
          "source": "https://kirkmcdonald.github.io/calc.html#data=0-17-60&rate=s&min=4&items=space-science-pack:r:5/2&modules=rocket-part:p3:p3:p3:p3;se:2",
          "name": "Rocket Comp. Module Ratio w/ Sat",
          "ratio": [
              {
                  "iconId": "Rocket_silo",
                  "count": 1
              },
              {
                  "iconId": "Low_density_structure",
                  "count": 33
              },
              {
                  "iconId": "Rocket_fuel",
                  "count": 46
              },
              {
                  "iconId": "Rocket_control_unit",
                  "count": 43
              }
          ]
      }
  }
};
