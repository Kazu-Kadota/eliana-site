const config = {
  theme: {
    colors: {
      base: {
        background: {
          color_1 : '#F0EBE0',
          color_2 : '#EEE2CE',
        },
        blue: {
          shade_1 : '#2F4269',
          shade_2 : '#556380',
          shade_3 : '#7C8598',
          shade_4 : '#A3A8B0',
        },
      },
      secondary: {
        orange: {
          shade_1 : '#BC4E27',
          shade_2 : '#C66D4C',
          shade_3 : '#D08C71',
          shade_4 : '#DBAC96',
        },
        yellow: {
          shade_1 : '#E7B46C',
          shade_2 : '#E8BF83',
          shade_3 : '#EACA9A',
          shade_4 : '#ECD5B2',
        }
      },
      others: {
        lightGray : '#EEE',
        white : '#FFF',
      },
    },
    font_sizes: {
      sp: {
        xs: '0.75rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2.5rem',
        xl: '3rem',
      },
      dt: {
        xs: '2rem',
        sm: '2.6rem',
        md: '3.2rem',
        lg: '3.6rem',
        xl: '4.8rem',
      }
    }
  },
  screens: {
    sizes: {
      sp_sm: '32rem',
      sp_lg: '76.8rem',
      dt_sm: '102.4rem',
      dt_lg: '144rem',
    },
    min_sizes: {
      sp_sm: 'min-width: 320px',
      sp_lg: 'min-width: 768px',
      dt_sm: 'min-width: 1024px',
      dt_lg: 'min-width: 1440px',
    },
    max_sizes: {
      sp_sm: 'max-width: 767px',
      sp_lg: 'max-width: 1023px',
      dt_sm: 'max-width: 1439px',
    }
  },
  var: {
    header_height: '6.2rem',
    footer_height: '40vh',
  },
}

export default config
