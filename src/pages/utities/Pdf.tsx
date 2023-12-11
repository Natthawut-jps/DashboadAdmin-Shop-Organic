import { FunctionComponent } from "react";
import THSarabunNew from './Fonts/THSarabunNew/THSarabunNew.ttf';
import THSarabunNew_Bold from './Fonts/THSarabunNew/THSarabunNew Bold.ttf';
import THSarabunNew_Italic from './Fonts/THSarabunNew/THSarabunNew Italic.ttf';
import THSarabunNew_BoldItalic from './Fonts/THSarabunNew/THSarabunNew BoldItalic.ttf';
import { Document, Page, View, Text, StyleSheet, Font } from "@react-pdf/renderer";

const Pdf: FunctionComponent = () => {
    Font.register({
        family: 'THSarabunNew', fonts: [
            { src: THSarabunNew, fontStyle: 'normal', fontWeight: 400 },
            { src: THSarabunNew_Bold, fontStyle: 'Boldnormal', fontWeight: 700 },
            { src: THSarabunNew_Italic, fontStyle: 'italic', fontWeight: 400 },
            { src: THSarabunNew_BoldItalic, fontStyle: 'Bolditalic', fontWeight: 700 },
        ]
    })
    const styles = StyleSheet.create({
        page: {
            fontFamily: 'THSarabunNew',
            flex: 'row',
            backgroundColor: '#ffffff',
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1,

        }
    });
    return (
        <>
            <Document>
                <Page size={'A4'} style={styles.page}>
                    <View style={styles.section}>
                        <Text>Section#1</Text>
                        <Text>งานวิจัย</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>งานวิจัย</Text>
                        <Text>Section#2</Text>
                    </View>
                </Page>
                <Page size={'A4'} style={styles.page}>
                    <View style={styles.section}>
                        <Text>Section#1</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section#2</Text>
                    </View>
                </Page>
            </Document>
        </>
    )
}

export default Pdf;

//Dowload_pdf
{/* <PDFDownloadLink document={<Pdf/>} fileName="example.pdf">
    Dowload_Pdf
</PDFDownloadLink> */}

// Viewer
{/* <PDFViewer showToolbar={false} className=" absolute h-full w-full"  >
    <Pdf />
</PDFViewer> */}