import React from "react";
import MainLayout from "../../components/MainLayout";
import Head from "next/head";
import styled from "styled-components";
import {
  PieChart,
  Pie,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/actionCreator";
import { CircularProgressbar } from "react-circular-progressbar";

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 15px 23px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
`;
const Dropdown = styled.select`
  border-radius: 10px;
  background: #f0f0f0;
  padding: 5px 12px;
  font-size: 16px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const InputFilter = styled.input`
  border-radius: 10px;
  background: #f0f0f0;
  padding: 5px 12px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export default function Dashboard() {
  const dispatch = useDispatch();

  const barChartData = [
    {
      name: "Januari",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
    {
      name: "Februari",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
    {
      name: "Maret",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
    {
      name: "April",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
    {
      name: "Mei",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
    {
      name: "Juni",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
    {
      name: "Juli",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
    {
      name: "Agustus",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
    {
      name: "September",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
    {
      name: "Oktober",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
    {
      name: "November",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
    {
      name: "Desember",
      "Sekretariat Direktorat Jenderal Imigrasi": 4000,
      "Direktorat Lalu Lintas Keimigrasian": 2100,
      "Direktorat Izin Tinggal Keimigrasian": 3400,
      "Direktorat Intelijen Keimigrasian": 2200,
      "Direktorat Pengawasan dan Penindakan Keimigrasian": 2500,
      "Direktorat Kerja Sama Keimigrasian": 2800,
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": 2600,
    },
  ];
  const lineChartData = [
    {
      name: "Januari",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.3",
      "Direktorat Lalu Lintas Keimigrasian": "3.5",
      "Direktorat Izin Tinggal Keimigrasian": "2.2",
      "Direktorat Intelijen Keimigrasian": "4",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.4",
      "Direktorat Kerja Sama Keimigrasian": "2.4",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.1",
    },
    {
      name: "Februari",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.2",
      "Direktorat Lalu Lintas Keimigrasian": "3.2",
      "Direktorat Izin Tinggal Keimigrasian": "2.3",
      "Direktorat Intelijen Keimigrasian": "3.9",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.1",
      "Direktorat Kerja Sama Keimigrasian": "2",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.5",
    },
    {
      name: "Maret",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.4",
      "Direktorat Lalu Lintas Keimigrasian": "3.4",
      "Direktorat Izin Tinggal Keimigrasian": "2.4",
      "Direktorat Intelijen Keimigrasian": "2",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.8",
      "Direktorat Kerja Sama Keimigrasian": "2.6",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.9",
    },
    {
      name: "April",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.2",
      "Direktorat Lalu Lintas Keimigrasian": "3.6",
      "Direktorat Izin Tinggal Keimigrasian": "2.4",
      "Direktorat Intelijen Keimigrasian": "2",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.6",
      "Direktorat Kerja Sama Keimigrasian": "2.4",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.3",
    },
    {
      name: "Mei",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.2",
      "Direktorat Lalu Lintas Keimigrasian": "3.2",
      "Direktorat Izin Tinggal Keimigrasian": "2.6",
      "Direktorat Intelijen Keimigrasian": "1",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.65",
      "Direktorat Kerja Sama Keimigrasian": "2.4",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.2",
    },
    {
      name: "Juni",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.3",
      "Direktorat Lalu Lintas Keimigrasian": "3.5",
      "Direktorat Izin Tinggal Keimigrasian": "2.2",
      "Direktorat Intelijen Keimigrasian": "4",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.4",
      "Direktorat Kerja Sama Keimigrasian": "2.4",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.1",
    },
    {
      name: "Juli",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.3",
      "Direktorat Lalu Lintas Keimigrasian": "3.5",
      "Direktorat Izin Tinggal Keimigrasian": "2.2",
      "Direktorat Intelijen Keimigrasian": "4",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.4",
      "Direktorat Kerja Sama Keimigrasian": "2.4",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.1",
    },
    {
      name: "Agustus",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.3",
      "Direktorat Lalu Lintas Keimigrasian": "3.5",
      "Direktorat Izin Tinggal Keimigrasian": "2.2",
      "Direktorat Intelijen Keimigrasian": "4",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.4",
      "Direktorat Kerja Sama Keimigrasian": "2.4",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.1",
    },
    {
      name: "September",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.3",
      "Direktorat Lalu Lintas Keimigrasian": "3.5",
      "Direktorat Izin Tinggal Keimigrasian": "2.2",
      "Direktorat Intelijen Keimigrasian": "4",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.4",
      "Direktorat Kerja Sama Keimigrasian": "2.4",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.1",
    },
    {
      name: "Oktober",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.3",
      "Direktorat Lalu Lintas Keimigrasian": "3.5",
      "Direktorat Izin Tinggal Keimigrasian": "2.2",
      "Direktorat Intelijen Keimigrasian": "4",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.4",
      "Direktorat Kerja Sama Keimigrasian": "2.4",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.1",
    },
    {
      name: "November",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.3",
      "Direktorat Lalu Lintas Keimigrasian": "3.5",
      "Direktorat Izin Tinggal Keimigrasian": "2.2",
      "Direktorat Intelijen Keimigrasian": "4",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.4",
      "Direktorat Kerja Sama Keimigrasian": "2.4",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.1",
    },
    {
      name: "Desember",
      "Sekretariat Direktorat Jenderal Imigrasi": "1.3",
      "Direktorat Lalu Lintas Keimigrasian": "3.5",
      "Direktorat Izin Tinggal Keimigrasian": "2.2",
      "Direktorat Intelijen Keimigrasian": "4",
      "Direktorat Pengawasan dan Penindakan Keimigrasian": "3.4",
      "Direktorat Kerja Sama Keimigrasian": "2.4",
      "Direktorat Sistem dan Teknologi Informasi Keimigrasian": "1.1",
    },
  ];

  const barVerticalData = [
    { name: "Sekretariat Direktorat Jenderal Imigrasi", nilai: 3.6 },
    { name: "Direktorat Lalu Lintas Keimigrasian", nilai: 2.8 },
    { name: "Direktorat Izin Tinggal Keimigrasian", nilai: 3.5 },
    { name: "Direktorat Intelijen Keimigrasian", nilai: 4 },
    { name: "Direktorat Pengawasan dan Penindakan Keimigrasian", nilai: 3.36 },
    { name: "Direktorat Kerja Sama Keimigrasian", nilai: 3.15 },
    { name: "Direktorat Sistem dan Teknologi Informasi Keimigrasian", nilai: 1 },
  ];
  return (
    <div>
      <Head>
        <title>Dashboard - E-Survey</title>
      </Head>
      <MainLayout>
        <div className="pt-10 px-8">
          <div className="grid grid-cols-2 gap-4">
            <Dropdown>
              <option>Nice</option>
            </Dropdown>
            <InputFilter placeholder="Filter nama instansi" />
          </div>
          <Card className="mt-6">
            <div className="flex flex-row">
              <div className="w-4/5">
                <h1 className="text-2xl font-bold">Index Aktif Direktorat</h1>
                <p className="font-nunito text-gray-500">
                  Berdasarkan jumlah kegiatan survey{" "}
                </p>
              </div>
              <div className="w-1/5">
                <Dropdown>
                  <option>Tahun 2020</option>
                </Dropdown>
              </div>
            </div>
            <ResponsiveContainer height={450}>
              <BarChart
                data={barChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend iconType="square" verticalAlign="bottom" />
                <Bar
                  dataKey="Sekretariat Direktorat Jenderal Imigrasi"
                  fill="#8884d8"
                />
                <Bar
                  dataKey="Direktorat Lalu Lintas Keimigrasian"
                  fill="#82ca9d"
                />
                <Bar
                  dataKey="Direktorat Izin Tinggal Keimigrasian"
                  fill="#8884d8"
                />
                <Bar
                  dataKey="Direktorat Intelijen Keimigrasian"
                  fill="#82ca9d"
                />
                <Bar
                  dataKey="Direktorat Pengawasan dan Penindakan Keimigrasian"
                  fill="#8884d8"
                />
                <Bar
                  dataKey="Direktorat Kerja Sama Keimigrasian"
                  fill="#82ca9d"
                />
                <Bar
                  dataKey="Direktorat Sistem dan Teknologi Informasi Keimigrasian"
                  fill="#82ca9d"
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Card className="col-span-2">
              <div className="flex flex-row">
                <div className="w-4/5">
                  <h1 className="text-2xl font-bold">
                    Index Persentase Survey Direktorat
                  </h1>
                  <p className="font-nunito text-gray-500">
                    Berdasarkan hasil survey keseluruhan
                  </p>
                </div>
                <div className="w-1/5">
                  <Dropdown>
                    <option>Tahun 2020</option>
                  </Dropdown>
                </div>
              </div>
              <ResponsiveContainer height={450}>
                <LineChart
                  data={lineChartData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="natural"
                    dataKey="Sekretariat Direktorat Jenderal Imigrasi"
                    stroke="#8884d8"
                  />
                  <Line
                    type="monotone"
                    dataKey="Direktorat Lalu Lintas Keimigrasian"
                    stroke="#82ca9d"
                  />
                  <Line
                    type="monotone"
                    dataKey="Direktorat Izin Tinggal Keimigrasian"
                    stroke="#8884d8"
                  />
                  <Line
                    type="monotone"
                    dataKey="Direktorat Intelijen Keimigrasian"
                    stroke="#82ca9d"
                  />
                  <Line
                    type="monotone"
                    dataKey="Direktorat Pengawasan dan Penindakan Keimigrasian"
                    stroke="#82ca9d"
                  />
                  <Line
                    type="monotone"
                    dataKey="Direktorat Kerja Sama Keimigrasian"
                    stroke="#82ca9d"
                  />
                  <Line
                    type="monotone"
                    dataKey="Direktorat Sistem dan Teknologi Informasi Keimigrasian"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
            <Card className="text-center">
              <ResponsiveContainer>
                <BarChart
                  data={barVerticalData}
                  layout="vertical"
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>

                  <XAxis type="number" hide />
                  <Tooltip />
                  <Legend />
                  <YAxis
                    type="category"
                    dataKey="name"
                    hide
                  />

                  <Bar
                    dataKey="nilai"
                    fill="#9b5de5"
                  />

                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
          <div className="py-4">
            {[1, 2, 3].map((n) => {
              const percentage = Math.floor(Math.random() * 100) + 1;
              return (
                <Card className="my-4" key={n}>
                  <div className="flex flex-row p-4">
                    <div className="w-48">
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                      />
                    </div>
                    <div className="flex flex-row justify-between w-full ml-10">
                      <div>
                        <p className="font-semibold text-lg">
                          Index Kepuasan Internal
                        </p>
                        <p className="text-gray-500">
                          Index Kepuasan Internal berdasarkan ...
                        </p>
                      </div>
                      <div>
                        <p className="text-blue-500">Detail</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
