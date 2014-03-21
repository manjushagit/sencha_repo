// JavaScript Document
/**
 * Demonstrates how use an Ext.Carousel in vertical and horizontal configurations
 */
Ext.define('html5_app.view.Carousel', {
    extend: 'Ext.Container',
    xtype: 'caro',

    requires: [
        'Ext.carousel.Carousel'
    ],

    config: {
        cls: 'cards',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            flex: 1
        },
        items: [
		{
	            docked: 'top',
		    xtype: 'titlebar',
                    title: 'Carousel UI'
},
		{
            xtype: 'carousel',
	     ui: 'light',
           
            items: [{
                html: '<p>Swipe left to show the next card…</p>',
                style: 'background-color:#2ea2cc;color:white;font-size:20px; padding: 30px',
                cls: 'card'
            },
            {
                html: '<p>You can also tap on either side of the indicators.</p>',
                style: 'background-color:#f07e9e;color:white;font-size:20x;padding: 30px',
                cls: 'card'
            },
            {
                html: 'Card #3',
                style: 'background-color:#7e7ef0;color:white;font-size:20px;padding: 30px',
                cls: 'card'
            }]
        }, {
            xtype: 'carousel',
            ui: 'light',
            direction: 'vertical',
            items: [{
                html: '<p>Carousels can also be vertical <em>(swipe up)…</p>',
                style: 'background-color:#7e7ef0;color:white;font-size:20px;padding: 30px',
                cls: 'card dark'
            },
            {
                html: 'And can also use <code>ui:light</code>.',
                style: 'background-color:#2ea2cc;color:white;font-size:20px;padding: 30px',
                cls: 'card dark'
            },
            {
                html: 'Card #3',
                style: 'background-color:#f07e9e;color:white;font-size:20px;padding: 30px',
                cls: 'card dark'
            }]
        }]
    }
});