import React, { useState, useEffect } from 'react'
// 引入index的css
import '../static/css/product.less'
import { Layout, Menu, Tabs, Row, Col, Steps, Anchor, Collapse } from 'antd'
import Footers from '../components/Footer'
import Headers from '../components/Header'
import data from '../static/products.json'
const { Header, Content, Footer } = Layout
const { TabPane } = Tabs;
const { Step } = Steps;
const { Link } = Anchor;
const Panel = Collapse.Panel;
function Products(props) {
  const picturePath = data

  const { tabPosition } = useState('top')
  const [order, setorder] = useState(1)
  useEffect(() => {
    var url =decodeURIComponent(window.location.href)
    var arr= url.split('#')
   if (arr[1]) {
     data.map((item,index)=>{
       if (item.key==arr[1]) {
         setorder(index+1)
       }
     })
     
   }
    console.log(arr)

    
    window.onscroll = function () {
      // var topScroll = document.getElementById('root').scrollTop
      // var topScroll =document.body.scrollTop;//滚动的距离,距离顶部的距离
      var topScroll = document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
      var bignav = document.getElementById("nav");//获取到导航栏id
      // console.log(bignav,topScroll)
      if (topScroll <= 1000) {
        //当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状    
        bignav.style.position = 'relative';
        // bignav.style.top = '800px';
        bignav.style.left = '-2rem';
      } else {
        //当滚动距离大于250px时执行下面的东西
        bignav.style.position = 'fixed';
        bignav.style.top = '10px';
        bignav.style.left = '3rem';
        // console.log(topScroll)

      }



    }
    // 组件离开会执行return相当于 componentWillUnmount周期
    // componentWillUnmount() {
    //   window.removeEventListener('scroll', this.scroll);
    // }
    return () => {
      window.onscroll = null
    }
    // 第二个参数空数组【】的作用解绑，否则会无限循环，切换别的组件就会执行这个打印代替componentWillUnmount

  }, [])
  const changeorder = (index) => {
    // console.log(index)
    setorder(index + 1)
  }
  const onchanges = (anchorName) => {
  //   if (anchorName) {
  //     // 找到锚点
  //     let anchorElement = document.getElementById(anchorName);
  //     // 如果对应id的锚点存在，就跳转到锚点
  //     if(anchorElement) { anchorElement.scrollIntoView(); }
  // }
    if (anchorName) {
      data.map((item,index)=>{
        if ("#"+item.key==anchorName) {
          console.log(anchorName)

          setorder(index+1)
        }
      })
      
    }

  }
  return (
    <Layout>
      <Headers style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '0px 0', padding: "0 0px" }}>
        <div className='pro-top'>
          <img src={require("../static/picture/产品介绍软件产品/产品介绍1的副本.jpg")} alt="" />
        </div>
        {/* <div className='pro-title'>  <img src={require("../static/picture/首页/分割线.png")} alt="" />
        </div> */}
        <Tabs tabPosition={tabPosition}  style={{marginTop:"50px"}} >
          <TabPane tab="软件产品" key="1">
            <Row type='flex' justify="center"   style={{backgroundColor:"#EEEEEE",margin:"30px 0"}} >
              <Col xs={12} sm={12} md={5} lg={5} xl={5}>   
              <div className='top1'>
                <h2>场馆面积</h2>
                <p>2000m<sup>2</sup>起</p>

                {/* <img src={require('../static/picture/产品介绍-软件产品/form_6.png')} alt="" /> */}

              </div>
              </Col>
              <Col xs={12} sm={12} md={5} lg={5} xl={5}>   
              <div className='top1'>
                <h2>交互内容</h2>
                <p>引导AI,语音，答题，视频，文字，图片，游戏</p>

                {/* <img src={require('../static/picture/产品介绍-软件产品/form_6.png')} alt="" /> */}

              </div>
              </Col>
              <Col xs={12} sm={12} md={5} lg={5} xl={5}>   
              <div className='top1'>
                <h2>主题数量</h2>
                <p>2-12个</p>

                {/* <img src={require('../static/picture/产品介绍-软件产品/form_6.png')} alt="" /> */}

              </div>
              </Col>
              <Col xs={12} sm={12} md={5} lg={5} xl={5}>   
              <div className='top1'>
                <h2>支持设备</h2>
                <p>PICO G系列，VIVE,多点触控互动多媒体</p>

                {/* <img src={require('../static/picture/产品介绍-软件产品/form_6.png')} alt="" /> */}

              </div>
              </Col>

              </Row>
