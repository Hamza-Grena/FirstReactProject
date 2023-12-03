import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useShoppingCart } from "use-shopping-cart";

const PdfCart=() =>
{
    const {cartDetails,totalPrice} =useShoppingCart();
    const generatePDF =(TableRows,columns,isLandscape)=>
    {
        const doc = new jsPDF({
            orientation:isLandscape ? "landscape":'portrait'
        });
        doc.autoTable(
            {
                head: columns,
                body:TableRows,
                startY:20,
                headStyles:{
                    fillColor:[241,196,15],
                    fontSize: 12,
                    halign: 'center'
                    },
                 columnStyles: {
                    0: { cellWidth: 30, cellHeight: 20, halign: 'center' },
                    1: { cellWidth:'auto',halign:'center',fontStyle:'bold' },
                    2: { cellWidth:30, halign:'center'},
                    3: { cellWidth: 30, halign: 'center' },
                    4: { cellWidth: 30, halign: 'center' }
                 },
                 styles: {
                    valign: 'middle'
                 },
                 
                 /* Use for customizing texts or styles of specific cells after they have been formatted by this plugin. This hook is called just before the column width and other features are computed.*/
                 
                 didParseCell: function (data) {
                     if(data.section === 'body') {
                        data.row.height = 20;
                     }
                     if (data.column.dataKey === 'image') {
                        data.cell.text = '' // Use an icon in didDrawCell instead
                        data.cell.raw=`${data.cell.raw}`
                  
                     }
                 },
         
           /* Use for adding content to the cells after they are drawn. This could be images or links. You can also use this to draw other custom jspdf content to cells with doc.text or doc.rect for example.*/
                
                didDrawCell: function (data) { 
                  if (data.row.section === 'body' && data.column.dataKey === 'image' && data.cell.raw ) {
                      doc.addImage(
                         data.cell.raw,
                         'PNG',
                         data.cell.x + 5,
                         data.cell.y + 2,
                         13,
                         16
                      )
                   }
                }
              });
       
             
        const date = Date().split(" ");
        // we use a date string to generate our filename.
        const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
        // total
        doc.text(`Total : ${totalPrice.toFixed(3)} TND`, 14, 15);
      
              // we define the name of our PDF file.
              doc.save(`report_${dateStr}.pdf`);
           };
      
           const columnsPDF = [{
              image:"image",
              title:"Désignation",
              quantity:"Quantité",
              price:"Prix",
              STotal:"S/Total"
               }
            ];
      
           
           return(
            <>
         
            <button 
      
            style={{"color":"yellow", backgroundColor:"teal",height:70, position:'fixed',top:150, left:150, cursor: 'pointer'}} 
            onClick={() => generatePDF(Object.values(cartDetails).map(item => ({
                
                  image: item.image,
                  title: item.title,
                  quantity: item.quantity,
                  price : item.price,
                  STotal: (item.price * item.quantity).toFixed(3) 
               })), columnsPDF, true)}
           >
            DOWNLOAD PDF
            
         </button>
         
           </>
      
           );
      }
      export default PdfCart ;
      