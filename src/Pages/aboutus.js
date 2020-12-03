import React, { useState, useEffect } from 'react'
// 引入index的css
import '../static/css/aboutus.less'
import { Layout, Menu, Row, Col } from 'antd'
import Footers from '../components/Footer'
import Headers from '../components/Header'
const { Header, Content, Footer } = Layout
function Aboutus() {
  useEffect(() => {
    const { BMap, BMAP_STATUS_SUCCESS } = window
    var mp = new BMap.Map("container");
    mp.centerAndZoom(new BMap.Point(118.91889, 32.087133), 12);
    mp.setDefaultCursor("url('bird.cur')")
    mp.enableScrollWheelZoom(true);
    var marker = new BMap.Marker(new BMap.Point(118.91889, 32.087133));  // 创建标注
    mp.addOverlay(marker);               // 将标注添加到地图中
    // var p1 = new BMap.Point(118.91889,32.087133)
    // var p2;
    // var geolocation = new BMap.Geolocation()
    // geolocation.getCurrentPosition(function(r){
    //   console.log(this.getStatus(),BMAP_STATUS_SUCCESS)
    //   if (this.getStatus()==BMAP_STATUS_SUCCESS) {
    //     // alert('定位成功')
    //     p2 = r.Point
    //   }else{
    //     // alert('定位失败：'+this.getStatus())
    //   }
    // },{enableHighAccuracy:true})
    // var driving = new BMap.DrivingRoute(mp, {renderOptions:{map: mp, autoViewport: true}});
    // 		driving.search(p1,p2);
  }, [])
  return (
    <Layout>
      <Headers style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '0 0' }}>
        <div>
          <div className='aboutus'>
            <div className='banner'>
              <img src={require('../static/picture/关于我们切图/关于我们1的副本.jpg')} alt="" />
            </div>
            <div className='jieshao'>
              <div className='a1'>
                <img src={require('../static/picture/关于我们切图/公司介绍.png')} alt="" />
                <div className='a2'><h2>公司介绍</h2><p>COMPANY PROFILE </p>南京虚拟时代（101VR）信息科技有限公司(前身澳洲BITBERG成立于2014年) 2016年4月业务拓展至中国南京、北京、广州，核心团队来自硅谷、澳洲，是一家具备软硬件尖端技术研发实力的新锐企业，致力于提供科技+文化+娱乐一站式解决方案，结合VR/AR等创新体验，提升娱乐科技的核心竞争力，通过产 业融合，创造新文化娱乐业态。
                提供开放自由的平台，尊重员工个人价值，尊重客户利益，讲究工作高效， 推崇创新精神与团队合作，推崇极客精神，并以此为公司基础理念。
                
               </div>
              </div>

            </div>
            <div>
              <div className='title1' >
                <h1 style={{ fontWeight: 600, fontSize: '35px', color: "#333333" }}>荣誉资质</h1>
                <img src={require("../static/picture/首页切图/沉浸体验/每段分隔线.png")} alt="" />
                <p style={{ fontSize: '25px', color: "black", marginTop: "50px" }}>
                  公司于2017年通过ISO9001质量管理体系认证，荣获科技型中小企业、江苏省民营科技企业等称号。于2017年11月先后进入南京市、江苏省高企预备培育库。并于2018年12月成为国家级高新技术企业。
               </p>
                <Row type='flex' justify="center" align='middle' gutter={20}>
                  <Col className="" span={1} xs={12} sm={12} md={9} lg={9} xl={9}>
                    <div className='lists'><img src={require("../static/picture/关于我们切图/1.png")} alt="" /><p>高新技术企业证书</p></div>
                  </Col>
                  <Col className="" span={1} xs={12} sm={12} md={9} lg={9} xl={9}>
                    <div className='lists'><img src={require("../static/picture/关于我们切图/2.png")} alt="" /><p>江苏省民营科技企业</p></div>
                  </Col>
                  <Col className="" span={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className='lists'><img src={require("../static/picture/关于我们切图/3.png")} alt="" /><p>计算机软件检测报告</p></div>
                  </Col>
                  <Col className="" span={1} xs={12} sm={12} md={8} lg={8} xl={8}>
                    <div className='lists'><img src={require("../static/picture/关于我们切图/4.png")} alt="" /><p>计算机软件著作权登记证书</p></div>
                  </Col>
                  <Col className="" span={1} xs={12} sm={12} md={8} lg={8} xl={8}>
                    <div className='lists'><img src={require("../static/picture/关于我们切图/5.png")} alt="" /><p>质量管理体系证书</p></div>
                  </Col>
                  <Col className="" span={1} xs={12} sm={12} md={8} lg={8} xl={8}>
                    <div className='lists'><img src={require("../static/picture/关于我们切图/6.png")} alt="" /><p>实用新型专利证书</p></div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className='adress'>
            <div className='title'>
              <h2>联系我们</h2>
              <img src={require("../static/picture/首页切图/沉浸体验/每段分隔线.png")} alt="" />
            </div>
            <div className='ditu'>
              <div className='left'>
                <div className='top'>
                  <img src={require("../static/picture/关于我们切图/logo.png")} alt="" />
                  <img src={require("../static/picture/关于我们切图/logo2.png")} alt="" />
                </div>
                <h4>南京虚拟时代（101VR）信息科技有限公司</h4>
                <p>地址:江苏省南京市栖霞区紫东国际创意园B6栋腾讯众创空间2层202室</p>
                <p>邮编:210046</p>
                <p>电话:025-52212101 18761145592</p>
              </div>
              <div id="container"></div>

            </div>



          </div>
        </div>
        {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}></div> */}
      </Content>
      <Footers style={{ textAlign: 'center' }}>JSPang.com</Footers>
    </Layout>
  )
}
export default Aboutus