angular.module('dynas')
    .config(function (blockUIConfig) {

        blockUIConfig.delay = 100;

        blockUIConfig.template =
            '<div class="block-ui-overlay"></div>' +
            '<div class="block-ui-message-container">' +
            '<div class="block-ui-message" style="background-color: transparent;color: green;">' +
            '<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>' +
            '</div>' +
            '</div>';

    });
