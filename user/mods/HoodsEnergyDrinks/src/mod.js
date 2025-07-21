"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const traderHelper_1 = require("./traderHelper");
const itemCreateHelper_1 = require("./itemCreateHelper");
const fluentTraderAssortCreator_1 = require("./fluentTraderAssortCreator");
const fs = __importStar(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const info_1 = require("./info");
// I'm just here so I won't get fined
class HoodsEnergyDrinks {
    mod;
    logger;
    traderHelper;
    fluentAssortCreator;
    config;
    constructor() {
        this.mod = "Hoods Energy Drinks";
    }
    preSptLoad(container) {
        const hashUtil = container.resolve("HashUtil");
        this.logger = container.resolve("WinstonLogger");
        this.logger.debug(`[${this.mod}] preAki Loading... `);
        this.traderHelper = new traderHelper_1.TraderHelper();
        this.fluentAssortCreator = new fluentTraderAssortCreator_1.FluentAssortConstructor(hashUtil, this.logger);
    }
    postDBLoad(container) {
        this.logger.debug(`[${this.mod}] postDb Loading... `);
        const configPath = node_path_1.default.resolve(__dirname, "../config/config.jsonc");
        this.config = jsonc_1.jsonc.parse(fs.readFileSync(configPath, "utf-8"));
        const databaseServer = container.resolve("DatabaseServer");
        const configServer = container.resolve("ConfigServer");
        const ragfairConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.RAGFAIR);
        const info = info_1.DrinkInfo;
        const itemCreate = new itemCreateHelper_1.ItemCreateHelper();
        const tables = databaseServer.getTables();
        itemCreate.buildItems(container, this.config);
        this.traderHelper.addSingleItemsToTrader(tables, '54cb57776803fa99248b456e', this.fluentAssortCreator, container, this.logger, this.config);
        const maps = [
            "bigmap", // customs
            "factory4_day",
            "factory4_night",
            "woods",
            "rezervbase",
            "shoreline",
            "interchange",
            "tarkovstreets",
            "lighthouse",
            "laboratory",
            "sandbox", // groundzero
            "sandbox_high" // groundzero_lvl_20+
        ];
        // flea ban energy drinks
        for (const [key, value] of Object.entries(info)) {
            if (this.config[`${key}_flea_banned`]) {
                ragfairConfig.dynamic.blacklist.custom.push(value._id);
            }
        }
        // Add all energy drinks to all levels of Hall Of Fame
        const hall_of_fame_ids = [
            tables.templates.items["63dbd45917fff4dee40fe16e"], // lvl 1
            tables.templates.items["65424185a57eea37ed6562e9"], // lvl 2
            tables.templates.items["6542435ea57eea37ed6562f0"] // lvl 3
        ];
        for (const item of itemCreate.loot) {
            hall_of_fame_ids.forEach((hall) => {
                for (const slot of hall._props.Slots) {
                    for (const filter of slot._props.filters) {
                        if (!filter.Filter.includes(item.newId)) {
                            filter.Filter.push(item.newId);
                        }
                    }
                }
            });
        }
        // Thanks to RainbowPC and his Lots Of Loot mod, based on his code inserting items into loose loot spawns
        for (const item of itemCreate.loot) {
            const lootComposedKey = item.newId + '_composedkey';
            for (const map of maps) {
                for (const [name, temp] of Object.entries(tables.locations)) {
                    const mapdata = temp;
                    if (name == map) {
                        for (const point of mapdata.looseLoot.spawnpoints) {
                            for (const itm of point.template.Items) {
                                if (itm._tpl == "5751496424597720a27126da") { // Hot Rod Energy Drink
                                    const originalItemID = itm._id;
                                    let originRelativeProb;
                                    for (const dist of point.itemDistribution) {
                                        if (dist.composedKey.key == originalItemID) {
                                            originRelativeProb = dist.relativeProbability;
                                            point.template.Items.push({
                                                _id: lootComposedKey,
                                                _tpl: item.newId,
                                            });
                                        }
                                    }
                                    //console.log(Math.max(Math.round(originRelativeProb * item.looseLootSpawnWeight), 1))
                                    point.itemDistribution.push({
                                        composedKey: {
                                            key: lootComposedKey,
                                        },
                                        relativeProbability: Math.max(Math.round(originRelativeProb * item.looseLootSpawnWeight), 1)
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
        for (const item of itemCreate.loot) {
            for (const map of maps) {
                const mapStaticLoot = tables.locations[map].staticLoot;
                const staticLootProbabilities = item.addToStaticLoot;
                for (const [lootContainer, probability] of Object.entries(staticLootProbabilities)) {
                    const hot_rod_energy_prob = this.getProbability(mapStaticLoot, lootContainer, '5751496424597720a27126da', map);
                    try {
                        mapStaticLoot[lootContainer].itemDistribution.push({
                            "tpl": item.newId,
                            "relativeProbability": Math.ceil(probability * hot_rod_energy_prob)
                        });
                    }
                    catch (e) {
                        this.logger.debug("[Hoods Energy Drinks] Could not add " + item.newId + " to container " + lootContainer + " on map " + map);
                    }
                }
            }
        }
        this.logger.debug(`[${this.mod}] postDb Loaded`);
        this.logger.success("[Hoods Energy Drinks] Energy Drinks Loaded!");
    }
    getProbability(mapStaticLoot, lootContainer, _id, map) {
        for (const [key, value] of Object.entries(mapStaticLoot)) {
            if (key != lootContainer)
                continue;
            for (let i = 0; i < value.itemDistribution.length; i++) {
                if (mapStaticLoot[key].itemDistribution[i].tpl == _id) {
                    return mapStaticLoot[key].itemDistribution[i].relativeProbability;
                }
            }
        }
        return 300; // base value for containers that don't have max energy drinks in their loot pool
    }
}
module.exports = { mod: new HoodsEnergyDrinks() };
//# sourceMappingURL=mod.js.map