import React, {useRef, useState} from 'react';
import './App.css';
import ItemCard from "./components/item-card/ItemCard";
import {IItemDetail} from "./interface/item/item";
import { useReactToPrint } from "react-to-print";

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

  const componentRef = useRef(null);
  const onBeforeGetContentResolve = useRef(null);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("old boring text");

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called"); // tslint:disable-line no-console
    setLoading(true);
    setText("Loading new text...");

    return new Promise<void>((resolve) => {
      // @ts-ignore
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, []);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    onBeforeGetContent: handleOnBeforeGetContent,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true
  });

  return (
    <div className="App">
      {loading && <p className="indicator">Loading...</p>}
      <button onClick={handlePrint}>
        Get PDF
      </button>
      <div className="viewer" ref={componentRef}>
        {itemDetails.map(info => <ItemCard itemDetail={info}/>)}
      </div>
      {/*<PDFDownloadLink document={<MyDoc  itemDetails={itemDetails}/>} fileName="somename.pdf">*/}
      {/*  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}*/}
      {/*</PDFDownloadLink>*/}
    </div>
  );
}

export default App;
