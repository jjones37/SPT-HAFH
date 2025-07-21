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
exports.ItemCreateHelper = void 0;
const MysteryContainerInfo_1 = require("./MysteryContainerInfo");
const fs = __importStar(require("fs"));
const jsonc_1 = require("C:/snapshot/project/node_modules/jsonc");
const path_1 = __importDefault(require("path"));
class ItemCreateHelper {
    config;
    loot = [];
    // builds all mystery containers and pushes to database
    createItems(container) {
        this.config = jsonc_1.jsonc.parse(fs.readFileSync(path_1.default.resolve(__dirname, "../config/config.jsonc"), "utf-8"));
        const info = (0, MysteryContainerInfo_1.MysteryContainerInfo)(this.config);
        const customItem = container.resolve("CustomItemService");
        for (const [_, value] of Object.entries(info)) {
            const item = {
                newItem: {
                    _id: value._id,
                    _name: value._name,
                    _parent: "62f109593b54472778797866",
                    _props: {
                        "AnimationVariantsNumber": 0,
                        "BackgroundColor": "orange",
                        "BlocksArmorVest": false,
                        "CanPutIntoDuringTheRaid": true,
                        "CanRequireOnRagfair": false,
                        "CanSellOnRagfair": false,
                        "CantRemoveFromSlotsDuringRaid": [],
                        "ConflictingItems": [],
                        "Description": value.desc,
                        "DiscardLimit": -1,
                        "DiscardingBlock": false,
                        "DropSoundType": "None",
                        "ExamineExperience": 100,
                        "ExamineTime": 1,
                        "ExaminedByDefault": true,
                        "ExtraSizeDown": 0,
                        "ExtraSizeForceAdd": false,
                        "ExtraSizeLeft": 0,
                        "ExtraSizeRight": 0,
                        "ExtraSizeUp": 0,
                        "Grids": [
                            {
                                "_id": "6489c03c8bc5233fdc78e789",
                                "_name": "main",
                                "_parent": "6489c03c8bc5233fdc78e788",
                                "_props": {
                                    "cellsH": 1,
                                    "cellsV": 1,
                                    "filters": [
                                        {
                                            "ExcludedFilter": [
                                                "54009119af1c881c07000029"
                                            ],
                                            "Filter": []
                                        }
                                    ],
                                    "isSortingTable": false,
                                    "maxCount": 99,
                                    "maxWeight": 0,
                                    "minCount": 1
                                },
                                "_proto": "55d329c24bdc2d892f8b4567"
                            }
                        ],
                        "Height": value.height,
                        "HideEntrails": true,
                        "InsuranceDisabled": false,
                        "IsAlwaysAvailableForInsurance": false,
                        "IsLockedafterEquip": false,
                        "IsSpecialSlotOnly": false,
                        "IsUnbuyable": false,
                        "IsUndiscardable": false,
                        "IsUngivable": false,
                        "IsUnremovable": false,
                        "IsUnsaleable": false,
                        "ItemSound": "container_plastic",
                        "LootExperience": 20,
                        "MergesWithChildren": false,
                        "Name": value.name,
                        "NotShownInSlot": false,
                        "Prefab": {
                            "path": value.prefab,
                            "rcid": ""
                        },
                        "QuestItem": false,
                        "QuestStashMaxCount": 0,
                        "RagFairCommissionModifier": 1,
                        "RepairCost": 0,
                        "RepairSpeed": 0,
                        "SearchSound": "drawer_metal_looting",
                        "ShortName": value.shortName,
                        "Slots": [],
                        "StackMaxSize": 1,
                        "StackObjectsCount": 1,
                        "Unlootable": false,
                        "UnlootableFromSide": [],
                        "UnlootableFromSlot": "FirstPrimaryWeapon",
                        "UsePrefab": {
                            "path": "",
                            "rcid": ""
                        },
                        "Weight": 2,
                        "Width": value.width,
                        "ReverbVolume": 0
                    },
                    _proto: "",
                    _type: "Item"
                },
                fleaPriceRoubles: value.fleaPriceRoubles,
                handbookPriceRoubles: value.handbookPriceRoubles,
                handbookParentId: "5b5f6fa186f77409407a7eb7",
                locales: {
                    "en": {
                        name: value.name,
                        shortName: value.shortName,
                        description: value.desc
                    }
                }
            };
            customItem.createItem(item);
        }
    }
}
exports.ItemCreateHelper = ItemCreateHelper;
//# sourceMappingURL=itemCreateHelper.js.map