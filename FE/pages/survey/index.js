import React from "react";
import Header from "../../components/Header";
import Link from "next/link";

function Survey() {
  return (
    <div>
      <Header title="병원 설문조사 목록"></Header>
      <div className="container mt-3">
        <Link href="/survey/health">
          <div className="card mb-2">
            <div className="card-body">
              <h3 className="card-title">건강설문</h3>
              <p className="card-text">
                병원 방문객 / 환자 보호자 / 간병인을 대상으로 한 건강 자가 진단
                설문조사 입니다.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/survey/service">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">만족도 조사</h3>
              <p className="card-text">
                병원 방문객 / 환자 보호자 / 간병인을 대상으로 한 병원 만족도
                설문조사 입니다.
              </p>
            </div>
          </div>
        </Link>
        <div className="w-100 d-flex flex-row-reverse mt-3">
          <Link href="/survey/create">
            <button className="btn btn-primary">설문 생성</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Survey;
