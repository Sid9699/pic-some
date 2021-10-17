import { makeStyles } from '@material-ui/core';

export const useSignUpStyles = makeStyles(theme => ({
	'@global': {
		html: {
			height: '100%',
			fontFamily: 'Lato'
		},
		body: {
			backgroundColor: theme.palette.primary.light,
			height: '100%'
		},
		'#root': {
			height: '100%'
		}
	},
	container: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: 20,
		gap: 16,
		'& > a': {
			cursor: 'pointer'
		}
	},
	textColor: {
		color: theme.palette.primary.contrastText
	},
	textField: {
		'& .MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: 'rgba(0, 0, 0, 0.23)',
			borderWidth: 1
		},
		'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: 'rgba(0, 0, 0, 0.23)',
		},
		'& .MuiInputBase-input': {
			color: 'rgba(0, 0, 0, 0.87)'
		}
	}
}));