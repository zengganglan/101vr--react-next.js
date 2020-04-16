import React, { useState, useEffect } from 'react'
// 引入index的css
import '../static/css/product.less'
import { Layout, Menu, Tabs, Row, Col, Steps, Anchor, Collapse } from 'antd'
import Footers from '../components/Footer'
import Headers from '../components/Header'
const { Header, Content, Footer } = Layout
const { TabPane } = Tabs;
const { Step } = Steps;
const { Link } = Anchor;
const Panel = Collapse.Panel;
function Products() {
  const picturePath = [
    {
    key: '新时代系列',
    title: 'static/picture/产品介绍-软件产品/新时代系列/大标题.png',
    cards: [{ key: '砥砺奋进的五年', path: 'static/picture/产品介绍-软件产品/新时代系列/1.png' },
    { key: '十九大精神', path: 'static/picture/产品介绍-软件产品/新时代系列/2.png' },
    { key: '习近平新时代中国特色社会主义思想', path: 'static/picture/产品介绍-软件产品/新时代系列/3.png' },
    { key: '全面从严治党', path: 'static/picture/产品介绍-软件产品/新时代系列/4.png' },
    { key: '全面依法治国', path: 'static/picture/产品介绍-软件产品/新时代系列/5.png' },
    { key: '全面深化改革', path: 'static/picture/产品介绍-软件产品/新时代系列/6.png' },
    { key: '全面建成小康社会', path: 'static/picture/产品介绍-软件产品/新时代系列/7.png' },
    { key: '习总书记谈治国理政', path: 'static/picture/产品介绍-软件产品/新时代系列/8.png' },
    { key: '大国外交', path: 'static/picture/产品介绍-软件产品/新时代系列/9.png' },
    { key: '改革开放40周年成就展', path: 'static/picture/产品介绍-软件产品/新时代系列/10.png' },
    ]
  },
  {
    key: '70周年系列',
    title: 'static/picture/产品介绍-软件产品/70周年系列/大标题.png',
    cards: [{ key: '不忘初心 牢记使命', path: 'static/picture/产品介绍-软件产品/70周年系列/1.png' },
    { key: '辉煌中国 ', path: 'static/picture/产品介绍-软件产品/70周年系列/2.png' },
    { key: '创新中国', path: 'static/picture/产品介绍-软件产品/70周年系列/3.png' },
    { key: '法治中国', path: 'static/picture/产品介绍-软件产品/70周年系列/4.png' },
    { key: '将改革进行到底', path: 'static/picture/产品介绍-软件产品/70周年系列/5.png' },
    { key: '胜利之师', path: 'static/picture/产品介绍-软件产品/70周年系列/6.png' },
    { key: '人类命运共同体', path: 'static/picture/产品介绍-软件产品/70周年系列/7.png' },
  
    ]
  },
  {
    key: '党史系列',
    title: 'static/picture/产品介绍-软件产品/党史系列/大标题.png',
    cards: [{ key: '挽救国家和民族危亡', path: 'static/picture/产品介绍-软件产品/党史系列/1.png' },
    { key: '中华人民共和国的成立', path: 'static/picture/产品介绍-软件产品/党史系列/2.png' },
    { key: '建设有中国特色的社会主义', path: 'static/picture/产品介绍-软件产品/党史系列/3.png' },
    { key: '开创中国特色社会主义新局面', path: 'static/picture/产品介绍-软件产品/党史系列/4.png' },
    { key: '中国特色社会主义进入新时代', path: 'static/picture/产品介绍-软件产品/党史系列/5.png' },
    ]
  },
  {
    key: '特色主题',
    title: 'static/picture/产品介绍-软件产品/特色主题/大标题.png',
    cards: [{ key: '扫黑除恶专项斗争', path: 'static/picture/产品介绍-软件产品/特色主题/1.png' },
    { key: '中华人民共和国成立70周年大会', path: 'static/picture/产品介绍-软件产品/特色主题/2.png' },
    { key: '垃圾分类', path: 'static/picture/产品介绍-软件产品/特色主题/2.png' },
    ]
  }
]

  const { tabPosition } = useState('top')
  useEffect(()=>{
    window.onscroll=function(){
      // var topScroll = document.getElementById('root').scrollTop
      // var topScroll =document.body.scrollTop;//滚动的距离,距离顶部的距离
      var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
      var bignav = document.getElementById("nav");//获取到导航栏id
      console.log(bignav,topScroll)
      if(topScroll <= 535){
          //当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状    
          bignav.style.position = 'static';
      }else{      
          //当滚动距离大于250px时执行下面的东西
          bignav.style.position = 'fixed';
          bignav.style.top = '10px';
          bignav.style.left = '0.5rem';
          console.log(topScroll)

      }



  }
// 组件离开会执行return相当于 componentWillUnmount周期
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.scroll);
  // }
      return()=>{
        window.onscroll=null
      }
// 第二个参数空数组【】的作用解绑，否则会无限循环，切换别的组件就会执行这个打印代替componentWillUnmount

   },[])
  return (
    <Layout>
      <Headers style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '0px 0', padding: "0 0px" }}>
        <div className='pro-top'>
          <img src={require("../static/picture/产品介绍-硬件产品/img_5.png")} alt="" />
        </div>
      <div className='pro-title'>  <img src={require("../static/picture/首页/分割线.png")} alt="" />
            </div>
        <Tabs tabPosition={tabPosition}>
          <TabPane tab="软件产品" key="1">
            <Row type='flex' justify="center" className="navs" >
              <Col className="nav" id='nav' xs={4} sm={4} md={4} lg={4} xl={4}>

                <Collapse accordion >
                {
                    picturePath.map((item, index) => {
                      return (
                        <Panel header={<a href={'#' + item.key} >{item.key}</a>} key={item.key} >
                        {
                            item['cards'].map((item1, index1) => {
                              return (
                                <p key={item1.key}>
                                <a href={'#' + item1.key} title={item1.key} >{item1.key}</a>
                                </p>
                              )
                            })
                          }

                        </Panel>

                      )
                    })
                  }
                
                </Collapse>
                {/* <Anchor>
                  {
                    picturePath.map((item, index) => {
                      return (
                        <Link href={'#' + item.key} title={item.key}>
                          {
                            item['cards'].map((item1, index1) => {
                              return (
                                <Link href={'#' + item1.key} title={item1.key} />
                              )
                            })
                          }

                        </Link>

                      )
                    })
                  }

                </Anchor> */}

              </Col>
              <Col className="products" span={1} xs={15} sm={15} md={15} lg={15} xl={15}>
                <div className='top'>
             
                <img src={require('../static/picture/产品介绍-软件产品/form_6.png')} alt="" />

                </div>

                {
                  picturePath.map((item, index) => {
                    return (
                      <div style={{ marginTop: '0' }} key={item.key}>
                        <div id={item.key} className='all-pro'>
                          <div>
                            <img src={require('../' + item.title)} alt="" />
                          </div>
                          {
                            item['cards'].map((item1, index1) => {
                              return (
                                <div id={item1.key} className='alllist' key={item1.key}>
                                  <img src={require('../' + item1.path)} alt="" />
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    )
                  })
                }

              </Col>
            </Row>
          </TabPane>
          <TabPane tab="硬件设施" key="2">
            <div>
              <div className='yj'>
                <img src={require('../static/picture/产品介绍-硬件产品/img_3_1.png')} alt="" />
              </div>
            </div>
          </TabPane>

        </Tabs>
      </Content>
      <Footers style={{ textAlign: 'center' }}>JSPang.com</Footers>

    </Layout>
  )
}
export default Products