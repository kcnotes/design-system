import Ember from 'ember';

const {Controller} = Ember;

export default Controller.extend({
	navigation: [
		{
			name: 'Components',
			items: [
				{
					name: 'Buttons',
					location: 'route-components.buttons'
				},
				{
					name: 'Assets',
					location: 'route-components.assets'
				},
				{
					name: 'Avatars',
					location: 'route-components.avatars'
				},
				{
					name: 'Lists',
					location: 'route-components.lists'
				}
			]
		},
		{
			name: 'Base styles',
			items: [
				{
					name: 'Breakpoints',
					location: 'base-styles.breakpoints'
				},
				{
					name: 'Typography',
					location: 'base-styles.typography'
				},
				{
					name: 'Colors',
					location: 'base-styles.colors'
				},
			]
		},
		{
			name: 'Identity',
			items: [
				{
					name: 'Assets',
					location: 'identity.assets'
				}
			]
		}
	]
});
