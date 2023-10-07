import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff",
			light: "#ffffff",
			dark: "#ffffff"
		},
		background: {
			default: "#212121"
		},
		mode: "dark"
	},

	typography: {
		allVariants: {
			fontFamily: "'Inter', sans-serif"
		},
		button: {
			fontFamily: "'Inter', sans-serif",
			textTransform: "none"
		}
	},

	components: {
		MuiCssBaseline: {
			styleOverrides: `
			.MuiPickersCalendarHeader-switchViewButton{
				display: none!important
			}
			.MuiPickersDay-root:not(.Mui-selected){		
				border-color: #05D9D7!important;
			}
			.MuiPickersDay-root.Mui-selected{
				background-color: #05D9D7!important;
			  }
			  .MuiPickersArrowSwitcher-button{
				color: #05D9D7!important
			  }

          .MuiOutlinedInput-input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 100px #212121 inset !important;
            -webkit-text-fill-color: #fff !important;
            caret-color: #fff !important;
            border-radius: inherit !important;
          }

          .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop {
            background-color: transparent!important;
            -webkit-tap-highlight-color: transparent!important;
          }

          .css-1m6t6mt-MuiTimelineDot-root {
            width: 50px!important;
            height: 50px!important;
            margin-left: 13px!important;
            align-items: center!important;
            justify-content: center!important;
        },
        .css-15b8vjn-MuiPaper-root-MuiDrawer-paper{
          border-right: none!important;
        },

        .MuiLinearProgress-root{
          background-color: #333333!important
        },

        .MuiLinearProgress-bar{
          border-radius: 0px 20px 20px 0px!important;
          background-color: #05D9D7!important;
        }
        `
		},

		MuiTypography: {
			fontFamily: "'Inter', sans-serif",
			p: {
				fontFamily: "'Inter', sans-serif"
			},
			h1: {
				fontFamily: "'Inter', sans-serif"
			},
			h2: {
				fontFamily: "'Inter', sans-serif"
			},
			h3: {
				fontFamily: "'Inter', sans-serif"
			},
			h4: {
				fontFamily: "'Inter', sans-serif"
			},
			h5: {
				fontFamily: "'Inter', sans-serif"
			},
			h6: {
				fontFamily: "'Inter', sans-serif"
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					fontFamily: "'Inter', sans-serif",
					textTransform: "none",
					fontSize: "16px",
					fontWeight: 700
				}
			}
		}
	}
});

export default theme;
