"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraderHelper = void 0;
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const info_1 = require("./info");
class TraderHelper {
    /**
    * Add basic items to trader
    * @param tables SPT db
    * @param traderId Traders id (basejson/_id value)
    */
    addSingleItemsToTrader(tables, traderId, assortCreator, container, logger, config) {
        const info = info_1.DrinkInfo;
        for (const [key, value] of Object.entries(info)) {
            if (config[`${key}_sold_by_trader`]) {
                assortCreator.createSingleAssortItem(value._id)
                    .addUnlimitedStackCount()
                    .addBuyRestriction(config[`${key}_stock`])
                    .addMoneyCost(Money_1.Money.ROUBLES, (config[`enable_alternate_buffs`] ? config[`alternate_trader_price`] : config[`${key}_trader_price`]))
                    .addLoyaltyLevel(config[`${key}_loyalty_level`])
                    .export(tables.traders[traderId]);
            }
        }
    }
}
exports.TraderHelper = TraderHelper;
//# sourceMappingURL=traderHelper.js.map