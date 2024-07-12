import { Box, useTheme } from '@mui/material'
import React from 'react'
import data from './data'
import { ResponsiveChoropleth } from '@nivo/geo'
import geography from './world_countries'



const Geography = () => {
const theme = useTheme() 
const MyResponsiveChoropleth = () => (
  <ResponsiveChoropleth
  projectionScale={120}
  theme={{
  
    "text": {
        "fontSize": 11,
        "fill": theme.palette.text.primary,
        "outlineWidth": 0,
        "outlineColor": "transparent"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "ticks": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "red",
            "strokeWidth": 0
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": theme.palette.text.primary,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "wrapper": {},
        "container": {
            "background": theme.palette.background.default,
            "color": "theme.palette.text.primary",
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
}}
      data={data}
      features= {geography.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
       colors="RdBu"
      domain={[ 0, 1000000 ]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[ 0.5, 0.5 ]}
      projectionRotation={[ 0, 0, 0 ]}
      enableGraticule={false}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"

      legends={[
          {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 20,
              translateY: -20,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemTextColor:`${theme.palette.text.primary}`,
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: `${theme.palette.text.primary}`,
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
  />
)
  return (
  <Box height={"75vh"} width={"80%"} sx={{mx:"auto"}} border={ `1px solid${theme.palette.text.primary}`}>
  
  <MyResponsiveChoropleth/>
  </Box>
  )
}

export default Geography