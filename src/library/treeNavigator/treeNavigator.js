/*globals angular*/

'use strict';

require( './treeNavigator.node.js' );
require( './treeNavigator.header.js' );

angular.module(
    'isis.ui.treeNavigator',
    [ 'isis.ui.treeNavigator.node', 'isis.ui.treeNavigator.header' ]
  )

  .controller( 'TreeNavigatorController', function ( $scope, $log ) {
    $log.log( 'In TreeNavigatorController' );


  } )

  .directive(
  'treeNavigator', function () {
    return {
      scope: {
        treeData: '=',
        config: '=',
        contextMenuData: '=',
        state: '='
      },

      restrict: 'E',
      replace: true,
      templateUrl: '/isis-ui-components/templates/treeNavigator.html',
      controller: 'TreeNavigatorController'

    };
  }
);