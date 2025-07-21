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
exports.TraderHelper = void 0;
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const baseJson = __importStar(require("../db/base.json"));
const fs = __importStar(require("fs"));
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const path_1 = __importDefault(require("path"));
const Price_1 = require("./Price");
const MysteryContainerInfo_1 = require("./MysteryContainerInfo");
class TraderHelper {
    // getRandomInt(3) returns 0, 1, or 2
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    /**
    * Add profile picture to our trader
    * @param baseJson json file for trader (db/base.json)
    * @param preAkiModLoader mod loader class - used to get the mods file path
    * @param imageRouter image router class - used to register the trader image path so we see their image on trader page
    * @param traderImageName Filename of the trader icon to use
    */
    registerProfileImage(baseJson, modName, preAkiModLoader, imageRouter, traderImageName) {
        // Reference the mod "res" folder
        const imageFilepath = `./${preAkiModLoader.getModPath(modName)}res`;
        // Register a route to point to the profile picture - remember to remove the .jpg from it
        imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/${traderImageName}`);
    }
    /**
     * Add record to trader config to set the refresh time of trader in seconds (default is 60 minutes)
     * @param traderConfig trader config to add our trader to
     * @param baseJson json file for trader (db/base.json)
     * @param refreshTimeSecondsMin How many seconds between trader stock refresh min time
     * @param refreshTimeSecondsMax How many seconds between trader stock refresh max time
     */
    setTraderUpdateTime(traderConfig, baseJson, refreshTimeSecondsMin, refreshTimeSecondsMax) {
        // Add refresh time in seconds to config
        const traderRefreshRecord = {
            traderId: baseJson._id,
            seconds: {
                min: refreshTimeSecondsMin,
                max: refreshTimeSecondsMax
            }
        };
        traderConfig.updateTime.push(traderRefreshRecord);
    }
    /**
     * Add our new trader to the database
     * @param traderDetailsToAdd trader details
     * @param tables database
     * @param jsonUtil json utility class
     */
    // rome-ignore lint/suspicious/noExplicitAny: traderDetailsToAdd comes from base.json, so no type
    addTraderToDb(traderDetailsToAdd, tables, jsonUtil) {
        // Add trader to trader table, key is the traders id
        tables.traders[traderDetailsToAdd._id] = {
            assort: this.createAssortTable(), // assorts are the 'offers' trader sells, can be a single item (e.g. carton of milk) or multiple items as a collection (e.g. a gun)
            base: jsonUtil.deserialize(jsonUtil.serialize(traderDetailsToAdd)), // Deserialise/serialise creates a copy of the json and allows us to cast it as an ITraderBase
            questassort: {
                started: {},
                success: {
                /*
                "66b15c72b10189169400fb52": "gambler_intro",
                "66b59e1cfcf263f4d70af422": "gambler_ammo_part_1",
                "66b59e1cfcf263f4d70af432": "gambler_ammo_part_2",
                "66b59e1cfcf263f4d70af433": "gambler_ammo_part_3",
                "66b59e1cfcf263f4d70af423": "gambler_ammo_part_4",
                "66b59e1cfcf263f4d70af430": "gambler_ammo_part_5",
                "66b59e1cfcf263f4d70af425": "gambler_ammo_part_6",
                "66b59e1cfcf263f4d70af428": "gambler_ammo_part_7",
                "66b59e1cfcf263f4d70af427": "gambler_ammo_part_8",
                "66b59e1cfcf263f4d70af42a": "gambler_ammo_part_9",
                "66b59e1cfcf263f4d70af429": "gambler_ammo_part_10",
                "66b59e1cfcf263f4d70af434": "gambler_ammo_part_11",
                "66b59e1cfcf263f4d70af42b": "gambler_ammo_part_12",
                "66b59e1cfcf263f4d70af42f": "gambler_ammo_part_13",
                "66b59e1cfcf263f4d70af431": "gambler_ammo_part_14",
                "66b59e1cfcf263f4d70af42d": "gambler_ammo_part_15",
                "66b59e1cfcf263f4d70af42c": "gambler_ammo_part_16",
                "66b59e1cfcf263f4d70af42e": "gambler_ammo_part_17"
                */
                },
                fail: {}
            } // questassort is empty as trader has no assorts unlocked by quests
        };
    }
    /**
     * Create basic data for trader + add empty assorts table for trader
     * @param tables SPT db
     * @param jsonUtil SPT JSON utility class
     * @returns ITraderAssort
     */
    createAssortTable() {
        // Create a blank assort object, ready to have items added
        const assortTable = {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {}
        };
        return assortTable;
    }
    /**
    * Add container to trader PostDBLoad.
    * @param tables SPT db
    * @param traderId Traders id (basejson/_id value)
    */
    addSingleItemsToTrader(tables, traderId, assortCreator, container, logger) {
        const config = jsonc_1.jsonc.parse(fs.readFileSync(path_1.default.resolve(__dirname, "../config/config.jsonc"), "utf-8"));
        const info = (0, MysteryContainerInfo_1.MysteryContainerInfo)(config);
        for (const [key, value] of Object.entries(info)) {
            // store containers to trader assort
            if (config.container_config[key + '_enable']) {
                // isAmmo and ammo is disabled: SKIP all ammo
                if ((parseInt(key.substring(0, 1)) || key.substring(0, 1) == '.') && !config.container_config['all_ammo_enable']) {
                    continue;
                }
                const newTrade = assortCreator.createSingleAssortItem(value._id, value.quest_id);
                if (value.barter) {
                    for (const [barter, amount] of Object.entries(value.barter)) {
                        newTrade.addBarterCost(barter, amount);
                    }
                }
                else {
                    newTrade.addMoneyCost(Money_1.Money.ROUBLES, config.container_config[key + '_price'] * config.price_multiplier);
                }
                newTrade.addStackCount(config.container_config[key + '_unlimited_stock'] ? 999999 : config.container_config[key + '_stock'], config.container_config[key + '_unlimited_stock']);
                newTrade.addLoyaltyLevel(1);
                newTrade.export(tables.traders[baseJson._id]);
            }
        }
    }
    // find container info based on its quest_id
    findItem(quest_id, info) {
        for (const [key, value] of Object.entries(info)) {
            if (quest_id == value.quest_id) {
                return key;
            }
        }
        return undefined;
    }
    /**
    * Updated container prices PostSPTLoad
    * @param tables SPT db
    * @param traderId Traders id (basejson/_id value)
    */
    updateContainerPrices(tables, traderId, assortCreator, container, logger) {
        const config = jsonc_1.jsonc.parse(fs.readFileSync(path_1.default.resolve(__dirname, "../config/config.jsonc"), "utf-8"));
        const info = (0, MysteryContainerInfo_1.MysteryContainerInfo)(config);
        const price = new Price_1.Price(container, config, logger);
        const fleaPrices = tables.templates.prices;
        const generatedPrices = price.generateContainerPrices();
        const gamblerAssort = tables.traders[traderId].assort;
        //update trader assort prices 
        for (const [key, _] of Object.entries(gamblerAssort.barter_scheme)) {
            const currentItem = this.findItem(key, info);
            if (generatedPrices[currentItem + '_price']) {
                gamblerAssort.barter_scheme[key][0][0].count = generatedPrices[currentItem + '_price'];
            }
        }
        // updated container flea prices
        for (const [key, value] of Object.entries(info)) {
            if (generatedPrices[key + '_price'] > 250000) {
                if (generatedPrices[key + '_price']) {
                    fleaPrices[value._id] = generatedPrices[key + '_price'] * 1.20;
                }
            }
            else {
                if (generatedPrices[key + '_price']) {
                    fleaPrices[value._id] = generatedPrices[key + '_price'] * 1.35;
                }
            }
        }
    }
    /**
    * Add traders name/location/description to the locale table
    * @param baseJson json file for trader (db/base.json)
    * @param tables database tables
    * @param fullName Complete name of trader
    * @param firstName First name of trader
    * @param nickName Nickname of trader
    * @param location Location of trader (e.g. "Here in the cat shop")
    * @param description Description of trader
    */
    addTraderToLocales(baseJson, tables, fullName, firstName, nickName, location, description) {
        // For each language, add locale for the new trader
        const locales = Object.values(tables.locales.global);
        for (const locale of locales) {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        }
    }
}
exports.TraderHelper = TraderHelper;
//# sourceMappingURL=traderHelpers.js.map