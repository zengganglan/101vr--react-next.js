import React ,{useState} from 'react'
// 引入index的css
import '../static/css/successcase.css'
import{Layout,Menu} from 'antd'
import Footers from '../components/Footer'
import Headers from '../components/Header'
const {Header,Content,Footer} = Layout
function Successcase (){
    return(
        <Layout>
        <Headers style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 0' }}>
          
          <div style={{  background: '#fff', minHeight: 360 }}>
          <div>
              <div className='seccesscase'>
              <img src={require('../static/picture/成功案例/1.png')} alt="" />
              </div>
            </div>
          </div>
        </Content>
        <Footers style={{ textAlign: 'center' }}></Footers>
      </Layout>
    )
}
export default Successcase