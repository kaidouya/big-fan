import React, { memo } from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';

const Writing02Table = styled(Table).attrs({
  bordered: false,
  hover: true,
  responsive: true,
  className: `text-center`,
})`
  border-collapse: separate;
  thead th,
  tbody td {
    vertical-align: middle;
    font-size: 0.9em;
    background: rgba(232, 246, 246, 1);
    border: none;
  }
`;

const Writing03Table = styled(Table).attrs({
  bordered: false,
  striped: true,
  hover: true,
  responsive: true,
  className: `text-center`,
})`
  border-collapse: separate;
  thead th {
    vertical-align: middle;
    font-size: 0.9em;
    background: rgb(62, 204, 203);
    border: none;
  }
  tbody td {
    vertical-align: middle;
    font-size: 0.9em;
    border: none;
  }
  tbody tr {
    :nth-child(odd) {
      > td {
        background: rgb(206, 236, 236);
      }
    }
    :nth-child(even) {
      > td {
        background: rgb(232, 246, 246);
      }
    }
  }
`;

function writing01() {
  return (
    <>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>比較項目</th>
            <th>直徑7.2m永磁直驅大風機</th>
            <th>直徑7.2m電機加減速箱大風機</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>驅動系統</td>
            <td>永磁直驅電機</td>
            <td>感應電機+齒減速箱</td>
          </tr>
          <tr>
            <td>額定功率</td>
            <td>0.88KW</td>
            <td>1.5KW</td>
          </tr>
          <tr>
            <td>吊掛重量</td>
            <td>86KG</td>
            <td>115KG</td>
          </tr>
          <tr>
            <td>電機體積</td>
            <td>直徑320mm*厚度170mm</td>
            <td>寬度380mm*高度1100mm</td>
          </tr>
          <tr>
            <td>設備安裝高度</td>
            <td>500mm</td>
            <td>1300mm</td>
          </tr>
          <tr>
            <td>電機防護等級</td>
            <td>IP64(防水、防塵)</td>
            <td>IP55</td>
          </tr>
          <tr>
            <td>噪音</td>
            <td>小於38db</td>
            <td>大於60db</td>
          </tr>
          <tr>
            <td>壽命</td>
            <td>10年</td>
            <td>5年</td>
          </tr>
          <tr>
            <td>維護</td>
            <td>永磁直驅電機免維護</td>
            <td>>維護</td>
          </tr>
        </tbody>
      </Table>
      <h5 className="text-right">Green Fast Transmission Co.,Ltd.</h5>
    </>
  );
}

