import React, { useState } from 'react'
// 引入index的css
import '../static/css/successcase.css'
import { Layout, Menu, Row, Col } from 'antd'
import Footers from '../components/Footer'
import Headers from '../components/Header'
import Item from 'antd/lib/list/Item'
const { Header, Content, Footer } = Layout
function Successcase() {
  const picturePath = [
    { title: '2019年全国两会', explain: '两会期间，与中国联通及河南省电视台合作，于2019年全国两会现场，展示VR智慧党建系统。', picture: "static/picture/成功案例切图/2.png" },
    { title: '2020年全国两会', explain: '两会期间，与中国联通及河南省电视台合作，于2019年全国两会现场，展示VR智慧党建系统。', picture: "static/picture/成功案例切图/1.png" },

    { title: '江苏省新华报业传媒集团', explain: '江苏省省委宣传部副部长网信办主任徐缨、新华日报社总编辑顾雷鸣等领导视察2019紫金网络峰会。', picture: "static/picture/成功案例切图/3.png" },
    // { title: '上线阿里巴巴云平台', explain: '联手浩鲸科技AI党建云项目全面上:线阿里巴巴云平台', picture: "static/picture/成功案例切图/4.png" },
    { title: '上线阿里巴巴云平台', explain: '联手浩鲸科技AI党建云项目全面上线阿里巴巴云平台', picture: "static/picture/成功案例切图/6.png" },
    { title: '山西省党建书房', explain: '山西省党建书房项目签约仪式、人民日报专题报道、书博会现场展示、省内数十处落地案例展示。', picture: "static/picture/成功案例切图/5.png" },

    { title: '中国电信5G现场展示', explain: '中国电信5G直播现场展示新时代VR智慧党建系统', picture: "static/picture/成功案例切图/7.png" },
    { title: '徐州市拓普研究院', explain: '徐州市委书记周铁根与宿迁市委书记张爱军莅临现场拓普智慧党建展厅。', picture: "static/picture/成功案例切图/8.png" },
    // { title: '', explain: '', picture: "static/picture/成功案例切图/9.png" },
    // { title: '', explain: '', picture: "static/picture/成功案例切图/10.png" },
    { title: '长三角文博会', explain: '江苏省省委常委、宣传部部长王燕文，新华日报社社长、党委书记、新华报业传媒集团董事长双传学等领导再次体验【新时代智慧党建展示系统】', picture: "static/picture/成功案例切图/11.png" },
    // { title: '', explain: '', picture: "static/picture/成功案例切图/12.png" },
  ]
  return (
    <Layout>
      <Headers style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '0 0' }}>

        <div style={{ background: '#fff', minHeight: 360 }}>
          <div>
            <div className='seccesscase'>
              <div className='banner'>
                <img src={require('../static/picture/成功案例切图/成功案例1的副本.jpg')} alt="" />
              </div>
              <div className='container'>
                <Row type='flex' justify="center" align='middle'>
                  {
                    picturePath.map(Item => {
                      return (
                        <Col className="" span={1} xs={11} sm={11} md={7} lg={7} xl={7} style={{ margin: "0 5px" }}>
                          <div className='right1'>
                            <img src={require(`../${Item.picture}`)} alt="" />
                            <div className='title'>
                              <h2>{Item.title}</h2>
                              <p>{Item.explain}</p>
                            </div>
                          </div>
                        </Col>
                      )
                    })
                  }
                </Row>
                {/* <div className='hezuo'>
                  <div className='title1'>
                    <h1 style={{ fontWeight: 600, fontSize: '30px', color: "#333333" }}>合作伙伴</h1>
                    <img src={require("../static/picture/首页切图/沉浸体验/每段分隔线.png")} alt="" />

                  </div>
                  <img className='a2' src={require('../static/picture/成功案例切图/合作伙伴.png')} alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footers style={{ textAlign: 'center' }}></Footers>
    </Layout>
  )
}
export default Successcase