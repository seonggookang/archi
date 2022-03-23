import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import axios from "axios";

export const List = () => {
  const [pics, setPics] = useState([]);
  // stirng 표시로 하니까 안됐어. 빈배열로 놔야 돌아감.

  const [isChecked, setIsChecked] = useState(false);

  const [checkedItems, setCheckedItems] = useState(new Set());

  useEffect(() => {
    const fetchData = async () => {
      const fetched = await axios("http://localhost:3001/renderings");
      setPics(fetched.data);
    };

    fetchData();
  }, []);

  const deleteThisPicture = () => {
    console.log("delete this picture!");
  };
  const clicked = () => {
    console.log("clicked!");
    setIsChecked(!isChecked);
  };

  return (
    <div className="wrapper">
      <div className="quantity">{pics.length}개의 렌더샷</div>
      <div className="name">갤러리</div>
      <i
        data-fa-symbol="deleteFile"
        className="trash fas fa-trash fa-fw"
        onClick={() => {
          deleteThisPicture();
        }}
      />

      <div className="mainpage">
        {pics?.map((data, idx) => (
          <div key={idx}>
            {console.log(data._id.split("/")[4])}
            <input
              className="checkbox"
              type="checkbox"
              id="picked"
              checked={isChecked}
              onChange={() => clicked()}
            />
            <Link to={`/${data._id.split("/")[4]}`}>
              <label htmlFor="picked">
                <img key={idx} src={data._id} alt="error" className="image" />
              </label>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// checkbox를 각 이미지에 먹여서 각제하게끔. 그러면 메인페이지의 갯수도 118개가 아니라 점점 줄어들겠지

// toeic 구현 한거에서 post를 이용해서 서버에 있는 값을 delete을 통해 제거.

// 쓰레깉통 버튼 누르면, 갯수가 하나 줄면서 메인페이지로.

// dummy에 있는 파일들 중 '/'기준으로 나눈것들중 4번쨰의 값이랑 match.params.id랑 비교해서 같은게 있으면 해당것을 지우고 map돌린것을 뷰에 뿌려줘라.
