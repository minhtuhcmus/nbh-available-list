import {Document, Page, StyleSheet, View, Text, Image, Font } from "@react-pdf/renderer";
import {IItemDetail} from "../../interface/item/item";

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontFamily: 'Roboto'
  },
  card: {
    width: '24%',
    flexDirection: 'column',
    margin: '0.5%',
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

function getPageContent({itemDetails}: {itemDetails: IItemDetail[]}) {
  return itemDetails.map(info => <View style={styles.card}>
    <View style={styles.name}>
      <Text>{info.name.toLocaleUpperCase("vn")}</Text>
    </View>
    <View style={styles.imageAndInfo}>
      <View style={styles.image}>
        <Image style={styles.img} src={info.images}></Image>
      </View>
      <View style={styles.info}>
        <View style={styles.infoDetail}>
          <Text style={styles.title}>Giá</Text>
          <Text style={[styles.detail, {fontWeight: 'black'}]}>{info.price}</Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.title}>Hiện có</Text>
          <Text style={styles.detail}>{info.available}</Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.title}>Quy cách</Text>
          <Text style={styles.detail}>{info.packaging}</Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.title}>Màu sắc</Text>
          <Text style={styles.detail}>{info.color}</Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.title}>Xuất xứ</Text>
          <Text style={styles.detail}>{info.origin}</Text>
        </View>
        <View style={styles.infoDetail}>
          <Text style={styles.title}>Độ dài</Text>
          <Text style={styles.detail}>{info.length}</Text>
        </View>
      </View>
    </View>
  </View>)
}

function MyDoc ({itemDetails}: {itemDetails: IItemDetail[]}) {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page} wrap>
        {}
      </Page>
    </Document>
  )
}

export default MyDoc;