import React from 'react';
import "./style.css";
import {IItemDetail} from "../../interface/item/item";

function ItemCard({itemDetail}: {itemDetail: IItemDetail}) {
  return (
    <div className="item-card-wrapper">
      <div className="item-name">
        {itemDetail.name.toLocaleUpperCase("vn")}
      </div>
      <div className="item-detail-info">
        <div className="item-image">
          <img src={itemDetail.images}/>
        </div>
        <div className="item-info">
          <div className="item-price item-detail">
            <div className="info-title">Giá</div>
            <div className="info-detail">{itemDetail.price}</div>
          </div>
          <div className="item-available item-detail">
            <div className="info-title">Hiện có</div>
            <div className="info-detail">{itemDetail.available}</div>
          </div>
          <div className="item-packaging item-detail">
            <div className="info-title">Quy cách</div>
            <div className="info-detail">{itemDetail.packaging}</div>
          </div>
          <div className="item-color item-detail">
            <div className="info-title">Màu sắc</div>
            <div className="info-detail">{itemDetail.color}</div>
          </div>
          <div className="item-origin item-detail">
            <div className="info-title">Xuất xứ</div>
            <div className="info-detail">{itemDetail.origin}</div>
          </div>
          <div className="item-length item-detail">
            <div className="info-title">Độ dài</div>
            <div className="info-detail">{itemDetail.length}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;