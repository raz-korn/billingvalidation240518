/*global QUnit*/

sap.ui.define([
	"dbv01/billingvalidation240518/controller/Partners.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Partners Controller");

	QUnit.test("I should test the Partners controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
