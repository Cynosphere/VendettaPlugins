(function(l,w,c,a,n,v,p,i){"use strict";const y=c.findByName("MurmurHashV3");function h(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.75,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.6;const t=y(e)%360,d=n.chroma.hsl(t,o,r);return n.ReactNative.processColor(d.toString())}const{ScrollView:C}=p.General,{TableRowGroup:R,TableSwitchRow:u,TableRowIcon:g}=c.findByProps("TableRowGroup");function k(){v.useProxy(a.storage);const e=n.React.createElement(g,{source:i.getAssetIDByName("ic_tag"),variant:"blurple"}),o=n.React.createElement(g,{source:i.getAssetIDByName("ic_webhook_24px"),variant:"blurple"}),r=n.React.createElement(g,{source:i.getAssetIDByName("ic_messages"),variant:"blurple"});return n.React.createElement(C,{style:{flex:1}},n.React.createElement(R,null,n.React.createElement(u,{label:"Pastelize all",subLabel:"Ignores checking for no role",icon:e,value:a.storage.pastelizeAll??!1,onValueChange:function(t){return a.storage.pastelizeAll=t}}),n.React.createElement(u,{label:"Pastelize webhooks by display name",subLabel:"Otherwise uses the webhook ID",icon:o,value:a.storage.webhookName??!0,onValueChange:function(t){return a.storage.webhookName=t}}),n.React.createElement(u,{label:"Pastelize message content",subLabel:"Use RoleColorEverywhere for coloring if not using Pastelize All. Same caveats with tapping message content apply.",icon:r,value:a.storage.pastelizeContent??!1,onValueChange:function(t){return a.storage.pastelizeContent=t}})))}const I=c.findByName("RowManager"),z=c.findByStoreName("MessageStore");let f;function m(e){const o=z.getMessage(e.channelId,e.id),r=a.storage.pastelizeAll??!1,t=a.storage.webhookName??!0,d=a.storage.pastelizeContent??!1;let s;if(o?.webhookId?t?s=e.username:s=o.webhookId:(!e.roleColor&&!r||r)&&(s=e.authorId),s){const b=h(s);if(e.roleColor=b,e.usernameColor=b,e.colorString=b,d&&e.content){const A=h(s,.85,.75);e.content=[{content:e.content,type:"link",target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:A,messageChannelId:"0"},medium:!0}}]}}}const N=function(){f=w.after("generate",I.prototype,function(e,o){let[r]=e,{message:t}=o;r.rowType===1&&(m(t),t.referencedMessage?.message&&m(t.referencedMessage.message))})},E=function(){f?.()};return l.onLoad=N,l.onUnload=E,l.settings=k,l})({},vendetta.patcher,vendetta.metro,vendetta.plugin,vendetta.metro.common,vendetta.storage,vendetta.ui.components,vendetta.ui.assets);