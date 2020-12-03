import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route,withRouter } from 'react-router-dom'
import { Row, Col, Menu, Icon, Divider, Avatar, Button,Drawer } from 'antd'
import '../static/css/component/header.css'
import '../static/css/component/eg.less'
// withRouter的作用就是, 如果我们某个东西不是一个Router只是一个功能组件, 但是我们要依靠它去跳转一个页面, 比如点击页面的logo, 返回首页, 这时候就可以使用withRouter来做.withRouter, 作用是将一个组件包裹进Route里面, 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中.（我的理解加上之后可以写编程时导航，不想vue可以在全局用this.$router.push(）来完成)

function Header(props) {
    console.log(props)

    const [collapsed, setcollapsed] = useState(false)
    const toggleCollapsed = () => {
        console.log(collapsed)
        setcollapsed(!collapsed)
    }
    const handleClickArticle = (e) => {
        console.log(e.key,props)
        if (e.key == '/') {
           props.history.push('/')
        } else if (e.key == '/Products') {
            props.history.push('/Products')
        } else if (e.key == '/cases') {
            props.history.push('/cases')
        } else if (e.key == '/successcase') {
            props.history.push('/successcase')
        } else  if (e.key == '/aboutus'){
            props.history.push('/aboutus')
        }
    }
    const onClose=()=>{
        setcollapsed(false)
    }
    return <div className='header'>
        <Row type='flex' justify="space-around" align='middle'>
            <Col className="header-logo" span={1} xs={19} sm={19} md={19} lg={4} xl={4}> 
            <span className='logo'>       <img src={require("../static/picture/首页切图/logo.png")} alt="" /> 
 </span>
                    

            </Col>
            <Col className="memu-div" xs={0} sm={0} md={0} lg={15} xl={15} >

                <Menu mode="horizontal" onClick={handleClickArticle}  defaultSelectedKeys={['/']} selectedKeys={[props.history.location.pathname]}>
                    {/* <Menu.Item key="home">
            <Avatar size={64} icon="user"  />
                </Menu.Item> */}
                    <Menu.Item key="/">
                        首页
                        
                </Menu.Item>
                    <Menu.Item key="/Products">
                        产品介绍

                </Menu.Item>
                    <Menu.Item key="/cases">
                        推荐方案
                </Menu.Item>
                    <Menu.Item key="/successcase">
                        成功案例
                </Menu.Item>
                    <Menu.Item key="/aboutus">
                        关于我们
                        
                </Menu.Item>
              
                </Menu>
            </Col>
            <Col className="memu-phone" xs={0} sm={0} md={0} lg={4} xl={4}>  咨询热线：025-5221-2101</Col>
          
            <Col className="memu-div1" xs={5} sm={5} md={5} lg={0} xl={0} >
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Drawer
          placement='top'
          closable={false}
          onClose={onClose}
          visible={collapsed}
        >
            <Menu mode="inline"  onClick={handleClickArticle}  defaultSelectedKeys={['/']} selectedKeys={[props.history.location.pathname]}>
                  
                    <Menu.Item key="/">
                        首页
                        
                </Menu.Item>
                    <Menu.Item key="/Products">
                        产品介绍

                </Menu.Item>
                    <Menu.Item key="/cases">
                        推荐方案
                </Menu.Item>
                    <Menu.Item key="/successcase">
                        成功案例
                </Menu.Item>
                    <Menu.Item key="/aboutus">
                        关于我们
                </Menu.Item>
                </Menu>
        </Drawer>
            
            </Col>

        </Row>
    </div>
}
export default withRouter(Header)