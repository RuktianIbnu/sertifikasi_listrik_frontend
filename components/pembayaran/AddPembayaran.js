import Select from "react-select";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { axiosGeneral, errorHandler } from "../../helpers/global";
import { useToasts } from "react-toast-notifications";
import moment from "moment";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px 4px rgba(0, 0, 0, 0.25);
`;

function AddPembayaran({ show, setShow }) {
  const accessToken = useSelector((state) => state.accessToken);
  const user = useSelector((state) => state.user);
  const { addToast } = useToasts();
  const [tagihanOption, setTagihanOption] = useState([]);

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

  const [idTagihan, setIdTagihan] = useState([]);
  const [idPelanggan, setIdPelanggan] = useState([]);
  const [idPenggunaan, setIdPenggunaan] = useState([]);

  useEffect(() => {
    fetchTagihan();
    setTotalBiaya(biaya + parseInt(biayaAdmin));
  }, [biayaAdmin]);

  const clear = async () => {
    setNomorKwh("");
    setNamaPelanggan("");
    setStatus("");
    setMeterAwal("");
    setMeterAkhir("");
    setBulan("");
    setTahun("");
    setPenggunaanKwh("");
    setTarif("");
    setBiaya(0);
    setBiayaAdmin(0);
    setTotalBiaya(0);
  };

  const getDataTagihanById = async (id_tagihan) => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const response = await axiosGeneral.get(
        `/resources/tagihan/${id_tagihan}`,
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

        setIdTagihan(data.data.id_tagihan);
        setIdPelanggan(data.data.id_pelanggan);

        setNomorKwh(data.data.pelanggan_detail.nomor_kwh);
        setNamaPelanggan(data.data.pelanggan_detail.nama_pelanggan);
        setStatus(data.data.status);
        setMeterAwal(data.data.penggunaan_detail.meter_awal);
        setMeterAkhir(data.data.penggunaan_detail.meter_akhir);
        setBulan(data.data.bulan);
        setTahun(data.data.tahun);
        setPenggunaanKwh(hasil);
        setTarif(data.data.pelanggan_detail.tarif_detail.tarifperkwh);
        setBiaya(parseInt(biaya));
        setIdPenggunaan(data.data.penggunaan_detail.id_penggunaan);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const fetchTagihan = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const response = await axiosGeneral.get("/resources/tagihan", {
        headers,
        params: {
          start: 0,
          limit: 999,
          search: "Belum Bayar",
        },
      });
      setTagihanOption([]);
      const { status, data } = response;
      if (status === 200) {
        const tagihanArr = [];
        const tagihan = data.data;
        for (const iterator of tagihan) {
          let val = {
            value: iterator.id_tagihan,
            label: iterator.pelanggan_detail.nomor_kwh,
          };
          tagihanArr.push(val);
        }
        setTagihanOption(tagihanArr);
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const createPembayaran = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };

      const body = {
        id_tagihan: idTagihan,
        id_pelanggan: idPelanggan,
        bulan_bayar: bulan,
        biaya_admin: biayaAdmin,
        total_bayar: totalBiaya,
        id_user: user.id_user,
      };

      const response = await axiosGeneral.post(`/resources/pembayaran/${idPenggunaan}/${idTagihan}`, body, {
        headers,
      });
      const { status } = response;
      if (status === 201 || status === 200) {
        setShow(!show);
      }
      addToast("Berhasil simpan data", { appearance: "success" });
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  return (
    <Card className="w-3/4 h-4/5 block mx-auto px-4 my-3">
      <div className="block mx-auto py-4">
        <h1 className="font-bold text-3xl text-black mb-16">
          Tambah Data Pembayaran
        </h1>
        <form>
          <div className="col-span-2 my-4">
            <label htmlFor="email" className="block font-semibold text-sm">
              Tagihan
            </label>
            <Select
              placeholder="Pilih tagihan"
              options={tagihanOption}
              isClearable={true}
              value={tagihanOption.find(
                (v) => v.value === tagihanOption.id_tagihan
              )}
              onChange={(e) => {
                const val = e ? e.value : null;
                if (val === null) {
                  clear();
                } else {
                  getDataTagihanById(val);
                }
              }}
            />
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
                onChange={(e) => setBiaya(e.target.value)}
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
                type="number"
                onChange={(e) => {
                  setBiayaAdmin(e.target.value);
                }}
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
                onChange={(e) => setTotalBiaya(e.target.value)}
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
            <div
              type="submit"
              className="inline-block py-2 text-gray-50 bg-blue-500 
              px-4 text-center w-1/6 rounded font-bold cursor-pointer focus:outline-none"
              onClick={() => {
                createPembayaran()
              }}
            >
              Bayar
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default AddPembayaran;
