import React from "react"
import styled from "styled-components"

const AboutUl = styled.ul`
  padding: 0;
  list-style-type: none;
  > li:before {
    content: "★";
  }
  > li {
    line-height: 2.5em;
  }
`

const AboutText = () => {
  return (
    <AboutUl>
      <li>
        HVLS(High Volume–Low Speed)，低速節能風機，是一種直徑達7.3米的巨大吊扇，
        能有效率的產生大量的空氣流動，產生超大風量，而轉速僅需50rpm，在環境中產生循環氣流場，
        是目前其他設備所不能比擬的。
      </li>
      <li>
        應用空氣動力學原理所設計流線型扇葉，僅用1.5KW或更小的功率就可以驅動電機，產
        生超大面積的自然風系統，起到通風和降溫的雙重功能。比起傳統的空調和小型的高速
        風機，它有無可比擬的應用優勢，堪稱大空間通風降溫的完美解決方案。
      </li>
      <li>
        整體設計經過精確計算，產生最符合人體感受的通風效果。風速均勻柔和，覆蓋面積
        大。在實際應用中，給人體帶來的通風降溫感受達5-8℃。每台風扇最大運行功率僅為
        1.5KW，每天運行8小時最多只需36元(按工業用電3元/KWh計算)。產品美觀，耐用，免
        維護，給您帶來通風和降溫的雙重功效。👍
      </li>
    </AboutUl>
  )
}

export default AboutText