2
            <Row type='flex' justify="center" className="navs" gutter='20'>
              <Col className="nav" id='nav'  xs={4} sm={4} md={5} lg={5} xl={5} >

                {/* <Collapse accordion >
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
                
                </Collapse> */}
                <Anchor onChange={onchanges} showInkInFixed={true} affix={false} >
                  {
                    picturePath.map((item, index) => {
                      // console.log(index,order)
                      return (
                        <Link href={'#' + item.key} title={
                          <div style={{ backgroundColor: index + 1 == order ? '#CA0000' : "#fff", color: index + 1 == order ? '#fff' : "#606060" }} className='titles' onClick={() => { changeorder(index) }}>
                            {
                              index + 1 == order ? <img className='a1' src={require('../static/picture/产品介绍软件产品/软件产品左侧栏/党徽.png')} alt="" /> : <img src={require('../static/picture/产品介绍软件产品/软件产品左侧栏/红色党徽.png')} alt="" className='a1' />
                            }


                            {index + 1 + '.  ' + item.key}
                            {
                              index + 1 == order ? <img className='a2' src={require('../static/picture/产品介绍软件产品/软件产品左侧栏/下拉箭头.png')} alt="" /> : <img src={require('../static/picture/产品介绍软件产品/软件产品左侧栏/像上箭头.png')} alt="" className='a2' />

                            }
                          </div>}

                        >
                          {

                            index + 1 == order ?
                              item['cards'].map((item1, index1) => {
                                var a = index1 + 1
                                return (
                                  <Link href={'#' + item1.key} title={<span style={{ fontSize: "10px" }}>{index + 1 + "." + a + '.  ' + item1.key}</span>} />
                                )
                              }) : ''
                          }

                        </Link>

                      )
                    })
                  }
                </Anchor>

              </Col>
              <Col className="products" span={1} xs={15} sm={15} md={15} lg={8} xl={8} >

                {
                  picturePath.map((item, index) => {
                    return (
                      <div style={{ marginTop: '0' }} key={item.key}>
                        <div id={item.key} className='all-pro'>
                          <div>
                            {/* <img src={require('../' + item.title)} alt="" /> */}
                            <h2>{index + 1 + '.' + item.key}</h2>
                            <p>&nbsp;&nbsp;{item.title}</p>
                          </div>
                          {
                            item['cards'].map((item1, index1) => {
                              var a = index1 + 1
                              return (
                                <div id={item1.key} className='alllist' key={item1.key}>
                                  <h3>{index + 1 + "." + a + '  ' + item1.key}</h3>
                                  <p style={{ width: '80%', minWidth: "900px" }}>&nbsp;&nbsp;
                                     {item1.explain}</p>
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
                <img src={require('../static/picture/产品介绍硬件设施/1.png')} alt="" />
              </div>
              <div className='yj'>
                <img src={require('../static/picture/产品介绍硬件设施/2.png')} alt="" />
              </div>
              <div className='yj'>
                <img src={require('../static/picture/产品介绍硬件设施/3.png')} alt="" />
              </div>
              <div className='yj'>
                <img src={require('../static/picture/产品介绍硬件设施/4.png')} alt="" />
              </div>
              <div className='yj'>
                <img src={require('../static/picture/产品介绍硬件设施/5.png')} alt="" />
              </div>
              <div className='yj'>
                <img src={require('../static/picture/产品介绍硬件设施/6.png')} alt="" />
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