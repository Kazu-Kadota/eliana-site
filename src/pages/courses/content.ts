import config from 'src/styles/config'

const font_sizes = config.theme.font_sizes

export const tabsNav = {
  label: ["Descubra suas forças", "Passei na entrevista"],
  sx: {
    fontSize: {
      dt_lg: font_sizes.dt.xl,
      dt_sm: font_sizes.dt.md,
      sp_lg: font_sizes.sp.xl,
      sp_sm: font_sizes.sp.md,
    }
  }
}
