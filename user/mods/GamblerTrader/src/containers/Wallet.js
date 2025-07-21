"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
class Wallet {
    parent = "wallet";
    price_generate = true;
    rarities = [
        "_kinda_rare",
        "_rare",
        "_extra_uncommon",
        "_more_uncommon",
        "_uncommon",
        "_common",
        "_extra_common",
        "_base"
    ];
    stackable = [true, true, true, true, true, true, true, true];
    reward_amount = [
        2000000,
        1000000,
        500000,
        250000,
        100000,
        50000,
        25000,
        0
    ];
    rewards = [
        ['5449016a4bdc2d6f028b456f'],
        ['5449016a4bdc2d6f028b456f'],
        ['5449016a4bdc2d6f028b456f'],
        ['5449016a4bdc2d6f028b456f'],
        ['5449016a4bdc2d6f028b456f'],
        ['5449016a4bdc2d6f028b456f'],
        ['5449016a4bdc2d6f028b456f'],
        ['NaN']
    ];
}
exports.Wallet = Wallet;
//# sourceMappingURL=Wallet.js.map