import React, {useRef, useState} from 'react';
import './App.css';
import ItemCard from "./components/item-card/ItemCard";
import {IItemDetail} from "./interface/item/item";
import { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx";
import logo_img from "../src/assets/logo.png";

function Page({itemDetails, index, date}: {itemDetails:IItemDetail[], index: number, date: string}) {
  return (
    <div className="page">
      <div className="page-header">
        <img className="logo" src={logo_img} alt="logo"></img>
        <div>BẢNG GIÁ HOA SỈ {date}</div>
      </div>
      <div className="page-content">
        {
          itemDetails.map(info => <ItemCard itemDetail={info}/>)
        }
      </div>
      <div className="page-footer">{index+1}</div>
    </div>
  )
}

const dumpItem:IItemDetail = {
  available: 0,
  color: "",
  images: "",
  length: "",
  name: "dump",
  note: "",
  orderBy: "",
  origin: "",
  packaging: 0,
  price: ""
}

function App() {

  const componentRef = useRef(null);
  const [itemDetails, setItemDetails] = useState<IItemDetail[]>([]);
  const [date, setDate] = useState('');

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  }, []);

  // const handleOnBeforeGetContent = React.useCallback(() => {
  //   console.log("`onBeforeGetContent` called"); // tslint:disable-line no-console
  //   setLoading(true);
  //   setText("Loading new text...");
  //
  //   return new Promise<void>((resolve) => {
  //     // @ts-ignore
  //     onBeforeGetContentResolve.current = resolve;
  //
  //     setTimeout(() => {
  //       setLoading(false);
  //       setText("New, Updated Text!");
  //       resolve();
  //     }, 2000);
  //   });
  // }, [setLoading, setText]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, []);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true
  });

  const perPage = 16

  const getPageContent = () => {
    let pageNum = Math.ceil(itemDetails.length/perPage);
    let pagesData = new Array(pageNum);
    for (let i = 0; i < pageNum; i++) {
      pagesData[i] = itemDetails.slice(i*perPage, (i+1)*perPage)
      if (pagesData[i].length < perPage) {
        let needed = perPage - pagesData[i].length;
        for (let j = 0; j < needed; j++){
          pagesData[i].push(dumpItem)
        }
      }
      console.log(i, pagesData)
    }
    return pagesData.map((pageData, index) => <Page itemDetails={pageData} index={index} date={date}/>)
  }

  const readUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        console.log(e.target?.result)
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json:IItemDetail[] = XLSX.utils.sheet_to_json(worksheet);
        console.log(json);
        setItemDetails(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  return (
    <div className="App">
      <div className="handler">
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={(e) => readUploadFile(e)}
        />
        <input
          type="text"
          onChange={e => setDate(e.target.value)}
        />
        <button onClick={handlePrint}>
          Get PDF
        </button>
      </div>
      <div className="viewer" ref={componentRef}>
        {getPageContent()}
      </div>
      {/*<PDFDownloadLink document={<MyDoc  itemDetails={itemDetails}/>} fileName="somename.pdf">*/}
      {/*  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}*/}
      {/*</PDFDownloadLink>*/}
    </div>
  );
}

export default App;
