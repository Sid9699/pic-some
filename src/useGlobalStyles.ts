import { makeStyles } from '@material-ui/core';

export const useGlobalStyles = makeStyles({
	'@global': {
		html: {
			height: '100%',
		},
		body: {
			height: '100%',
		},
		'#root': {
			height: '100%',
		},
	},
});