function writing02() {
  return (
    <>
      <Writing02Table>
        <thead>
          <tr>
            <th>
              型號
              <br /> Model
            </th>
            <th>HVD-B7200</th>
            <th>HVD-B6700</th>
            <th>HVD-B6200</th>
            <th>HVD-B5200</th>
            <th>HVD-S4200</th>
            <th>HVD-S3600</th>
            <th>HVD-S3000</th>
            <th>HVD-S2500</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              直徑
              <br /> Diameter
            </td>
            <td>
              7.2M
              <br /> (24ft)
            </td>
            <td>
              6.7M
              <br /> (22ft)
            </td>
            <td>
              6.2M
              <br /> (20ft)
            </td>
            <td>
              5.2M
              <br /> (17ft)
            </td>
            <td>
              4.2M
              <br /> (14ft)
            </td>
            <td>
              3.6M
              <br /> (12ft)
            </td>
            <td>
              3.0M
              <br /> (10ft)
            </td>
            <td>
              2.5M
              <br /> (8ft)
            </td>
          </tr>
          <tr>
            <td>
              扇葉數量
              <br /> Blades Qty
            </td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>
              重量
              <br /> Weight
            </td>
            <td>109KG</td>
            <td>105KG</td>
            <td>100KG</td>
            <td>96KG</td>
            <td>64KG</td>
            <td>62KG</td>
            <td>60KG</td>
            <td>58KG</td>
          </tr>
          <tr>
            <td>
              功率
              <br /> Power
            </td>
            <td>0.88KW</td>
            <td>0.88KW</td>
            <td>0.88KW</td>
            <td>0.88KW</td>
            <td>0.66KW</td>
            <td>0.66KW</td>
            <td>0.66KW</td>
            <td>0.66KW</td>
          </tr>
          <tr>
            <td>
              最大轉速
              <br /> Max Speed
            </td>
            <td>50RPM</td>
            <td>55RPM</td>
            <td>60RPM</td>
            <td>70RPM</td>
            <td>80RPM</td>
            <td>90RPM</td>
            <td>100RPM</td>
            <td>120RPM</td>
          </tr>
          <tr>
            <td>
              最大風量
              <br /> Max Air volume
            </td>
            <td>14860m3/min</td>
            <td>13700m3/min</td>
            <td>12360m3/min</td>
            <td>10830m3/min</td>
            <td>7900m3/min</td>
            <td>7300m3/min</td>
            <td>5800m3/min</td>
            <td>4900m3/min</td>
          </tr>
          <tr>
            <td rowspan="2">
              輸入電壓
              <br /> Power Supply
            </td>
            <td>單相 220V</td>
            <td>單相 220V</td>
            <td>單相 220V</td>
            <td>單相 220V</td>
            <td>單相 220V</td>
            <td>單相 220V</td>
            <td>單相 220V</td>
            <td>單相 220V</td>
          </tr>
          <tr>
            <td>三相 380V</td>
            <td>三相 380V</td>
            <td>三相 380V</td>
            <td>三相 380V</td>
            <td>三相 380V</td>
            <td>三相 380V</td>
            <td>三相 380V</td>
            <td>三相 380V</td>
          </tr>
          <tr>
            <td>
              額定電流
              <br /> Max Current(Amps)
            </td>
            <td>3.0A/2.2A</td>
            <td>3.0A/2.2A</td>
            <td>3.0A/2.2A</td>
            <td>2.6A/2.2A</td>
            <td>2.2A/1.8A</td>
            <td>2.2A/1.8A</td>
            <td>2.2A/1.8A</td>
            <td>2.2A/1.8A</td>
          </tr>
          <tr>
            <td>
              噪音等級
              <br /> Noise level
            </td>
            <td>&lt;39db</td>
            <td>&lt;39db</td>
            <td>&lt;39db</td>
            <td>&lt;39db</td>
            <td>&lt;38db</td>
            <td>&lt;38db</td>
            <td width="65">&lt;38db</td>
            <td width="65">&lt;38db</td>
          </tr>
          <tr>
            <td width="95">
              安裝高度
              <br /> Installation height
            </td>
            <td width="65">7.5~8.0</td>
            <td width="65">7.5~8.0</td>
            <td width="65">7.5~8.0</td>
            <td width="65">6.0</td>
            <td width="65">6.0</td>
            <td width="65">4.0~5.0</td>
            <td width="65">4.0~5.0</td>
            <td width="65">4.0</td>
          </tr>
          <tr>
            <td width="95">
              覆蓋範圍
              <br /> Area Covered
            </td>
            <td width="65">&Phi;38-43m</td>
            <td width="65">&Phi;35-40m</td>
            <td width="65">&Phi;32-37m</td>
            <td width="65">&Phi;25-30m</td>
            <td width="65">&Phi;22-26m</td>
            <td width="65">&Phi;20-24m</td>
            <td width="65">&Phi;18-20m</td>
            <td width="65">&Phi;15-18m</td>
          </tr>
        </tbody>
      </Writing02Table>
      <h5 className="text-right">Green Fast Transmission Co.,Ltd.</h5>
    </>
  );
}

function writing03() {
  return (
    <>
      <Writing03Table>
        <thead>
          <tr>
            <th>額定功率</th>
            <th>P =0.88kW</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>額定轉速</td>
            <td>N=60 rpm</td>
          </tr>
          <tr>
            <td>額定轉矩</td>
            <td>Mn=140 Nm</td>
          </tr>
          <tr>
            <td>額定電流</td>
            <td>In-1.8A</td>
          </tr>
          <tr>
            <td>額定頻率</td>
            <td>F=33Hz</td>
          </tr>
          <tr>
            <td>峰值轉矩</td>
            <td>Mmax=400 Nm</td>
          </tr>
          <tr>
            <td>峰值電流</td>
            <td>I Max=5.1A</td>
          </tr>
          <tr>
            <td>轉矩常數</td>
            <td>Kt=77.8 Nm/A</td>
          </tr>
          <tr>
            <td>反電勢</td>
            <td>Ke=306 V</td>
          </tr>
          <tr>
            <td>防護等級</td>
            <td>IP65</td>
          </tr>
        </tbody>
      </Writing03Table>
      <h5 className="text-right">Green Fast Transmission Co.,Ltd.</h5>
    </>
  );
}

const WritingTable = memo(({ label }) => {
  console.log(label);

  switch (label) {
    case 'writing-01':
      return writing01();
    case 'writing-02':
      return writing02();
    case 'writing-03':
      return writing03();
    default:
      break;
  }
});

export default WritingTable;
