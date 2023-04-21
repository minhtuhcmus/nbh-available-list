import {Document, Page, StyleSheet, View, Text, Image, Font } from "@react-pdf/renderer";
import {IItemDetail} from "../../interface/item/item";

Font.register({
  family: "Roboto",
  fonts: [
    {src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'}
  ]  
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontFamily: 'Roboto'
  },
  card: {
    width: '9cm',
    height: '6cm',
    flexDirection: 'column',
    border: '1 solid black'
  },
  name:{
    fontSize: '10',
    textAlign: 'center',
    padding: '6 0 6 0',
    fontWeight: 'black'
  },
  imageAndInfo: {
    flexDirection: 'row',
    width: '100%'
  },
  image: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: '60',
    height: '60',
    objectFit: 'cover'
  },
  info: {
    flexDirection: 'column',
    width: '50%',
    marginBottom: '6'
  },
  infoDetail:{
    flexDirection: 'row',
    width: '100%',
    marginTop: '2'
  },
  title: {
    width: '50%',
    textAlign: 'left',
    fontSize: '6'
  },
  detail: {
    width: '50%',
    textAlign: 'left',
    fontSize: '6'
  }
});

function ItemCard({itemDetail}: {itemDetail:IItemDetail}) {
  return (
    <View style={styles.card}>
        <View style={styles.name}>
          <Text>{itemDetail.name.toLocaleUpperCase("vn")}</Text>
        </View>
      <View style={styles.imageAndInfo}>
        <View style={styles.image}>
          {/* <Image style={styles.img} src={itemDetail.images}></Image> */}
        </View>
        <View style={styles.info}>
          <View style={styles.infoDetail}>
            <Text style={styles.title}>Giá</Text>
            <Text style={[styles.detail, {fontWeight: 'black'}]}>{itemDetail.price}</Text>
          </View>
          <View style={styles.infoDetail}>
            <Text style={styles.title}>Hiện có</Text>
            <Text style={styles.detail}>{itemDetail.available}</Text>
          </View>
          <View style={styles.infoDetail}>
            <Text style={styles.title}>Quy cách</Text>
            <Text style={styles.detail}>{itemDetail.packaging}</Text>
          </View>
          <View style={styles.infoDetail}>
            <Text style={styles.title}>Màu sắc</Text>
            <Text style={styles.detail}>{itemDetail.color}</Text>
          </View>
          <View style={styles.infoDetail}>
            <Text style={styles.title}>Xuất xứ</Text>
            <Text style={styles.detail}>{itemDetail.origin}</Text>
          </View>
          <View style={styles.infoDetail}>
            <Text style={styles.title}>Độ dài</Text>
            <Text style={styles.detail}>{itemDetail.length}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

function MyPage({itemDetails, index, date}: {itemDetails: IItemDetail[], index: number, date: string}) {
  return (
    <Page size="A4" orientation="landscape" style={styles.page}>
      {
        itemDetails.map((itemDetail: IItemDetail) => <ItemCard itemDetail={itemDetail}/>)
      }
    </Page>
  );
}

const perPage = 9

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

function getPageContent(itemDetails: IItemDetail[], date: string) {
  let pageNum = Math.ceil(itemDetails.length/perPage);
  let pagesData = new Array<IItemDetail[]>(pageNum);
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
  return pagesData.map((pageData, index) => <MyPage itemDetails={pageData} index={index} date={date}/>)
}

function MyDoc ({itemDetails, date}: {itemDetails: IItemDetail[], date: string}) {
  return (
    <Document>
      {
        getPageContent(itemDetails, date)
      }
    </Document>
  )
}

export default MyDoc;