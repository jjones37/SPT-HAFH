"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCreator = void 0;
const Weapons_1 = require("./containers/Weapons");
const Helmets_1 = require("./containers/Helmets");
const Armors_1 = require("./containers/Armors");
class ItemCreator {
    armors;
    helmets;
    weapons;
    headsetCompatible;
    caliber;
    magazine;
    magazineMaxAmmo;
    weaponType;
    hashUtil;
    itemHelper;
    constructor(container) {
        this.armors = new Armors_1.Armors();
        this.helmets = new Helmets_1.Helmets();
        this.weapons = new Weapons_1.Weapons();
        this.headsetCompatible = true;
        this.hashUtil = container.resolve("HashUtil");
        this.itemHelper = container.resolve("ItemHelper");
    }
    // getRandomInt(3) returns 0, 1, or 2
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    createPreset(name, rarity) {
        let itemPreset = [];
        //console.log('createPreset ' + name + ' ' + rarity)
        switch (name) {
            case 'helmet':
                itemPreset = this.createHelmet(rarity);
                break;
            case 'armor':
                itemPreset = this.createArmor(rarity);
                break;
            case 'weapon':
                itemPreset = this.createGun(rarity);
                break;
        }
        return itemPreset;
    }
    // Returns a random helmet from helmets
    createHelmet(which) {
        let baseHelmet;
        for (let i = 0; i < this.helmets.rarities.length; i++) {
            if (which === this.helmets.rarities[i]) {
                baseHelmet = this.helmets.presets[i];
                break;
            }
        }
        const randomHelmet = this.getRandomInt(baseHelmet.length);
        let getItem = baseHelmet[randomHelmet];
        return this.generateItem(getItem);
    }
    // Returns a random Armor from armors
    createArmor(which) {
        let baseArmor;
        for (let i = 0; i < this.armors.rarities.length; i++) {
            if (which === this.armors.rarities[i]) {
                baseArmor = this.armors.presets[i];
                break;
            }
        }
        const randomArmor = this.getRandomInt(baseArmor.length);
        let getItem = baseArmor[randomArmor];
        return this.generateItem(getItem);
    }
    // Returns a random gun from weapons
    createGun(which) {
        let weaponBuilds;
        for (let i = 0; i < this.weapons.rarities.length; i++) {
            if (which === this.weapons.rarities[i]) {
                weaponBuilds = this.weapons.presets[i];
                break;
            }
        }
        const randomBuild = this.getRandomInt(weaponBuilds.length);
        let getItem = weaponBuilds[randomBuild];
        this.weaponType = which;
        return this.generateItem(getItem);
    }
    generateItem(build) {
        const item = [];
        // We map every build[i]._id to a newly generated _id inside of parenIdMap. We HAVE to do this as if we have two duplicate items they would have the same _id which will brick the player inventory.
        const parentIdMap = {};
        const _randomId = this.hashUtil.generate(); // New Item baseId;
        const weapon_name = build['Name'] ? build['Name'] : undefined;
        build = build.Items;
        let baseId;
        for (let i = 0; i < build.length; i++) {
            if (build[i]._tpl == "5a16b9fffcdbcb0176308b34") { // helmet has a headset
                this.headsetCompatible = false;
            }
            if (i == 0) { // item base
                baseId = build[i]._id; // Need the base to reference in attachments
                parentIdMap[baseId] = _randomId; // base id = _randomId
                item.push({
                    _id: _randomId,
                    _tpl: build[i]._tpl
                });
            }
            else { // Children Attachments  
                const newId = this.hashUtil.generate();
                // Every _id is mapped to a newly generated _id, so every item is unique and doesn"t _id collide
                if (parentIdMap[build[i]._id] == undefined) {
                    parentIdMap[build[i]._id] = newId;
                }
                if (build[i].parentId != baseId) { // Attachments with parents that are not the base Item
                    item.push({
                        _id: newId,
                        _tpl: build[i]._tpl,
                        parentId: parentIdMap[build[i].parentId],
                        slotId: build[i].slotId,
                        upd: build[i].upd?.Togglable ? ({
                            Togglable: {
                                On: true,
                            }
                        }) : {}
                    });
                }
                else {
                    if (build[i].slotId == "mod_magazine") {
                        // Save magazine
                        this.magazine = build[i]._tpl;
                        // Maximum rounds in saved magazine
                        const magInfo = this.itemHelper.getItem(this.magazine);
                        this.magazineMaxAmmo = magInfo[1]._props.Cartridges[0]._max_count;
                    }
                    item.push({
                        _id: newId,
                        _tpl: build[i]._tpl,
                        parentId: _randomId,
                        slotId: build[i].slotId,
                        upd: build[i].upd?.Togglable ? ({
                            Togglable: {
                                On: true,
                            }
                        }) : {}
                    });
                }
            }
        }
        const itemInfo = this.itemHelper.getItem(item[0]._tpl);
        this.caliber = itemInfo[1]._props.ammoCaliber; // save caliber
        return item;
    }
}
exports.ItemCreator = ItemCreator;
//# sourceMappingURL=itemCreator.js.map