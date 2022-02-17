import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import axios from "axios";
import SurveyList from "../../components/Survey/SurveyList";
import Paging from "../../components/Paging";
import Link from "next/link";
import { useRouter } from "next/router";

const SURVEY_URL = `${process.env.NEXT_PUBLIC_SERVER}/api/survey`;

function ServiceSurvey() {
  const [dataList, setDataList] = useState([]);
  const [dataListProp, setDataListProp] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const router = useRouter();

  const { userInfo } = useSelector((state) => state.userStatus);
  const hospital_id = userInfo.id;
  const SURVEY_SERVICE_URL = `${SURVEY_URL}/list/${hospital_id}/1`;

  useEffect(() => {
    const getList = async () => {
      await axios
        .get(SURVEY_SERVICE_URL)
        .then((res) => {
          setDataList(res.data);
          setDataListProp(res.data);
        })
        .catch((error) => {
          console.log("만족도 설문 목록 get 실패", error);
          router.push("/404");
        });
    };
    getList();
  }, [SURVEY_SERVICE_URL]);

  // 페이징 처리를 위한 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataList.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header title="서비스 만족도 설문">
        <></>
      </Header>
      <div className="container div-table shadow">
        <div className="ms-3 mt-2">
          <Link href={"health"}>
            <a>건강 설문으로 가기</a>
          </Link>
        </div>
        <SurveyList
          url={SURVEY_URL}
          setDataList={setDataList}
          dataListProp={dataListProp}
          dataList={currentPosts}
          category={"1"}
        ></SurveyList>
        <Paging
          postsPerPage={postsPerPage}
          totalPosts={dataList.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default ServiceSurvey;
