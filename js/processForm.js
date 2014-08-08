/**
 * Created by sh3530 on 8/8/14.
 */

$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {

    var $target = $( event.currentTarget );

    $target.closest( '.btn-group' )
        .find( '[data-bind="label"]' ).text( $target.text() )
        .end()
        .children( '.dropdown-toggle' ).dropdown( 'toggle' );

    return false;

});