import { useState } from "react";
import FormBilgi from "./FormBilgi";
import MesajFormu from  "./mesaj"

function App() {

  const[formVeri,formVeriGuncelle]=useState({adSoyad:"",mesaj:""})
  const[formGonderildi, formGonderildiGuncelle]=useState(false)
  const formGonder= olay=>{
    olay.preventDefault()
    formGonderildiGuncelle(true)
  }
  return (
    <>
    <p>Merhaba</p>
    <section className='form-cerceve'>
      <form onSubmit={formGonder}>
        <h2>Mesaj Olusturucu</h2>
        { !formGonderildi?
           <MesajFormu formVeri={formVeri} formVeriGuncelle={formVeriGuncelle}/>
           :
           "Form Gönderildi"
        }
       
       
      </form>
      <div>
        <h2>Mesaj Önizleme</h2>
        <div>
          {formGonderildi ? 
          <FormBilgi bilgi1={formVeri.adSoyad} bilgi2={formVeri.mesaj}/> :
           <p>Form Henüz Gönderilmedi</p>
}
        </div>
      </div>
     
      
    </section>
    
    </>
  );
}

export default App;
