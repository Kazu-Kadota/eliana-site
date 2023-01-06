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
      s_sm: '0.75rem',
      s_lg: '1.5rem',
      d_sm: '2rem',
      d_lg: '3rem',
    }
  },
  screens: {
    sizes: {
      sp_sm: '32rem',
      sp_lg: '64rem',
      dt_sm: '76.8rem',
      dt_lg: '128rem',
    },
    min_sizes: {
      sp_sm: 'min-width: 30rem',
      sp_lg: 'min-width: 48rem',
      dt_sm: 'min-width: 76.8rem',
      dt_lg: 'min-width: 120rem',
    }
  },
  var: {
    header_height: '6.5rem',
    footer_height: '40vh',
  },
}

export default config
