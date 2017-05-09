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

		$scope.search = function () {
			console.log('doing a search from the parent');
			$http.get('https://api.myjson.com/bins/hl32x').then(function(data) {
				console.log(data.data);
				$scope.data = data.data;
			})
			// $scope.data = [
			// 	{ id: 1, label: 'async 1' },
			// 	{ id: 2, label: 'async 2' },
			// 	{ id: 3, label: 'aync 3' }
			// ]
		};

		$scope.model = [];
		$scope.data = [
			{ id: 1, label: 'Ben' },
			{ id: 2, label: 'Darryl' },
			{ id: 3, label: 'Joao' }];
		$scope.settings = {
			enableSearch: true,
			showCheckAll: false,
			showUncheckAll: false,
		};
	}
}
