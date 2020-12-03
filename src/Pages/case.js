import React, { useState } from 'react'
// 引入index的css
import '../static/css/case.css'
import { Layout, Menu } from 'antd'
import Footers from '../components/Footer'
import Headers from '../components/Header'
const { Header, Content, Footer } = Layout
function Case() {
  return (
    <Layout>
      <Headers style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '0 0' }}>

        <div style={{ background: '#fff', minHeight: 360 }}>
          <div>
            <div className='case'>
              {/* <img src={require('../static/picture/推荐方案/1.png')} alt="" /> */}
              <div className='banner'>
                <img src={require('../static/picture/推荐方案切图/banner.png')} alt="" />

              </div>
              <div className='container'>

                <div className={'a1'}>
                  {/* <img src={require('../static/picture/推荐方案切图/党建活动中心.png')} alt="" /> */}
                  <div className='texts'>
                    <h2> 党建活动中心</h2>
                    <img src={require('../static/picture/推荐方案切图/分隔线.png')} alt="" />
                    <p>提供专业的软装设计服务，从方案设计到实体落地、从室内布局 到墙体造型、从影音感观到灯光效果，打造全方位解决方案。拥有多套特色设备，有别于传统复杂的VR穿戴形式，容易上手，即穿即看。
                    针对不同的设备，我们提供不同的专业内容，从一大到十九大， 从互动多媒体到VR-体机，多种多样，应有尽有。
</p>
                  </div>
                </div>
                <div className={'a2'}>
                  {/* <img src={require('../static/picture/推荐方案切图/互动屏+一体机版本.png')} alt="" /> */}
                  <div className='texts'>
                    <h2> 互动屏+一体机版本
</h2>
                    <img src={require('../static/picture/推荐方案切图/分隔线.png')} alt="" />
                    <p>我们一般推荐客户采购1套互动屏版本+多套的一体机版本，从而 满足领导参观、集体展示、个人学习等综合需求。从较小的基层 党建需求，到较大的大型企业机关机构，仅需调整一体机版本的
                    套数，就能适用多种场景需求。
                    同时，我们的内容有多个系列，一但客户愿意采购第一个系列以后，由于我们的内容与硬件深度绑定的特性，因此会让客户再下一次采购时，继续购买我们新的系列，安装运行在原有的设备之
                    中，与客户形成一定的捆绑关系。
</p>
                  </div>
                </div>
                <div className={'a3'}>
                  {/* <img src={require('../static/picture/推荐方案切图/互动屏版本.png')} alt="" /> */}
                  <div className='texts'>
                    <h2> 互动屏版本
</h2>
                    <img src={require('../static/picture/推荐方案切图/分隔线.png')} alt="" />
                    <p>提供单互动屏版本的党建教育系统，可用于政府机关、企事业单位、企业集团等党组织，实时投影的方式方便了组织进行主题教育，传达中央指示。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footers style={{ textAlign: 'center' }}>JSPang.com</Footers>
    </Layout>
  )
}
export default Case