import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './cardhasil.css';
import Pencarian from '../Search/Pencarian';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function CarCard() {
  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const navigate = useNavigate();

  const handleData = async (e) => {
    setDataList([]);
    setShowDetail(false);
    setLoading(true);
    try {
      const res = await axios('https://rent-cars-api.herokuapp.com/admin/car');
      setDataList(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDetail = (event) => {
    const id = event.target.value;
    navigate(`/detail/${id}`)
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      <form onSubmit={handleData}>
        <div class="d-flex justify-content-center">
          <Pencarian />
        </div>
      </form>
      {loading && <div class='d-flex justify-content-center mt-5' ><Spin indicator={antIcon} /></div> }
      <div class="container">
        <div class="row mt-2">
          {dataList?.map((item) => {
            return (
              <div class="col-lg-4 my-2">
                <div class="card card-mobil h-100 p-1" key={item.id}>
                  <div class="card-body p-4 h-100">
                    <img class="car-img" src={item.image} alt="" />
                    <p class="car-name">{item.name}</p>
                    <p class="car-price ">Rp. {new Intl.NumberFormat('id-ID').format(item.price)} / hari</p>
                    <p class="car-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p class="car-passenger">
                      <img src="/img/carpeople.png" alt="" />4 Orang
                    </p>
                    <p class="car-type">
                      <img src="/img/cartype.png" alt="" />
                      Manual
                    </p>
                    <p class="car-year">
                      <img src="/img/carcalendar.png" alt="" />
                      Tahun 2020
                    </p>
                  </div>
                  <div className="card-mobil-footer">
                    <button onClick={handleDetail} value={item.id} class="choose-btn">
                      Pilih Mobil
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CarCard;