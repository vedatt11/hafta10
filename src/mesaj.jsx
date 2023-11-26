const MesajFormu=(formVeri,formVeriGuncelle)=>{
    const inputGuncelle=(olay)=>{
        const anahtar=olay.target.name
        const deger=olay.target.value
        formVeriGuncelle(eskiDeger=>{
            const yeniDeger={...eskiDeger,[anahtar]:deger}
            return yeniDeger
        })
    }
    return (
        <>
        <div>
            <label>ad soyad</label>
            <input name="adSoyad" onChange={inputGuncelle} value={formVeri.adSoyad} type="text"/>
        </div>
        <div>
            <label>mesaj</label>
            <textarea name="mesaj" onChange={inputGuncelle} value={formVeri.mesaj}/>
        </div>

        </>
    )
}
export default MesajFormu