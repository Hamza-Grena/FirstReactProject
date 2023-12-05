function Footer() {
    const footer={
        position: 'fixed',
        bottom: '0.04cm',
        width: '100%',
        height:'0.9cm',
        backgroundColor: 'rgb(13, 12, 12)',
    }
    
    return (  
        <>
        <div>
        <footer style={footer}>
        <center style={{color:'white'}}>© Tous droits résérvés 2023 .Powered By Hamza Grena</center>
    </footer>
    </div>
        </>
    );
}

export default Footer ;