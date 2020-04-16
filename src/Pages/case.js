import React ,{useState} from 'react'
// 引入index的css
import '../static/css/case.css'
import{Layout,Menu} from 'antd'
import Footers from '../components/Footer'
import Headers from '../components/Header'
const {Header,Content,Footer} = Layout
function Case (){
    return(
        <Layout>
        <Headers style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 0' }}>
          
          <div style={{ background: '#fff', minHeight: 360 }}>
          <div>
              <div className='case'>
              <img src={require('../static/picture/推荐方案/1.png')} alt="" />
              </div>
            </div>
          </div>
        </Content>
        <Footers style={{ textAlign: 'center' }}>JSPang.com</Footers>
      </Layout>
    )
}
export default Case