// copy of vendor/mirasvit/module-rewards/src/RewardsCheckout/view/frontend/web/js/view/rewards.js
define([
    'jquery',
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function ($, Component, customerData) {
    'use strict';

    customerData.reload(['rewards'], true);

    return Component.extend({
        component: 'Mirasvit_RewardsCheckout/js/view/rewards', // Breeze change

        initialize: function () {
            this._super();
            this.rewards = customerData.get('rewards');
            $(document).on('customer-data-reload', function () {
                if (!customerData.get('rewards')()['isVisibleMenu']) {
                    $('.mst-rewards-top-link').hide();
                }
            });
        }
    });
});
