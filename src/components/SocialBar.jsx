import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InstagramIcon from '@material-ui/icons/Instagram';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
	root: {
		width: 500,
	},
});

export default function SocialBar() {
	const classes = useStyles();
	const [value, setValue] = useState(null);

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				value === newValue ? setValue(null) : setValue(newValue);
			}}
			className={classes.root}
		>
			<BottomNavigationAction
				label='Shared On Instagram'
				icon={<InstagramIcon />}
			/>
			<BottomNavigationAction
				label='Added To Favorites'
				icon={<FavoriteIcon />}
			/>
			<BottomNavigationAction
				label='Shared On Facebook'
				icon={<FacebookIcon />}
			/>
		</BottomNavigation>
	);
}
