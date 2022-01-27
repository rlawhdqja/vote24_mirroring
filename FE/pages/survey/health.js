import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import axios from "axios";
import SurveyList from "../../components/Survey/SurveyList";
import Paging from "../../components/Paging";

const SURVEY_URL = "http://i6a205.p.ssafy.io:8000/api/survey";

function Health() {
  const [dataList, setDataList] = useState([]);
  // 페이징 처리를 위한
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // 병원 id 받아서 url에 적용
  const { userInfo } = useSelector((state) => state.userStatus);
  const hospital_id = userInfo.id;
  const SURVEY_HEALTH_URL = `${SURVEY_URL}/list/${hospital_id}/0`;

  // 서버에서 건강 설문 목록 받아오는 코드
  useEffect(() => {
    const getList = async () => {
      const res = await axios.get(SURVEY_HEALTH_URL);
      console.log("건강설문 목록 데이터", res.data);

      setDataList(res.data);
    };
    getList();
  }, []);

  // 페이징 처리를 위한 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataList.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header title="건강설문"></Header>
      <div className="container">
        <SurveyList dataList={currentPosts}></SurveyList>
        <Paging
          postsPerPage={postsPerPage}
          totalPosts={dataList.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Health;