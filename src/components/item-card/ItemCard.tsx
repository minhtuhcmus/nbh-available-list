import React from 'react';
import "./style.css";
import {IItemDetail} from "../../interface/item/item";

function ItemCard({itemDetail}: { itemDetail: IItemDetail }) {
  return (
    <div className={`item-card-wrapper ${itemDetail.name === 'dump' ? 'hide' : ''}`}>
      <div className="item-name">
        {itemDetail.name.toLocaleUpperCase("vn")}
      </div>
      <div className="item-detail-info">
        <div className="item-image">
          <img src={`https://drive.google.com/uc?export=view&id=${itemDetail.images?.slice(32, 65)}`} alt="item-avatar"/>
        </div>
        <div className="item-info">
          <div className="item-price item-detail">
            <div className="info-title">Giá:{` ${itemDetail.price}`}</div>
            {/* <div className="info-detail"></div> */}
          </div>
          <div className="item-origin item-detail">
            <div className="info-title">Xuất xứ:{` ${itemDetail.origin}`}</div>
            {/* <div className="info-detail">{itemDetail.origin}</div> */}
          </div>
          <div className="item-length item-detail">
            <div className="info-title">Chiều dài:{` ${itemDetail.length}`}</div>
            {/* <div className="info-detail">{itemDetail.length}</div> */}
          </div>
          <div className="item-packaging item-detail">
            <div className="info-title">Quy cách:{` ${itemDetail.packaging}`}</div>
            {/* <div className="info-detail">{itemDetail.packaging}</div> */}
          </div>
          <div className="item-orderby item-detail">
            <div className="info-title">Đặt theo SL:{` ${itemDetail.orderBy}`}</div>
            {/* <div className="info-detail">{itemDetail.orderBy}</div> */}
          </div>
          <div className="item-note item-detail">
            <div className="info-title">Ghi chú:{` ${itemDetail.note}`}</div>
            {/* <div className="info-detail">{itemDetail.note}</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;