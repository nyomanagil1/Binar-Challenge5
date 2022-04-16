import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './detail.css';
import { getPostByID } from '../../redux/action/postByIDAction';

function DetailComp() {
  const dispatch = useDispatch();
  let { id } = useParams();

  const { isLoading, data: post } = useSelector((state) => state.postByID);

  useEffect(() => {
    dispatch(getPostByID(id));
  });

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-8">
              <div className="card card-detail h-100">
                <div className="card-body">
                  <h5>Tentang Paket</h5>
                  <p>Include</p>
                  <ul>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <p>Exclude</p>
                  <ul>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <h5>Refund, Reschedule, Overtime</h5>
                  <ul>
                    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li> Tidak termasuk akomodasi penginapan</li>
                    <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li> Tidak termasuk akomodasi penginapan </li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam </li>
                    <li>Tidak termasuk akomodasi penginapan </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" class="btncontinue mt-3" style={{ minWidth: 178 }}>
                  Lanjutkan Pembayaran
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-detail-car h-100">
                <div className="card-body">
                  <div class="d-flex justify-content-center py-3 mb-3">
                    <img src={post.image} alt="" style={{ width: '100%' }} />
                  </div>
                  <h6 class="fw-bold"> {post.name} </h6>
                  <div className="detailmobil d-flex pb-3">
                    <p>
                      <img className="me-1" src="../img/carpeople.png" alt="" /> 4 Orang
                    </p>
                    <p>
                      <img className="me-1 detail" src="../img/cartype.png" alt="" /> Manual
                    </p>
                    <p>
                      <img className="me-1 detail" src="../img/carcalendar.png" alt="" /> Tahun 2020
                    </p>
                  </div>
                  <div className="detailtotal d-flex justify-content-between">
                    <p>Total</p>
                    <span>Rp. {new Intl.NumberFormat('id-ID').format(post.price)}</span>
                  </div>
                  <div>
                    <button type="submit" class="btncontinue mt-3" style={{ width: '100%' }}>
                      Lanjutkan Pembayaran
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailComp;
