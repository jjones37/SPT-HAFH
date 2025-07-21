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
const Traders_1 = require("C:/snapshot/project/obj/models/enums/Traders");
const fs = __importStar(require("fs"));
const baseJson = __importStar(require("../db/base.json"));
const traderHelpers_1 = require("./traderHelpers");
const itemCreateHelper_1 = require("./itemCreateHelper");
const fluentTraderAssortCreator_1 = require("./fluentTraderAssortCreator");
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const path_1 = __importDefault(require("path"));
const Gamble_1 = require("./Gamble");
class SampleTrader {
    mod;
    logger;
    traderHelper;
    fluentAssortCreator;
    hashUtil;
    config;
    constructor() {
        this.mod = "GamblerTrader";
    }
    /**
     * I'm just here so I won't get fined.
     * @param container Dependency container
     */
    preSptLoad(container) {
        this.logger = container.resolve("WinstonLogger");
        container.afterResolution("InventoryController", (_t, result) => {
            result.openRandomLootContainer = (pmcData, body, sessionID) => {
                return this.newOpenRandomLoot(container, pmcData, body, sessionID);
            };
        });
        this.logger.debug(`[${this.mod}] preAki Loaded`);
    }
    /**
     * I'm just 'bout that gambler action boss.
     * @param container Dependency container
     */
    postDBLoad(container) {
        this.logger.debug(`[${this.mod}] postDb Loading... `);
        const preSptModLoader = container.resolve("PreSptModLoader");
        const imageRouter = container.resolve("ImageRouter");
        const hashUtil = container.resolve("HashUtil");
        const configServer = container.resolve("ConfigServer");
        const traderConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        const ragfairConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.RAGFAIR);
        const databaseServer = container.resolve("DatabaseServer");
        const tables = databaseServer.getTables();
        const jsonUtil = container.resolve("JsonUtil");
        const itemCreate = new itemCreateHelper_1.ItemCreateHelper();
        this.config = jsonc_1.jsonc.parse(fs.readFileSync(path_1.default.resolve(__dirname, "../config/config.jsonc"), "utf-8"));
        this.hashUtil = hashUtil;
        this.traderHelper = new traderHelpers_1.TraderHelper();
        this.fluentAssortCreator = new fluentTraderAssortCreator_1.FluentAssortConstructor(this.hashUtil, this.logger);
        this.traderHelper.registerProfileImage(baseJson, 'GamblerTrader', preSptModLoader, imageRouter, "thegambler.jpg");
        this.traderHelper.setTraderUpdateTime(traderConfig, baseJson, this.config.trader_update_min_time, this.config.trader_update_max_time);
        // Add trader to trader enum
        Traders_1.Traders[baseJson._id] = baseJson._id;
        // Add trader to flea market
        ragfairConfig.traders[baseJson._id] = true;
        // Creates and stores new gambling items in database
        itemCreate.createItems(container);
        // Add new trader to the trader dictionary in DatabaseServer - has no assorts (items) yet
        this.traderHelper.addTraderToDb(baseJson, tables, jsonUtil);
        // Add gambling containers to trader
        this.traderHelper.addSingleItemsToTrader(tables, baseJson._id, this.fluentAssortCreator, container, this.logger);
        // WARNING: adds the same text to ALL locales (e.g. chinese/french/english)
        this.traderHelper.addTraderToLocales(baseJson, tables, baseJson.name, "Gambler", baseJson.nickname, baseJson.location, "Welcome Traveler! May I indulge you in purchasing some mystery boxes?");
        /*
        const maps = [
            "bigmap",     // customs
            "factory4_day",
            "factory4_night",
            "woods",
            "rezervbase",
            "shoreline",
            "interchange",
            "tarkovstreets",
            "lighthouse",
            "laboratory",
            "sandbox",    // groundzero
            "sandbox_high"// groundzero20
        ];
        
        //console.log(tables.locations["bigmap"].staticLoot["578f87a3245977356274f2cb"].itemDistribution) // Drawer
        //
        // adds poker chips to static loot containers on all maps
        for (const item of itemCreate.loot){
            for(const map of maps){
                const mapStaticLoot = tables.locations[map].staticLoot;
                const staticLootProbabilities = item.addToStaticLoot;
                for(const [lootContainer, probability] of Object.entries(staticLootProbabilities)){

                    try{
                        mapStaticLoot[lootContainer].itemDistribution.push({
                            "tpl": item.newId,
                            "relativeProbability": probability
                        });
                    } catch (e){
                        this.logger.debug("Could not add " + item.newId + " to container " + lootContainer + " on map " + map)
                    }

                }
            }
        }
        */
        this.logger.debug(`[${this.mod}] postDb Loaded`);
    }
    // Update container prices after all mods have loaded
    postSptLoad(container) {
        this.logger.success("[Gambler Trader] Generating Mystery Container Prices...");
        const databaseServer = container.resolve("DatabaseServer");
        const tables = databaseServer.getTables();
        this.traderHelper.updateContainerPrices(tables, baseJson._id, this.fluentAssortCreator, container, this.logger);
        this.logger.success("[Gambler Trader] Finished Loading! Ready To Launch.");
    }
    newOpenRandomLoot(container, pmcData, body, sessionID) {
        // Needed reference methods
        const lootGenerator = container.resolve("LootGenerator");
        const itemHelper = container.resolve("ItemHelper");
        const inventoryHelper = container.resolve("InventoryHelper");
        const eventOutputHolder = container.resolve("EventOutputHolder");
        const openedItem = pmcData.Inventory.items.find(x => x._id === body.item);
        const output = eventOutputHolder.getOutput(sessionID);
        if (itemHelper.getItem(openedItem._tpl) == undefined) {
            this.logger.error("[GamblerTrader] Cannot find unboxed mystery container in Inventory... Best option is to restart game.. I am not fully sure why this happens...");
            return output;
        }
        const containerDetails = itemHelper.getItem(openedItem._tpl);
        let gamble;
        const newItemsRequest = {
            itemsWithModsToAdd: [],
            foundInRaid: true,
            useSortingTable: true
        };
        const isSealedWeaponBox = containerDetails[1]._name.includes("event_container_airdrop"); // default airdrop container
        const isGamblingContainer = containerDetails[1]._name.includes("gambling_"); // Gambler items are tagged with `gambling_${container}` identifier
        const unlockedWeaponCrates = [
            "665829424de4820934746ce6",
            "665732e7ac60f009f270d1ef",
            "665888282c4a1b73af576b77",
        ];
        if (isGamblingContainer) {
            // All Gambler containers
            const currentContainer = containerDetails[1];
            gamble = new Gamble_1.Gamble(container, this.config, this.logger, currentContainer._name);
            gamble.newGamble();
            if (gamble.newItemsRequest.itemsWithModsToAdd.length != 0) {
                newItemsRequest.itemsWithModsToAdd = [...gamble.newItemsRequest.itemsWithModsToAdd];
                newItemsRequest.foundInRaid = gamble.newItemsRequest.foundInRaid;
            }
        }
        else {
            // All other sealed containers
            if (isSealedWeaponBox || unlockedWeaponCrates.includes(containerDetails[1]._id)) {
                const containerSettings = inventoryHelper.getInventoryConfig().sealedAirdropContainer;
                newItemsRequest.itemsWithModsToAdd.push(...lootGenerator.getSealedWeaponCaseLoot(containerSettings));
                if (containerSettings.foundInRaid) {
                    newItemsRequest.foundInRaid = containerSettings.foundInRaid;
                }
            }
            else {
                const rewardContainerDetails = inventoryHelper.getRandomLootContainerRewardDetails(openedItem._tpl);
                if (!rewardContainerDetails || !rewardContainerDetails.rewardCount) {
                    this.logger.error(`Unable to add loot to container: ${openedItem._tpl}, no rewards found`);
                }
                else {
                    newItemsRequest.itemsWithModsToAdd.push(...lootGenerator.getRandomLootContainerLoot(rewardContainerDetails));
                    if (rewardContainerDetails.foundInRaid) {
                        newItemsRequest.foundInRaid = rewardContainerDetails.foundInRaid;
                    }
                }
            }
        }
        let multipleItems;
        if (newItemsRequest.itemsWithModsToAdd.length != 0) {
            if (inventoryHelper.canPlaceItemsInInventory(sessionID, newItemsRequest.itemsWithModsToAdd)) {
                inventoryHelper.removeItem(pmcData, body.item, sessionID, output);
                inventoryHelper.addItemsToStash(sessionID, newItemsRequest, pmcData, output);
            }
            else {
                // notifierHelper.createNewMessageNotification(message); // Notifier Not Working
                this.logger.error(`[${this.mod}] Cannot Open Container! Inventory Is Full!`);
            }
        }
        else {
            // Container returned nothing...
            inventoryHelper.removeItem(pmcData, body.item, sessionID, output);
        }
        return output;
    }
}
module.exports = { mod: new SampleTrader() };
//# sourceMappingURL=mod.js.map