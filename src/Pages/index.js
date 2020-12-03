import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
// 引入index的css
import '../static/css/Index.less'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import { Layout, Menu, Carousel, Row, Col, Icon } from 'antd'
import Footers from '../components/Footer'
import Headers from '../components/Header'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout
const { SubMenu } = Menu;
// const {LeftOutlined,RightOutlined} =Icon
function Index(props) {
  // useref有两个作用，一是获取dom而是保存变量 const textRef = useRef() textRef.current = text;
  const inputEl = useRef(null)
  console.log(props)
  const picturePath = [{
    title: 'static/picture/首页/首页卡片/新时代/111.png',
    cards: ['static/picture/首页/首页卡片/新时代/1.png',
      'static/picture/首页/首页卡片/新时代/2.png',
      'static/picture/首页/首页卡片/新时代/3.png',
      'static/picture/首页/首页卡片/新时代/4.png',
      'static/picture/首页/首页卡片/新时代/5.png']
  },
  {
    title: 'static/picture/首页/首页卡片/70周年/222.png',
    cards: ['static/picture/首页/首页卡片/70周年/1.png',
      'static/picture/首页/首页卡片/70周年/2.png',
      'static/picture/首页/首页卡片/70周年/3.png',
      'static/picture/首页/首页卡片/70周年/4.png',
      'static/picture/首页/首页卡片/70周年/5.png']
  },
  {
    title: 'static/picture/首页/首页卡片/党史/333.png',
    cards: ['static/picture/首页/首页卡片/党史/1.png',
      'static/picture/首页/首页卡片/党史/2.png',
      'static/picture/首页/首页卡片/党史/3.png',
      'static/picture/首页/首页卡片/党史/4.png',
      'static/picture/首页/首页卡片/党史/5.png']
  },
  {
    title: 'static/picture/首页/首页卡片/特色主题/444.png',
    cards: ['static/picture/首页/首页卡片/特色主题/1.png',
      'static/picture/首页/首页卡片/特色主题/2.png',
      'static/picture/首页/首页卡片/特色主题/3.png',
      'static/picture/首页/首页卡片/特色主题/4.png',
      'static/picture/首页/首页卡片/特色主题/5.png']
  }
  ]
  let handlePrev = () => {
    console.log(inputEl)
    inputEl.current.prev();
  }

  let handleNext = () => {
    inputEl.current.next();
  }

  useEffect(() => {
    var mySwiper1 = new Swiper('.swiper-container1', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',//slider容器能够同时显示的slides数量(carousel模式)
      centeredSlides: true,//默认active slide居左，设置为true后居中.
      pagination: {
        el: '.swiper-pagination1',
      },
    })
    var mySwiper = new Swiper('.swiper-container', {
      watchSlidesProgress: true,
      slidesPerView: 'auto',//slider容器能够同时显示的slides数量(carousel模式)
      centeredSlides: true,//默认active slide居左，设置为true后居中
      loop: true,
      autoplay: true,
      loopedSlides: 5,//可视slide
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },//对象最后不能有，在ie会报错
      pagination: {
        el: '.swiper-pagination'
        //clickable :true,
      },
      //当Swiper的progress被改变时执行。接受Swiper的progress作为参数（返回值范围一般在0-1）
      on: {
        progress: function (progress) {
          var modify;
          var translate;
          var scale;
          var zIndex;
          for (var i = 0; i < this.slides.length; i++) {
            //返回当前选中的元素中的指定序号的元素
            var slide = this.slides.eq(i);
            var slideProgress = this.slides[i].progress;
            modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            translate = slideProgress * modify * 260 + 'px';
            scale = 1 - Math.abs(slideProgress) / 5;
            zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 3) {
              slide.css('opacity', 0);
            }
          }
        },
        setTransition: function (transition) {
          //每当设置Swiper开始过渡动画时执行。transtion获取到的是Swiper的speed值
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            slide.transition(transition);
          }

        }
      }

    });


  })
  const goproduct=(type)=>{
    console.log(props)
    let idname;
    if (type == 1) {
      idname='#共产党党史'

    } else if (type == 2) {
      idname='#社会主义发展史（思政）'


   } else if (type == 3) {
    idname='#特色主题'


   } else if (type == 4) {
    idname='#新中国史'


   } else  if (type == 5){
    idname='#新时代思想'


   }
  //  劣势刷新值不存在
  window.location.href = `Products${idname}`;


  } 
  return (
    <Layout>
      <Headers style={{ background: '#fff', padding: 0 }} />

      <Content >

        <div style={{ background: '#fff', marginTop: '0px' }}>
          {/* <Carousel autoplay ref={inputEl}>
            <div>
              <h3>
                <img src={require("../static/picture/首页切图/banner/img_1.jpg")} alt="" />

              </h3>
            </div>
            <div>
              <h3>
                <img src={require("../static/picture/首页切图/banner/img_2.jpg")} alt="" />

              </h3>
            </div>
            <div>
              <h3>
                <img src={require("../static/picture/首页切图/banner/img_3.jpg")} alt="" />

              </h3>
            </div>
            <div>
              <h3>
                <img src={require("../static/picture/首页切图/banner/img_4.png")} alt="" />

              </h3>
            </div>
            <div>
              <h3>
                <img src={require("../static/picture/首页切图/banner/img_5.jpg")} alt="" />

              </h3>
            </div>
          
          </Carousel> */}
          {/* <LeftOutlined onClick={handlePrev}/> 
        <RightOutlined onClick={handleNext}/>  */}
          {/* 轮播图 */}
          <div className="swiper-container1">
            <div className="swiper-wrapper">
            <div className="swiper-slide" >
                <h3>
                  <img src={require("../static/picture/首页切图/banner/img_4.png")} alt="" />

                </h3>
              </div>
              <div className="swiper-slide" >
                <h3>
                  <img src={require("../static/picture/首页切图/banner/img_5.jpg")} alt="" />

                </h3>
              </div>
              <div className="swiper-slide" >
             
                <h3>
                  <img src={require("../static/picture/首页切图/banner/img_1.jpg")} alt="" />

                </h3>
              </div>
              <div className="swiper-slide" >
                <h3>
                  <img src={require("../static/picture/首页切图/banner/img_2.jpg")} alt="" />

                </h3>
              </div>
              <div className="swiper-slide" >
                <h3>
                  <img src={require("../static/picture/首页切图/banner/img_3.jpg")} alt="" />

                </h3>
              </div>
            
           
            </div>
            <div className="swiper-pagination1"></div>
          </div>

          {/* 视频 */}
          <div className='video'>
            <div className='title'>
              <h1 style={{ fontWeight: 600, fontSize: '30px', color: "#333333" }}>沉浸体验</h1>
              <img src={require("../static/picture/首页切图/沉浸体验/每段分隔线.png")} alt="" />
              <p style={{ marginTop: "20px", fontSize: "22px" }}>超<span style={{color:"#CA0000"}}>10万</span>平虚拟空间 ，更沉浸，更极致！</p>
            </div>
            <div className='body'>
              <iframe src="http://player.bilibili.com/player.html?aid=57449597&cid=100299444&page=1&high_quality=1" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen={true} className=" ifra" id="ifra" background='none' />
            </div>
          </div>
          {/* 产品系列 */}
          {/* require不能是变量路径，加上../去拼接就好了 */}

          <div className='prolist'>
            <div className='title'>
              <h1 style={{ fontWeight: 600, fontSize: '30px', color: "#333333" }}>内容丰富</h1>
              <img src={require("../static/picture/首页切图/沉浸体验/每段分隔线.png")} alt="" />
              <p style={{ marginTop: "20px", fontSize: "22px" }}><span style={{ color: "#CA0000" }}>5</span >大主题，<span style={{ color: '#CA0000' }}>40+</span>展馆，多维度内容介绍！</p>
            </div>
            <Row type='flex' justify="center" align='middle'>
            <Col className="" span={1} xs={12} sm={12} md={2} lg={4} xl={4}>
                <div className='lists'onClick={()=>{goproduct(5)}}><img src={require("../static/picture/首页切图/内容丰富/新时代思想.png")} alt="" /></div>

              </Col>
              <Col className="" span={1} xs={12} sm={12} md={2} lg={4} xl={4}>
                <div className='lists' onClick={()=>{goproduct(4)}}><img src={require("../static/picture/首页切图/内容丰富/新中国史.png")} alt="" /></div>

              </Col>
              <Col className="" span={1} xs={12} sm={12} md={2} lg={4} xl={4}>
                <div className='lists' onClick={()=>{goproduct(1)}}><img src={require("../static/picture/首页切图/内容丰富/党史.png")} alt="" /></div>

              </Col>
              <Col className="" span={1} xs={12} sm={12} md={2} lg={4} xl={4}>
                <div className='lists' onClick={()=>{goproduct(2)}}><img src={require("../static/picture/首页切图/内容丰富/社会主义发展史.png")} alt="" /></div>

              </Col>
              <Col className="" span={1} xs={12} sm={12} md={2} lg={4} xl={4}>
                <div className='lists' onClick={()=>{goproduct(3)}}><img src={require("../static/picture/首页切图/内容丰富/特色主题.png")} alt="" /></div>

              </Col>
            
            
            </Row>

            {/* {
              picturePath.map((item, index) => {
                return (

                  <div className='product' key={index}>
                    <div className='pro_name'>
                      <img src={require('../' + item.title)} alt="" />
                    </div>
                    <div className="swiper-container">

                      <div className="swiper-wrapper">
                        {
                          item['cards'].map((item1, index1) => {
                            return (
                              <div className="swiper-slide" key={item1}>
                                <img src={require('../' + item1)} alt="" />
                              </div>
                            )
                          })
                        }
                      </div>
                      <div className='swiper-pagination'>
                      </div>
                    </div>
                  </div>
                )
              })
            } */}
          </div>


          {/*  成功案例*/}
          <div className='cases'>
            <div className='top'>
              {/* <img src={require("../static/picture/首页/555.png")} alt="" /> */}
              <Row>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <div className='icons'>
                    <img src={require("../static/picture/首页切图/专业的内容来源.png")} alt="" />
                    <h3>专业的内容来源</h3>
                    <p>汇总中央文件，重大会议，重要讲话，无缝传播来自中央的声音</p>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <div className='icons'>
                    <img src={require("../static/picture/首页切图/系统便携.png")} alt="" />
                    <h3 style={{ marginTop: "25px" }}>系统便携</h3>
                    <p>VR眼镜即戴即看，全程单手操作，碎片化学习，系统性认知</p>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <div className='icons'>
                    <img src={require("../static/picture/首页切图/集团学习方案.png")} alt="" />
                    <h3>集体同步学习方案</h3>
                    <p>支持一键群控，即可多人同时学习，又能大屏投放</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className='right'>
              <div style={{textAlign:"center"}}>
              <h1 style={{ fontWeight: 600, fontSize: '30px', color: "#333333" }}>成功案例</h1>
              <img src={require("../static/picture/首页切图/成功案例/分隔线.png")} alt="" />
              <p style={{ marginTop: "20px", fontSize: "22px" }}>超<span style={{color:"#CA0000"}}>10</span>万以上的厅级单位交付使用 ，<span style={{color:"#CA0000"}}>几百</span>个项目落地，和<span style={{color:"#CA0000"}}>上千</span>家渠道合作！</p>
              </div>
              <Row type='flex' justify="center" align='middle'>
                <Col className="" span={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className='right1'><img src={require("../static/picture/首页切图/成功案例/2019年全国两会.png")} alt="" /><p>2019年全国两会</p></div>

                </Col>
                <Col className="" span={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className='right1'><img src={require("../static/picture/首页切图/成功案例/2020年全国两会.png")} alt="" /><p>2020年全国两会</p></div>

                </Col>
                <Col className="" span={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className='right1'><img src={require("../static/picture/首页切图/成功案例/江苏省新华报业传媒集团.png")} alt="" /><p>江苏省新华报业传媒集团</p></div>

                </Col>
                <Col className="" span={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className='right1'><img src={require("../static/picture/首页切图/成功案例/中国传媒大学.png")} alt="" /><p>中国传媒大学</p></div>

                </Col>
                <Col className="" span={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className='right1'>


                    <img src={require("../static/picture/首页切图/成功案例/山西省党建书房.png")} alt="" /><p>山西省党建书房</p></div>
                </Col>
                <Col className="" span={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className='right1'><img src={require("../static/picture//首页切图/成功案例/上线阿里巴巴云平台.png")} alt="" /><p>上线阿里巴巴云平台</p></div>

                </Col>
                <Col className="" span={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className='right1'>
                    <img src={require("../static/picture/首页切图/成功案例/中国电信5G现场展示.png")} alt="" /><p>中国电信5G现场展示</p></div>


                </Col>
                <Col className="" span={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className='right1'>
                    <img src={require("../static/picture/首页切图/成功案例/徐州市拓普研究院.png")} alt="" /><p>徐州市拓普研究院</p></div>


                </Col>


                {/* <Col className="" span={1} xs={20} sm={20} md={8} lg={10} xl={10}>
                  <Row type='flex' justify="center" align='middle'>
                   
                  </Row>
                </Col> */}
              </Row>
              <div className='bott'>    <Link to='/successcase'> <img src={require("../static/picture/首页切图/成功案例/查看更多.png")} alt="" /></Link></div>

            </div>
          </div>

        </div>
      </Content>
      <Footers style={{ textAlign: 'center' }} history={props}></Footers>
    </Layout>
  )
}
export default Index