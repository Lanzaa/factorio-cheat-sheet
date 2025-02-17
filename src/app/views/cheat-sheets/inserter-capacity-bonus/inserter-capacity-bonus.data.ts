import { RawData } from "app/models/Data.model";
import { InserterCapacityBonusData } from "app/models/InserterCapacityBonusData.model";

export const INSERTER_CAPACITY_BONUS_DATA: RawData<InserterCapacityBonusData> = {
  "cheatSheet": {
    "title": "Inserter Capacity Bonus",
    "icon": "Inserter_capacity_bonus_(research)"
  },
  "data": {
    "bonuses": [
      {
        "tech": "0",
        "nonStackItems": "1",
        "nonStackBonus": "base",
        "stackItems": "2",
        "stackBonus": "base"
      },
      {
        "tech": "1",
        "nonStackItems": "",
        "nonStackBonus": "",
        "stackItems": "3",
        "stackBonus": "+1"
      },
      {
        "tech": "2",
        "nonStackItems": "2",
        "nonStackBonus": "+1",
        "stackItems": "4",
        "stackBonus": "+1"
      },
      {
        "tech": "3",
        "nonStackItems": "",
        "nonStackBonus": "",
        "stackItems": "5",
        "stackBonus": "+1"
      },
      {
        "tech": "4",
        "nonStackItems": "",
        "nonStackBonus": "",
        "stackItems": "6",
        "stackBonus": "+1"
      },
      {
        "tech": "5",
        "nonStackItems": "",
        "nonStackBonus": "",
        "stackItems": "8",
        "stackBonus": "+2"
      },
      {
        "tech": "6",
        "nonStackItems": "",
        "nonStackBonus": "",
        "stackItems": "10",
        "stackBonus": "+2"
      },
      {
        "tech": "7",
        "nonStackItems": "3",
        "nonStackBonus": "+1",
        "stackItems": "12",
        "stackBonus": "+2"
      }
    ]
  }
};
