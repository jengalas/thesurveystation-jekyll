---
parent:
parent_name:
designation:
pid:
date: 
latitude:
longitude:
estimate:
state:
county:
quad:
elevation:
type:
setting:
year_established:
agency:
official_description: >-

status:
condition:
ngs_report:
ngs_report_text: >-

usgs_report: 
usgs_report_link:
zhanna_text: >-

rich_text: >-
    
galleries:
  gallery_zh: 
    images:
    - filename: 
      alt: 
  gallery_r: 
    images:
    - filename: 
      alt:     
featured_image: 

_inputs:
  pid:
    label: PID
  is_parent:
    type: checkbox
    label: Parent
  estimate:
    type: checkbox  
  type:
    type: select
    options:
      allow_create: true
      values:
        - Azimuth Mark Disk
        - Landmark/Intersection Station
        - Reference Mark Disk
  setting:
    type: select
    options:
      allow_create: true
      values:
        - Airway Beacon
        - Antenna Pole
        - Bedrock
        - Bolt
        - Boulder
        - Boundary Monument
        - Brass Rod
        - Brick Wall
        - Bridge Abutment
        - Bridge Bannister
        - Bridge Curb 
        - Bridge Parapet Wall
        - Bridge Pier
        - Bridge Seat
        - Bridge Spandrel
        - Bridge Wingwall
        - Bronze Statue
        - Building Spire
        - Chimney
        - Church Spire
        - Column Foundation
        - Concrete Base
        - Concrete Berm
        - Concrete Boat Ramp
        - Concrete Bridge Headwall
        - Concrete Bridge Shelf
        - Concrete Bridge Sidewall
        - Concrete Catch Basin
        - Concrete Culvert
        - Concrete Foundation
        - Concrete Fountain Rim
        - Concrete Pier
        - Concrete Post
        - Concrete Pyramid
        - Concrete Rampart
        - Concrete Seawall
        - Concrete Sidewalk
        - Concrete Slab
        - Concrete Spillway
        - Concrete Step
        - Concrete Tile
        - Concrete Tower
        - Concrete Wall
        - Copper-Clad Steel Rod
        - Cupola Post
        - Daybeacon
        - Dome
        - Door Sill
        - Earthen Pier
        - Finial
        - Fire Lookout Tower
        - GPS Antenna
        - Granite Bench
        - Granite Foundation
        - Granite Monument
        - Granite Post
        - Granite Seawall
        - Lighthouse
        - Logo Cap
        - Marble Post
        - Masonry Bridge Headwall
        - Mast
        - Metal Pipe
        - Microwave Tower
        - Monument
        - Navigation Light
        - Object Driven into Ground
        - Pipe Cap
        - Pyramid
        - Radio Tower
        - Relay Tower
        - Rock Ledge
        - Rock Outcrop
        - Rock Wall
        - Round Concrete Monument
        - Square Concrete Monument
        - Steel Pedestal
        - Steel Pipe
        - Steel Rod
        - Step Parapet
        - Stone Bridge
        - Stone Building
        - Stone Culvert
        - Stone Dam
        - Stone Foundation
        - Stone Monument
        - Stone Pillar
        - Stone Post
        - Stone Slab
        - Stone Step
        - Stone Walk
        - Stone Wall
        - Stone Window Sill
        - Tower
        - Tower Base
        - Tree
        - Unknown Setting
        - Water Tank
        - Water Tower
        - Wooden Cross
  status:
    type: select  
    options:
      values:
        - Recovered
        - Not Found
        - Note Entered
  condition:
    type: select  
    options:
      values:
        - Good
        - Fair
        - Poor 
        - Unknown (Not Found)  
        - Destroyed  
  ngs_report:
    type: checkbox      
    label: NGS Report Submitted
  coordinates_submitted:
    type: checkbox      
  ngs_report_text:
    type: markdown  
    label: NGS Report Text 
  usgs_report:
    type: checkbox
    label: USGS Report Submitted
  usgs_report_link:
    type: text
    label: USGS Report Link
  zhanna_text:
    type: markdown
    label: Zhanna's Narrative
  rich_text:
    type: markdown
    label: Rich's Narrative
  featured_image:
    type: text
  remove_empty_inputs:
    options: 
      hidden: true
    
remove_empty_inputs: true    
---