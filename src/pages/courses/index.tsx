import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import * as React from 'react'
import { Collapse } from 'react-collapse'

import config from 'src/styles/config'

import { Container } from './styles'
import { tabsNav } from './content'
import FindYourForces from './find-your-forces'
import GotTheJob from './got-the-job'

const font_sizes = config.theme.font_sizes

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  console.log(children)

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>{children}</Box>
      )}
    </div>
  );
}

export const Courses = () => {
  const [value, setValue] = React.useState(0)

  const theme = useTheme()
  const variantResponsive = () => (useMediaQuery(theme.breakpoints.up('dt_sm')) ? 'standard' : 'scrollable')
  const centeredResponsive = () => (useMediaQuery(theme.breakpoints.up('dt_sm')) ? true : false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container
      sx={{
        width: '100%'
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant={variantResponsive()}
        centered={centeredResponsive()}
        scrollButtons={false}
        textColor='secondary'
        indicatorColor='secondary'
      >
        {tabsNav.label.map((content) => {
          return (
            <Tab
              key={content}
              label={content}
              sx={{
                fontSize: {
                  dt_lg: font_sizes.dt.sm,
                  dt_sm: font_sizes.dt.sm,
                  sp_lg: font_sizes.sp.xl,
                  sp_sm: font_sizes.sp.md,
                },
              }}
            />
          )
        })}
      </Tabs>
      <Collapse isOpened={value === 0}>
        <TabPanel value={value} index={0}>
          <FindYourForces />
        </TabPanel>
      </Collapse>
      <Collapse isOpened={value === 1}>
        <TabPanel value={value} index={1}>
          <GotTheJob />
        </TabPanel>
      </Collapse>
    </Container>
  )
}

