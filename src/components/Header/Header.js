import {
	createTheme,
	MenuItem,
	TextField,
	ThemeProvider,
} from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../data/category'

function Header({setCategory, category}) {
	const darkTheme = createTheme({
		palette: {
			primary: {
				main: '#fff',
			},
			mode: 'dark',
		},
	})

	return (
		<div className="header">
			<span className="title">Dictionary</span>
			<div className="inputs">
				<ThemeProvider theme={darkTheme}>
					<TextField id="standart-basic" label="Standart" />
					<TextField
						id="outlined-select-currency"
						select
						label="Select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
						helperText="Please select your currency"
					>
						{categories.map((option) => (
							<MenuItem key={option.label} value={option.label}>
								{option.value}
							</MenuItem>
						))}
					</TextField>
				</ThemeProvider>
			</div>
		</div>
	)
}

export default Header
