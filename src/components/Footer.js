import '../static/css/component/footer.css'
import React, { Component } from 'react';
import{withRouter,Link} from 'react-router-dom'
import { Row, Col, Menu, Icon, Divider, Avatar, Button } from 'antd'
const Footer = (props) => {
    // const data = [
    //     {title:'软件产品',detail:[{lingk:'新时代系列',type:1},{lingk:'70周年系列',type:1},{lingk:'党史系列',type:1},{lingk:'特色主题',type:1}]},

    // ]
    // console.log(props)
    // const godetail = (type) => {
    //     console.log(type)
    //     switch (type) {
    //         case 1:
    //             props.history.push('/Products')
    //             break;
    //         case 2:
    //             props.history.push('/cases')
    //             break;
    //         case 3:
    //             props.history.push('/successcase')
    //             break;
    //         case 4:
    //             props.history.push('/aboutus')
    //             break;
         
    //     }
    // }
    return (

        <div className='foot'>
            <div className='foot-top'>
                <Row type='flex' justify="space-between" >
               
                            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                <ul>
                                    <li className='title' ><Link to='/Products'>软件产品</Link></li>
                                    <li >新时代思想</li>
                                    <li >新中国史</li>
                                    <li >中国共产党党史</li>
                                    <li >社会主义发展史(思政)</li>
                                    <li >特色主题馆</li>
                                </ul>
                            </Col>
                          
                            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                <ul>
                                    <li className='title' ><Link to='/cases'>推荐方案</Link></li>
                                    <li>党建活动中心</li>
                                    <li>互动屏+一体机版本</li>
                                    <li>单互动版本</li>
                                    <li>阿里云平台</li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                <ul>
                                    <li className='title' ><Link to='/cases'>设备平台</Link></li>
                                    <li>VR一体机</li>
                                    <li>PC VR</li>
                                    <li>多点触控互动多媒体</li>
                                </ul>
                            </Col>
                     
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}  >
                        <ul style={{borderLeft:'1px solid #CCCCCC',height:'80%'}}>
                            <li className='title'><Link to='/aboutus'>关于我们</Link></li>
                            <li>联系电话：025-52212101, 18761145592</li>
                            <li>公司地址：江苏省南京市栖霞区紫东路2号腾讯众创空间B6栋B座2楼</li>
                        </ul>
                    </Col>

                </Row>

            </div>

            <div className='foot-bottom'>
                <span>Copyright © 2000 - 2019 101vr.com　All Rights Reserved. ICP证：<a href='http://www.beian.miit.gov.cn'>浙D2-200080101</a></span>
                <i>&nbsp;&nbsp;&nbsp;制作单位：妖灵妖信息科技有限公司</i>
            </div>
        </div>
    )
}

export default withRouter(Footer)