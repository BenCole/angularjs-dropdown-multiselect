/*
	eslint no-param-reassign: [
		"error",
		{
			"props": true,
			"ignorePropertyModificationsFor": [
				"$scope"
			]
		}
	]
*/

export default class MainController {
	constructor(
		$scope,
		$log,
		$http
	) {
		'ngInject';

		$scope.testing = true;
		$scope.testmodel = [{ id: 1 }];
		$scope.testdata = [
			{ id: 1, label: 'David' },
			{ id: 2, label: 'Jhon' },
			{ id: 3, label: 'Danny' },
		];
		$scope.testsettings = {
			selectionLimit: 1,
			selectedToTop: true,
			idProperty: 'id',
		};
		$scope.testevents = {
			onSelectionChanged() { // This event is not firing on selection of max limit
				$log.debug('you changed selection');
			},
		};
		$scope.data = {};

		$scope.isLoading = false;

		$scope.search = function (input) {
			console.log('%c Searching with ' + input, 'background: green; color: white; display: block;');
			$scope.isLoading = true;
			$http.get('https://api.myjson.com/bins/hl32x').then(function(data) {
				$scope.isLoading = false;
				$scope.data = data.data;
			})
		};

		$scope.model = [];
		$scope.data = [];
		$scope.settings = {
			enableSearch: true,
			showCheckAll: false,
			showUncheckAll: false,
			selectedToTop: true,
			closeOnBlur: false,
		};
	}
}
