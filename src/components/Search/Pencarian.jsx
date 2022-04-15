import { DatePicker, Input, Select, TimePicker } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pencarian.css';

function Pencarian() {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/hasil');
  }

  return (
    <>
      <div class="card card-carimobil">
        <div class="card-body d-flex">
          <div className="card-content" style={{ maxWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Tipe Driver</p>
            <Select placeholder="Pilih Tipe Driver" style={{ width: 250 }}>
              <Option value="1">Dengan Sopir</Option>
              <Option value="2">Tanpa Sopir (Lepas Kunci)</Option>
            </Select>
          </div>
          <div className="card-content" style={{ maxWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Tanggal</p>
            <DatePicker style={{ width: 250 }} />
          </div>
          <div className="card-content" style={{ maxWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Waktu Jemput/Ambil</p>
            <TimePicker use12Hours showNow={false} format="HH:mm" style={{ width: 250 }} />
          </div>
          <div className="card-content" style={{ maxWidth: 250, marginRight: 20 }}>
            <p class="mb-1">Jumlah Penumpang (Optional)</p>
            <Input placeholder="Jumlah Penumpang" style={{ width: 250 }} />
          </div>
          <div className="card-content d-flex align-items-end">
            <button onClick={handleSubmit} class="sewabtn">
              Cari Mobil
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pencarian;
