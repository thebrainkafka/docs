"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[9106],{2857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(8209);const l={sidebar_position:5},i="meters",o={unversionedId:"reference/configuration/meters",id:"reference/configuration/meters",title:"meters",description:"Meters (current measurement devices) is a list of devices in the house that can measure power and energy consumption, PV generation, or house battery usage. A meter defines a point of energy measurement and can be a physical device (e.g., a meter at the grid connection point), a PV inverter (AC or DC in the case of hybrid inverters), or a battery inverter.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/meters.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/meters",permalink:"/en/docs/reference/configuration/meters",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/meters.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"chargers",permalink:"/en/docs/reference/configuration/chargers"},next:{title:"vehicles",permalink:"/en/docs/reference/configuration/vehicles"}},s={},p=[{value:"Required Parameters",id:"required-parameters",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"Supported Types",id:"supported-types",level:2},{value:"<code>movingaverage</code>",id:"movingaverage",level:3},{value:"<code>modbus</code>",id:"modbus",level:3},{value:"Required Parameters",id:"required-parameters-1",level:4},{value:"<code>power</code>",id:"power",level:5},{value:"<code>energy</code>",id:"energy",level:5},{value:"Optional Parameters",id:"optional-parameters",level:4},{value:"<code>soc</code>",id:"soc",level:5},{value:"<code>lgess</code>",id:"lgess",level:3},{value:"Required Parameters",id:"required-parameters-2",level:4},{value:"<code>usage</code>",id:"usage",level:5},{value:"<code>uri</code>",id:"uri",level:5},{value:"<code>password</code>",id:"password",level:5},{value:"<code>openwb</code>",id:"openwb",level:3},{value:"Required Parameters",id:"required-parameters-3",level:4},{value:"<code>usage</code>",id:"usage-1",level:5},{value:"<code>broker</code>",id:"broker",level:5},{value:"<code>sma</code>",id:"sma",level:3},{value:"Required Parameters",id:"required-parameters-4",level:4},{value:"<code>uri</code>",id:"uri-1",level:5},{value:"<code>serial</code>",id:"serial",level:5},{value:"Optional Parameters",id:"optional-parameters-1",level:4},{value:"<code>interface</code>",id:"interface",level:5},{value:"<code>tesla</code>",id:"tesla",level:3},{value:"Required Parameters",id:"required-parameters-5",level:4},{value:"<code>usage</code>",id:"usage-2",level:5},{value:"<code>uri</code>",id:"uri-2",level:5},{value:"<code>password</code>",id:"password-1",level:5},{value:"<code>custom</code>",id:"custom",level:3},{value:"Required Parameters",id:"required-parameters-6",level:4},{value:"<code>power</code>",id:"power-1",level:5},{value:"Optional Parameters",id:"optional-parameters-2",level:4},{value:"<code>energy</code>",id:"energy-1",level:5},{value:"<code>soc</code>",id:"soc-1",level:4},{value:"<code>capacity</code>",id:"capacity",level:4},{value:"<code>currents</code>",id:"currents",level:4}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"meters"},(0,r.kt)("inlineCode",{parentName:"h1"},"meters")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Meters")," (current measurement devices) is a list of devices in the house that can measure power and energy consumption, PV generation, or house battery usage. A ",(0,r.kt)("inlineCode",{parentName:"p"},"meter")," defines a point of energy measurement and can be a physical device (e.g., a meter at the grid connection point), a PV inverter (AC or DC in the case of hybrid inverters), or a battery inverter."),(0,r.kt)("p",null,"Chargers may have an integrated meter or it can be externally connected. If a charger has an internal current measurement device, no entry for it needs to be created in ",(0,r.kt)("inlineCode",{parentName:"p"},"meters"),". If the charger doesn't have such a meter, evcc will use the meter configured here and assigned to the charger under ",(0,r.kt)("a",{parentName:"p",href:"loadpoints#meters"},(0,r.kt)("inlineCode",{parentName:"a"},"meters"))," in the charging point configuration, or assume that the charging power set is actually being used."),(0,r.kt)("p",null,"evcc uses positive (+) values for incoming currents (grid consumption, PV generation, house battery discharge) and negative (-) values for outgoing currents (grid feed-in, PV inverter standby consumption, or house battery charging). Any other current consumption, including from the charger, is always a positive (+) value."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"meters")," configuration is a list of different available devices."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"meters:\n  - name: grid\n    type: ...\n  - name: pv\n    type: ...\n  - name: battery\n    type: ...\n  - name: charge\n    type: ...\n  - name: aux\n    type: ...\n")),(0,r.kt)("p",null,"Configurations for known devices can be found under ",(0,r.kt)("a",{parentName:"p",href:"/docs/devices/meters"},"Devices - House Installation"),"."),(0,r.kt)("p",null,"Below, the various parameters are explained."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"required-parameters"},"Required Parameters"),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("p",null,"A short designation of the meter. The value is used when referencing the device in the configuration of the ",(0,r.kt)("a",{parentName:"p",href:"site"},"site")," or the ",(0,r.kt)("a",{parentName:"p",href:"loadpoints#meters"},"charger"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: charger1\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h3"},"type")),(0,r.kt)("p",null,"This is the evcc-specific meter type that allows communication with the device. The appropriate type for known devices can be found under ",(0,r.kt)("a",{parentName:"p",href:"/docs/devices/meters"},"Devices - House Installation"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: modbus\n")),(0,r.kt)("p",null,"The various possible types and their additional parameters are documented below:"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"supported-types"},"Supported Types"),(0,r.kt)("h3",{id:"movingaverage"},(0,r.kt)("inlineCode",{parentName:"h3"},"movingaverage")),(0,r.kt)("p",null,"This meter type can smooth fluctuating meter values. It can be used in all meter applications (",(0,r.kt)("inlineCode",{parentName:"p"},"usage"),"). The ",(0,r.kt)("inlineCode",{parentName:"p"},"decay")," parameter indicates the percentage of the new value to be included in the calculation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"meters:\n- name: grid\n  type: movingaverage\n  decay: 0.1\n  meter:\n    type: template\n    template: solarlog\n    usage: grid\n    host: 192.0.2.2\n    ...\n")),(0,r.kt)("p",null,"In this example, 10% of the new value is included. After 10 cycles, the oldest value is removed from the calculation. The duration of this process depends on the ",(0,r.kt)("inlineCode",{parentName:"p"},"interval"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"modbus"},(0,r.kt)("inlineCode",{parentName:"h3"},"modbus")),(0,r.kt)("p",null,"Devices connected via the ModBus interface and supported by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd#supported-devices"},"MBMD (ModBus Measurement Daemon)")," project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: modbus\n  power: Power\n  energy: Sum\n  soc: ChargeState\n  ...\n")),(0,r.kt)("h4",{id:"required-parameters-1"},"Required Parameters"),(0,r.kt)("p",null,"In addition to the parameters defined here, additional parameters are necessary. These are listed in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/modbus"},"Modbus")," documentation."),(0,r.kt)("h5",{id:"power"},(0,r.kt)("inlineCode",{parentName:"h5"},"power")),(0,r.kt)("p",null,"Defines the MBMD measurement value that returns the power, typically ",(0,r.kt)("inlineCode",{parentName:"p"},"Power"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"power: Power\n")),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"energy"},(0,r.kt)("inlineCode",{parentName:"h5"},"energy")),(0,r.kt)("p",null,"Defines the method of measurement that MBMD returns for energy, typically ",(0,r.kt)("inlineCode",{parentName:"p"},"Sum"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"energy: Sum\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"optional-parameters"},"Optional Parameters"),(0,r.kt)("h5",{id:"soc"},(0,r.kt)("inlineCode",{parentName:"h5"},"soc")),(0,r.kt)("p",null,"Defines the method of measurement that MBMD returns for battery state of charge (SoC), typically ",(0,r.kt)("inlineCode",{parentName:"p"},"ChargeState"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"soc: ChargeState\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lgess"},(0,r.kt)("inlineCode",{parentName:"h3"},"lgess")),(0,r.kt)("p",null,"LG ESS Home 8/10 devices."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'type: lgess\nusage: grid\nuri: https://192.0.2.2/\npassword: "DE200..."\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," parameters are only required for a ",(0,r.kt)("inlineCode",{parentName:"p"},"meter")," device if multiple devices are configured.")),(0,r.kt)("h4",{id:"required-parameters-2"},"Required Parameters"),(0,r.kt)("h5",{id:"usage"},(0,r.kt)("inlineCode",{parentName:"h5"},"usage")),(0,r.kt)("p",null,"Defines which measurements are needed here."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible Values"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"grid")),": For measurements at the grid connection point"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pv")),": For measurements of PV generation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"battery")),": For measurements of the house battery")),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"uri"},(0,r.kt)("inlineCode",{parentName:"h5"},"uri")),(0,r.kt)("p",null,"Defines the URL within the home network of the LG ESS device."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"uri: https://192.0.2.2/\n")),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"password"},(0,r.kt)("inlineCode",{parentName:"h5"},"password")),(0,r.kt)("p",null,"The registration number of the LG ESS HOME inverter must be entered here."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'password: "DE200..."\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"openwb"},(0,r.kt)("inlineCode",{parentName:"h3"},"openwb")),(0,r.kt)("p",null,"Using measurements from an OpenWB charger"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: openwb\nusage: grid\nbroker: 192.0.2.2\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," parameters are only required for a ",(0,r.kt)("inlineCode",{parentName:"p"},"meter")," device if multiple devices are configured.")),(0,r.kt)("h4",{id:"required-parameters-3"},"Required Parameters"),(0,r.kt)("h5",{id:"usage-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"usage")),(0,r.kt)("p",null,"Defines which measurements are needed here."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible Values"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"grid")),": For measurements at the grid connection point"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pv")),": For measurements of PV generation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"battery")),": For measurements of the house battery")),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"broker"},(0,r.kt)("inlineCode",{parentName:"h5"},"broker")),(0,r.kt)("p",null,"Defines the hostname or IP address and port address within the home network of the OpenWB."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"broker: 192.0.2.2:1883\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sma"},(0,r.kt)("inlineCode",{parentName:"h3"},"sma")),(0,r.kt)("p",null,"For using the SMA Home Manager 2.0, SMA Energy Meter, or an SMA inverter. Devices must support the Speedwire protocol."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: sma\nuri: 192.0.2.2\nserial: 12345678\ninterface: eth0\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"required-parameters-4"},"Required Parameters"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is sufficient to define either ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"serial"),".")),(0,r.kt)("h5",{id:"uri-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"uri")),(0,r.kt)("p",null,"Defines the hostname or IP address within the home network of the device."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"uri: 192.0.2.2\n")),(0,r.kt)("h5",{id:"serial"},(0,r.kt)("inlineCode",{parentName:"h5"},"serial")),(0,r.kt)("p",null,"Defines the serial number of the device from which measurements should be received."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"serial: 12345678\n")),(0,r.kt)("h4",{id:"optional-parameters-1"},"Optional Parameters"),(0,r.kt)("h5",{id:"interface"},(0,r.kt)("inlineCode",{parentName:"h5"},"interface")),(0,r.kt)("p",null,"Multicast messages can only be received on a specific network interface. Usually, this is the first interface on the system. If it is not the interface connected to the meter, the interface needs to be explicitly specified."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"interface: eth0\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tesla"},(0,r.kt)("inlineCode",{parentName:"h3"},"tesla")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"tesla")),": For using measurements from a Tesla Powerwall."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'type: tesla\nusage: grid\nuri: https://192.0.2.2/\npassword: "***"\n')),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"required-parameters-5"},"Required Parameters"),(0,r.kt)("h5",{id:"usage-2"},(0,r.kt)("inlineCode",{parentName:"h5"},"usage")),(0,r.kt)("p",null,"Defines which measurements are needed here."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible Values"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"grid")),": For measurements at the grid connection point"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pv")),": For measurements of PV generation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"battery")),": For measurements of the house battery")),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"uri-2"},(0,r.kt)("inlineCode",{parentName:"h5"},"uri")),(0,r.kt)("p",null,"Defines the hostname or IP address within the home network of the device."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"uri: 192.0.2.2\n")),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"password-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"password")),(0,r.kt)("p",null,"The password for the ",(0,r.kt)("em",{parentName:"p"},"customer")," user must be entered here."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'password: "ThePassword"\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"custom"},(0,r.kt)("inlineCode",{parentName:"h3"},"custom")),(0,r.kt)("p",null,"Standard implementation, in which individual values are defined via ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/plugins"},"plugins"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  type: custom\n  power: # Power (W)\n    source: # Plugin Type\n    ...\n  energy: # Energy (kWh)\n    source: # Plugin Type\n    ...\n  soc: # Battery SOC (%)\n    source: # Plugin Type\n    ...\n  capacity: # Optional Battery Capacity (kWh)\n  currents: # Current (A) per phase\n    - source: # Phase 1 Plugin Type\n      ...\n    - source: # Phase 2 Plugin Type\n      ...\n    - source: # Phase 3 Plugin Type\n      ...\n  ...\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"required-parameters-6"},"Required Parameters"),(0,r.kt)("h5",{id:"power-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"power")),(0,r.kt)("p",null,"Plugin definition to return power in watts (W)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  power: ... # Power (W)\n    source: # Plugin Type\n    ...\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"optional-parameters-2"},"Optional Parameters"),(0,r.kt)("h5",{id:"energy-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"energy")),(0,r.kt)("p",null,"Plugin definition to return consumed energy in kilowatt-hours (kWh)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  energy: ... # Energy (kWh)\n    source: # Plugin Type\n    ...\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"soc-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"soc")),(0,r.kt)("p",null,"Plugin definition to return battery state of charge (SoC) in percentage (%)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  soc: ... # Battery SOC (%)\n    source: # Plugin Type\n    ...\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"capacity"},(0,r.kt)("inlineCode",{parentName:"h4"},"capacity")),(0,r.kt)("p",null,"Indication of battery capacity. Only useful when multiple batteries are present. Used to determine the overall SoC."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"currents"},(0,r.kt)("inlineCode",{parentName:"h4"},"currents")),(0,r.kt)("p",null,"A list of plugin definitions to return current in amperes (A) per phase."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  currents: # Current (A) per phase\n    - source: # Phase 1 Plugin Type\n      ...\n    - source: # Phase 2 Plugin Type\n      ...\n    - source: # Phase 3 Plugin Type\n      ...\n  ...\n")))}m.isMDXComponent=!0}}]);