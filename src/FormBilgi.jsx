const FormBilgi= (ozellikler)=>{
    return (
        <>
        <div>
        <strong>Ad Soyad: </strong> {ozellikler.bilgi1}
        </div>
        <div>
        <strong>Mesaj: </strong> {ozellikler.bilgi2}
        </div>
        
        </>
    )
}
export default FormBilgi