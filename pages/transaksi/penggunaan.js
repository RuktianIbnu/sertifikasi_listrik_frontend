import { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { axiosGeneral, errorHandler } from "../../helpers/global";
import loadable from "@loadable/component";
const AddPenggunaan = loadable(() =>
  import("../../components/penggunaan/AddPenggunaan")
);
const EditPenggunaan = loadable(() =>
  import("../../components/penggunaan/EditPenggunaan")
);

function Penggunaan() {
  const [penggunaan, setPenggunaan] = useState([]);
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Pagination
  const takeSize = 10;
  const [total, setTotal] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");
  const sort = "";

  useEffect(() => {
    fetchPenggunaan();
  }, [search, showAdd, showEdit, activePage]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const fetchPenggunaan = async () => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.get("/resources/penggunaan", {
        headers,
        params: {
          page: activePage,
          limit: takeSize,
          search,
          // sort,
        },
      });

      setPenggunaan([]);
      const { status, data } = response;
      if (status === 200) {
        setPenggunaan(data.data);
        setTotal(data.pagination.total_entries);
        // console.log(data.pagination.total_entries)
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  const deletePenggunaan = async (id_penggunaan) => {
    try {
      const headers = {
        Authorization: accessToken,
      };
      const response = await axiosGeneral.delete(
        `/resources/penggunaan/${id_penggunaan}`,
        {
          headers,
        }
      );
      const { status } = response;
      if (status === 200) {
        addToast("Berhasil hapus penggunaan", { appearance: "success" });
        fetchPenggunaan();
      }
    } catch (error) {
      addToast(errorHandler(error), { appearance: "error" });
    }
  };

  return (
    <div className="my-10 px-10">
      {showAdd ? (
        <AddPenggunaan show={showAdd} setShow={(val) => setShowAdd(val)} />
      ) : showEdit ? (
        <EditPenggunaan
          id={selectedId}
          show={showEdit}
          setShow={(val) => setShowEdit(val)}
        />
      ) : (
        <div>
          <div className="bg-white shadow w-full rounded px-6 py-10">
            <h1 className="font-bold text-2xl text-black mb-20">
              Data Penggunaan
            </h1>
            <div className="flex flex-row justify-between items-center mt-4 mb-8">
              <ButtonAdd onClick={() => setShowAdd(!showAdd)}>
                Data Baru
              </ButtonAdd>
            </div>
            <div className="flex flex-row break-normal items-center border-b-2 px-3 py-2">
              <p className="text-sm mr-2 mb-0 font-bold w-20">#</p>
              <p className="text-sm mr-2 mb-0 font-bold w-11/12">Pelanggan</p>
              <p className="text-sm mr-2 mb-0 font-bold w-11/12">Bulan</p>
              <p className="text-sm mr-2 mb-0 font-bold w-11/12">Tahun</p>
              <p className="text-sm mr-2 mb-0 font-bold w-11/12">Meter Awal</p>
              <p className="text-sm mr-2 mb-0 font-bold w-11/12">Meter Akhir</p>
              <p className="text-sm font-bold ml-6 mb-0" />
            </div>
            {penggunaan.map((item, index) => (
              <div
                key={index}
                style={{ background: index % 2 === 0 ? "#E7E7E7" : "#F3F3F3" }}
                className="flex flex-row break-normal py-2 px-3 items-center hover:opacity-80"
              >
                <p className="text-sm mr-2 mb-0 w-20">{index + 1}</p>
                <p className="text-sm mr-2 mb-0 w-11/12">{item.id_penggunaan}</p>
                <p className="text-sm mr-2 mb-0 w-11/12">{item.bulan}</p>
                <p className="text-sm mr-2 mb-0 w-11/12">{item.tahun}</p>
                <p className="text-sm mr-2 mb-0 w-11/12">{item.meter_awal}</p>
                <p className="text-sm mr-2 mb-0 w-11/12">{item.meter_akhir}</p>
                <div className="flex flex-row justify-end ml-6">
                  <i
                    style={{ color: "#6F6F6F" }}
                    onClick={() => {
                      setSelectedId(item.id_penggunaan);
                      setShowEdit(!showEdit);
                    }}
                    className="material-icons cursor-pointer mr-4"
                  >
                    edit
                  </i>
                  <i
                    onClick={() => {
                      if (
                        window.confirm(
                          `Yakin hapus ` + item.id_pelanggan + ` ?`
                        )
                      ) {
                        deletePenggunaan(item.id_penggunaan);
                      }
                    }}
                    style={{ color: "#6F6F6F" }}
                    className="material-icons cursor-pointer"
                  >
                    delete
                  </i>
                </div>
              </div>
            ))}
            <div className="w-full mt-8 flex flex-row justify-end items-end">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={takeSize}
                totalItemsCount={total}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass="bg-blue-100 py-2 px-4 mx-1 rounded font-bold"
                linkClass="text-gray-700 hover:no-underline hover:text-gray-700"
                hideFirstLastPages={true}
                prevPageText={
                  <i style={{ color: "#6F6F6F" }} className="material-icons">
                    arrow_back
                  </i>
                }
                nextPageText={
                  <i style={{ color: "#6F6F6F" }} className="material-icons">
                    arrow_forward
                  </i>
                }
                activeClass="bg-blue-400"
                activeLinkClass="text-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ButtonAdd = styled.div`
  font-size: 14px;
  background: #4361ee;
  color: #fff;
  padding: 10px 23px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`;

export default Penggunaan;
