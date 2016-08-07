angular.module('dynas')
    .config(function (blockUIConfig) {

        blockUIConfig.delay = 100;

        blockUIConfig.template = '<div class="text-center"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>';

    });
