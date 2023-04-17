import React from 'react';
import './App.css';
import ItemCard from "./components/item-card/ItemCard";
import {IItemDetail} from "./interface/item/item";
import {PDFDownloadLink} from "@react-pdf/renderer";
import MyDoc from './components/item-doc/ItemDoc';
import image from '../src/312095626_183699880846538_4598999123411653372_n.jpg';
const itemDetails:IItemDetail[] = [
  {
    available: 10,
    color: "Hồng",
    id: 0,
    images: image,
    length: ["30cm"],
    name: "Hoa Đồng tiền",
    origin: "Việt Nam",
    packaging: 10,
    price: "100.000đ"
  },
  {
    available: 10,
    color: "Hồng",
    id: 0,
    images: image,
    length: ["30cm"],
    name: "Hoa Đồng tiền",
    origin: "Việt Nam",
    packaging: 10,
    price: "100.000đ"
  },
  {
    available: 10,
    color: "Hồng",
    id: 0,
    images: image,
    length: ["30cm"],
    name: "Hoa Đồng tiền",
    origin: "Việt Nam",
    packaging: 10,
    price: "100.000đ"
  },
  {
    available: 10,
    color: "Hồng",
    id: 0,
    images: image,
    length: ["30cm"],
    name: "Hoa Đồng tiền",
    origin: "Việt Nam",
    packaging: 10,
    price: "100.000đ"
  },
  {
    available: 10,
    color: "Hồng",
    id: 0,
    images: image,
    length: ["30cm"],
    name: "Hoa Đồng tiền",
    origin: "Việt Nam",
    packaging: 10,
    price: "100.000đ"
  }
]

function App() {
  return (
    <div className="App">
      <div className="viewer">
        {itemDetails.map(info => <ItemCard itemDetail={info}/>)}
      </div>
      <PDFDownloadLink document={<MyDoc  itemDetails={itemDetails}/>} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  );
}

export default App;
