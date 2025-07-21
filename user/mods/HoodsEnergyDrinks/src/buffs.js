"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buffs = void 0;
class Buffs {
    // all energy drinks will use this buff if alterative buffs enabled in config
    alternate_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 300,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 300,
            "SkillName": "",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 300,
            "SkillName": "Endurance",
            "Value": 3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 300,
            "SkillName": "Strength",
            "Value": 3
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 300,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 3,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 300,
            "SkillName": "Perception",
            "Value": 3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 300,
            "SkillName": "Attention",
            "Value": 3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 300,
            "SkillName": "Search",
            "Value": 3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 300,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 300,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 300,
            "Duration": 50,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 300,
            "Duration": 30,
            "SkillName": "",
            "Value": 0
        }
    ];
    monster_blue_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "SkillName": "",
            "Value": 0.2
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "SkillName": "",
            "Value": 5
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 5,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "SkillName": "Perception",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "SkillName": "Intellect",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "SkillName": "Attention",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "SkillName": "Search",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 400,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 400,
            "Duration": 50,
            "SkillName": "",
            "Value": -0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 400,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    monster_green_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "SkillName": "",
            "Value": 0.4
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "SkillName": "",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "SkillName": "Endurance",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "SkillName": "Strength",
            "Value": 5
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 400,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 5,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 400,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 400,
            "Duration": 50,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 400,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    monster_white_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Endurance",
            "Value": 3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Strength",
            "Value": 3
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 3,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Perception",
            "Value": 3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Attention",
            "Value": 3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Search",
            "Value": 3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 50,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 600,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    monster_strawberry_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.2
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Endurance",
            "Value": 3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Strength",
            "Value": 3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HealthRate",
            "Chance": 1,
            "Delay": 1,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.4
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Vitality",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Health",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "HeavyVests",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "LightVests",
            "Value": 5
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 5,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 50,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 600,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    ghost_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.2
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Intellect",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Attention",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Search",
            "Value": 10
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 10,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "CovertMovement",
            "Value": 10
        },
        {
            "AbsoluteValue": false,
            "BuffType": "WeightLimit",
            "Chance": 1,
            "Delay": 1,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 50,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 600,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    ghost_swedish_fish_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.4
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Intellect",
            "Value": 15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Attention",
            "Value": 15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Search",
            "Value": 15
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 15,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "CovertMovement",
            "Value": 15
        },
        {
            "AbsoluteValue": false,
            "BuffType": "WeightLimit",
            "Chance": 1,
            "Delay": 1,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.25
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 50,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    ghost_peaches_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 1.0
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 30
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Endurance",
            "Value": 20
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Strength",
            "Value": 20
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Intellect",
            "Value": 20
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Attention",
            "Value": 20
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Search",
            "Value": 20
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 20,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "CovertMovement",
            "Value": 20
        },
        {
            "AbsoluteValue": false,
            "BuffType": "WeightLimit",
            "Chance": 1,
            "Delay": 1,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.35
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": -1.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    nos_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.65
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 20
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Endurance",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Strength",
            "Value": 10
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 10,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 50,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 600,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    stalker_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.4
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Endurance",
            "Value": 7
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Strength",
            "Value": 7
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 7,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Perception",
            "Value": 7
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Attention",
            "Value": 7
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Search",
            "Value": 7
        },
        {
            "AbsoluteValue": false,
            "BuffType": "WeightLimit",
            "Chance": 1,
            "Delay": 1,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.07
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 50,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    monster_punch_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.4
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Endurance",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Strength",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HealthRate",
            "Chance": 1,
            "Delay": 1,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.4
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 10,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "AimDrills",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "MagDrills",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "HeavyVests",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "LightVests",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Vitality",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    bang_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.4
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Endurance",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Strength",
            "Value": 10
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 10
        },
        {
            "AbsoluteValue": false,
            "BuffType": "WeightLimit",
            "Chance": 1,
            "Delay": 1,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.05
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "AimDrills",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "MagDrills",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 50,
            "SkillName": "",
            "Value": -1.0
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    monster_doctor_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.6
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 20
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Endurance",
            "Value": 15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Strength",
            "Value": 15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HealthRate",
            "Chance": 1,
            "Delay": 1,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.6
        },
        {
            "AbsoluteValue": false,
            "BuffType": "DamageModifier",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": -0.10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Vitality",
            "Value": 20
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Health",
            "Value": 20
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Immunity",
            "Value": 20
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 20,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 60,
            "SkillName": "",
            "Value": -1.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 600,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    monster_lemonade_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 2.0
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 30
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Endurance",
            "Value": 50
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Strength",
            "Value": 50
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 50,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "AimDrills",
            "Value": 50
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "MagDrills",
            "Value": 50
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "HeavyVests",
            "Value": 50
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "LightVests",
            "Value": 50
        },
        {
            "AbsoluteValue": false,
            "BuffType": "WeightLimit",
            "Chance": 1,
            "Delay": 1,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.30
        },
        {
            "AbsoluteValue": false,
            "BuffType": "DamageModifier",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": -0.15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HealthRate",
            "Chance": 1,
            "Delay": 1,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.6
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 200,
            "SkillName": "Health",
            "Value": -30
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 200,
            "SkillName": "Vitality",
            "Value": -30
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HealthRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 800,
            "SkillName": "",
            "Value": -0.1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": -2.0
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "",
            "Value": 0
        },
        {
            "AbsoluteValue": true,
            "BuffType": "QuantumTunnelling",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "",
            "Value": 0
        },
    ];
    rockstar_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.4
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Endurance",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Strength",
            "Value": 10
        },
        {
            "AbsoluteValue": false,
            "BuffType": "DamageModifier",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": -0.05
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "AimDrills",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "MagDrills",
            "Value": 10
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 10,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    starbucks_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.4
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Endurance",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Strength",
            "Value": 5
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 5,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Perception",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Attention",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Search",
            "Value": 5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HealthRate",
            "Chance": 1,
            "Delay": 1,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.15
        },
        {
            "AbsoluteValue": false,
            "BuffType": "WeightLimit",
            "Chance": 1,
            "Delay": 1,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.05
        },
        {
            "AbsoluteValue": false,
            "BuffType": "DamageModifier",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": -0.01
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 50,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 600,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
    c4_starburst_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 0.84
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "",
            "Value": 25
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Endurance",
            "Value": 15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "SkillName": "Strength",
            "Value": 15
        },
        {
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 600,
            "AbsoluteValue": true,
            "SkillName": "StressResistance",
            "Value": 15,
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Health",
            "Value": -15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 600,
            "Duration": 60,
            "SkillName": "",
            "Value": -1
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 600,
            "Duration": 80,
            "SkillName": "",
            "Value": 0
        }
    ];
    monster_pacific_punch_buffs = [
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HydrationRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 120,
            "SkillName": "",
            "Value": 0.3
        },
        {
            "AbsoluteValue": true,
            "BuffType": "StaminaRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 0.6
        },
        {
            "AbsoluteValue": true,
            "BuffType": "MaxStamina",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": 20
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Endurance",
            "Value": 10
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "Strength",
            "Value": 10
        },
        {
            "AbsoluteValue": false,
            "BuffType": "DamageModifier",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "",
            "Value": -0.15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "AimDrills",
            "Value": 20
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 0,
            "Duration": 800,
            "SkillName": "MagDrills",
            "Value": 20
        },
        {
            "AbsoluteValue": true,
            "BuffType": "SkillRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 120,
            "SkillName": "Vitality",
            "Value": -15
        },
        {
            "AbsoluteValue": true,
            "BuffType": "EnergyRate",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": -1.5
        },
        {
            "AbsoluteValue": true,
            "BuffType": "HandsTremor",
            "Chance": 1,
            "Delay": 800,
            "Duration": 60,
            "SkillName": "",
            "Value": 0
        }
    ];
}
exports.Buffs = Buffs;
//# sourceMappingURL=buffs.js.map