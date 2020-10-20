import React from 'react';
import { Image,Header, Divider, Icon, Input, Menu} from 'semantic-ui-react'


import t1 from "./T1.jpg"


function App() {
  return (
    <div style = {{backgroundColor : "black"}}>
    <Icon name="mouse pointer" style={{color : "mistyrose"}}/>
    <h1 style = {{color:"mistyrose", textAlign:"center"}}> 민지'S HOME </h1>
    <Menu inverted widths={3}>
        <Menu.Item
          name='HOME'
          onClick={() => window.open("MJ.html","_self")}
        />
        <Menu.Item
          name='FUNCTION'
          onClick={() => window.open("Minji's project.html","_self")}
        />
        <Menu.Item
          name='OBJECT'
          onClick={() => window.open("객체.html","_self")}
        />
        <Menu.Item
          name='REPORT'
          onClick={() => window.open("report.html","_self")}
        />
      </Menu>
    <Divider horizontal >
    </Divider>
    <Image src = {t1} centered />

</div>
  );
}

export default App;
