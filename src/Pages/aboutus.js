import React ,{useState,useEffect} from 'react'
// 引入index的css
import '../static/css/aboutus.less'
import{Layout,Menu} from 'antd'
import Footers from '../components/Footer'
import Headers from '../components/Header'
const {Header,Content,Footer} = Layout
function Aboutus (){
  useEffect(()=>{
    const {BMap,BMAP_STATUS_SUCCESS} = window
    var mp = new BMap.Map("container");
    mp.centerAndZoom(new BMap.Point(118.91889,32.087133), 12);
    mp.setDefaultCursor("url('bird.cur')")
    mp.enableScrollWheelZoom(true);
    var marker = new BMap.Marker(new BMap.Point(118.91889,32.087133));  // 创建标注
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
  },[])
 


    return(
        <Layout>
        <Headers style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 0' }}>
        <div>
              <div className='aboutus'>
              <img src={require('../static/picture/关于我们/img_1.png')} alt="" />
              </div>
              <div className='adress'>
                 <h2>联系我们</h2>
                 <h4>南京妖灵妖信息科技有限公司</h4>
                 <p>地址:江苏省南京市栖霞区紫东国际创意园B6栋腾讯众创空间2层202室</p>
                 <p>邮编:210046</p>
                 <p>电话:  025-52212101 
                   <div>&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;18761145592</div>
                 </p>
                  
              </div>
            </div>
          <div id="container"></div>
          {/* <div style={{ padding: 24, background: '#fff', minHeight: 360 }}></div> */}
        </Content>
        <Footers style={{ textAlign: 'center' }}>JSPang.com</Footers>
      </Layout>
    )
}
export default Aboutus