// copy of vendor/mirasvit/module-rewards/src/RewardsCheckout/view/frontend/web/js/view/rewards-notifications.js
define([
    'ko',
    'jquery',
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function (
    ko,
    $,
    Component
) {
    'use strict';

    return Component.extend({
        component: 'Mirasvit_RewardsCheckout/js/view/rewards-notifications', // Breeze change

        initialize: function () {
            this.initChildren(); // Breeze change: removed _super() call
            return this;
        },

        initChildren: function () {
            this.messages = ko.observable('');
            this.createMessagesComponent();

            return this;
        },

        createMessagesComponent: function () {
            var self = this;
            setTimeout(function() {
                $.ajax({
                    url: self.url,
                    type: 'GET',
                    dataType: 'JSON',
                    complete: function (data) {
                        if (data.body.text) {
                            self.messages(data.body.text); // Breeze change: data.responseJSON.text => data.body.text
                        }
                    }
                });
            }, 100);

            return this;
        }
    });
});
