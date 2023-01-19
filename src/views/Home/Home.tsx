import { useState } from "react";
import "./Home.scss";
// 导入路由
import { useNavigate } from "react-router-dom";

export const Home = (props) => {
  const [list, setlist] = useState([1, 2, 4, 5, 5]);

  const godetials = () => {
    props.history.push("/about");
  };
  return (
    <div className="root">
      <h1>这是一个商品列表</h1>
      
      <div className="commodityContainer">
        {list.map((item, index) => {
          return (
            <div
              className="commodityInformation"
              onClick={() => godetials()}
              key={index}
            >
              <div style={{ border: "1px solid #DFDFDF" }}>
                <img
                  src="https://tse1-mm.cn.bing.net/th/id/OIP-C.12N2G_Xd4DI6gQI67nzwnQHaE8?w=219&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  alt="商品图片"
                />
                <div className="name">野生黄芪特级</div>
                <div className="price">
                  <span>￥</span>234.00
                </div>
                <div className="footer">
                  <div className="specification">0.5kg/袋子</div>
                  <div className="placeOfOrigin">北京</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
