"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomMysteryContainer = void 0;
class RandomMysteryContainer {
    parent = "random_mystery_container";
    rarities = [
        "_rare",
        "_uncommon",
        "_common",
    ];
    rolls = 4; // number of rolls to make
    rewards = [
        [
            'medical',
            'keycard',
            'premium_armor',
            'premium_weapon',
            'loadout',
            'bitcoin',
            'az_sealed_weapon_gamble',
        ],
        [
            'helmet',
            'armor',
            'melee',
            'weapon',
            'armor',
        ],
        [
            'wallet',
            'key',
            'stim',
            'food',
            'headset',
            'backpack',
            'rig',
            'gpcoin',
            '7.62x25',
            '9x18',
            '9x19',
            '9x21',
            '.357',
            '.45',
            '4.6x30',
            '5.7x28',
            '5.45x39',
            '5.56x45',
            '.300',
            '7.62x39',
            '7.62x51',
            '7.62x54',
            '.338',
            '9x39',
            '.366',
            '12.7x55',
            '12/70',
            '20/70',
            '23x75',
        ],
    ];
}
exports.RandomMysteryContainer = RandomMysteryContainer;
//# sourceMappingURL=RandomMysteryContainer.js.map