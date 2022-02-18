import Select from "react-select";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { axiosGeneral, errorHandler } from "../../helpers/global";
import { useToasts } from "react-toast-notifications";
import moment from "moment";
import styled from "styled-components";
import { date } from "yup";

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function EditPembayaran({ show, setShow, id }) {
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();
  const [pelangganOption, setPelangganOption] = useState([]);
  const [listYears, setListYears] = useState([]);
  const [meterAwal, setMeterAwal] = useState([]);
  const [meterAkhir, setMeterAkhir] = useState([]);
  const [nomorKwh, setNomorKwh] = useState();
  const [namaPelanggan, setNamaPelanggan] = useState();
  const [status, setStatus] = useState();
  const [bulan, setBulan] = useState();
  const [tahun, setTahun] = useState();
  const [penggunaanKwh, setPenggunaanKwh] = useState();
  const [tarif, setTarif] = useState();
  const [biaya, setBiaya] = useState(0);
  const [biayaAdmin, setBiayaAdmin] = useState(0);
  const [totalBiaya, setTotalBiaya] = useState(biaya + biayaAdmin);

  const [idPembayaran, setIdPembayaran] = useState([]);
  const [tanggal, setTanggal] = useState([]);

  useEffect(() => {
    getDataTagihanById(id);
  }, []);

  const getDataTagihanById = async (id_pembayaran) => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const response = await axiosGeneral.get(
        `/resources/pembayaran/${id_pembayaran}`,
        {
          headers,
          params: {
            start: 0,
            limit: 999,
          },
        }
      );
      const { status, data } = response;
      if (status === 200) {
        const akhir = data.data.penggunaan_detail.meter_akhir;
        const awal = data.data.penggunaan_detail.meter_awal;
        const hasil = akhir - awal;
        const tarif = data.data.pelanggan_detail.tarif_detail.tarifperkwh;
        const biaya = tarif * hasil;
        setPenggunaanKwh(hasil);
        setIdPembayaran(data.data.id_pembayaran)
        setNomorKwh(data.data.pelanggan_detail.nomor_kwh);
        setNamaPelanggan(data.data.pelanggan_detail.nama_pelanggan);
        setStatus(data.data.penggunaan_detail.status);
        setMeterAwal(data.data.penggunaan_detail.meter_awal);
        setMeterAkhir(data.data.penggunaan_detail.meter_akhir);
        setBulan(data.data.penggunaan_detail.bulan);
        setTahun(data.data.penggunaan_detail.tahun);
        setTarif(data.data.pelanggan_detail.tarif_detail.tarifperkwh);
        setBiaya(parseInt(biaya));
        setBiayaAdmin(data.data.biaya_admin);
        setTotalBiaya(data.data.total_bayar);
        setTanggal(moment(new Date(data.data.tanggal_pembayaran)).format("DD-MM-YYYY"))
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  return (
    <Card className="w-3/5 h-4/5 block mx-auto px-4 my-3">
      <div className="block mx-auto py-4">
        <h1 className="font-bold text-3xl text-black mb-20">
          Ubah Data Penggunaan
        </h1>
        <form>
          <div className="flex justify-between my-4">
            <div className="w-full mr-2">
              <label htmlFor="email" className="block font-semibold text-sm">
                ID Pembayaran
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                type="number"
                disabled
                value={idPembayaran}
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block font-semibold text-sm">
                Tanggal Pembayaran
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                type="text"
                disabled
                value={tanggal}
              />
            </div>
          </div>
          <div className="flex justify-between my-4">
            <div className="w-full">
              <label htmlFor="email" className="block font-semibold text-sm">
                Nomor KWH
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                type="number"
                disabled
                value={nomorKwh}
              />
            </div>
            <div className="w-full mx-2">
              <label htmlFor="email" className="block font-semibold text-sm">
                Nama Pelanggan
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                disabled
                value={namaPelanggan}
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block font-semibold text-sm">
                Status
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                disabled
                value={status}
              />
            </div>
          </div>

          <div className="flex justify-between my-4">
            <div className="w-full">
              <label htmlFor="email" className="block font-semibold text-sm">
                KWH Meter Awal
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                disabled
                type="number"
                value={meterAwal}
              />
            </div>
            <div className="w-full ml-2">
              <label htmlFor="email" className="block font-semibold text-sm">
                KWH Meter Akhir
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                disabled
                type="number"
                value={meterAkhir}
              />
            </div>
            <div className="w-full ml-2">
              <label htmlFor="email" className="block font-semibold text-sm">
                Bulan
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                disabled
                value={bulan}
              />
            </div>
            <div className="w-full ml-2">
              <label htmlFor="email" className="block font-semibold text-sm">
                Tahun
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                disabled
                value={tahun}
              />
            </div>
          </div>

          <div className="flex justify-between my-4">
            <div className="w-full mr-2">
              <label htmlFor="email" className="block font-semibold text-sm">
                Penggunaan KWH meter
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                disabled
                type="text"
                value={penggunaanKwh}
              />
            </div>
            <div className="w-5 mx-2">
              <label
                htmlFor="email"
                className="block text-white font-semibold text-sm"
              >
                _
              </label>
              <h2 className="text-black rounded block w-5 focus:outline-none text-base">
                X
              </h2>
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block font-semibold text-sm">
                Tarif perKWH
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                disabled
                value={tarif}
              />
            </div>
            <div className="w-5 ml-3">
              <label
                htmlFor="email"
                className="block text-white font-semibold text-sm"
              >
                _
              </label>
              <h2 className="text-black rounded block w-5 focus:outline-none text-base">
                =
              </h2>
            </div>
            <div className="w-full ml-2">
              <label htmlFor="email" className="block font-semibold text-sm">
                Biaya
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                disabled
                type="number"
                value={biaya}
              />
            </div>
          </div>

          <div className="flex justify-between my-4">
            <div className="w-full">
              <label htmlFor="email" className="block font-semibold text-sm">
                Biaya Admin
              </label>
              <input
                className="py-2 px-3 bg-gray-100 rounded block w-full focus:outline-none text-base"
                value={biayaAdmin}
                type="text"
              />
            </div>
            <div className="w-full ml-2">
              <label htmlFor="email" className="block font-semibold text-sm">
                Total Biaya
              </label>
              <input
                className="py-2 px-3 bg-gray-300 rounded block w-full focus:outline-none text-base"
                disabled
                value={totalBiaya}
              />
            </div>
          </div>

          <div className="flex flex-row justify-end my-4">
            <div
              onClick={() => setShow(!show)}
              className="px-12 mx-3 text-white py-2 text-center w-1/6 font-semibold bg-gray-400 rounded cursor-pointer"
            >
              Batal
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default EditPembayaran;
