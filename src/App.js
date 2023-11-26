import { useState } from "react";
import FormBilgi from "./FormBilgi";


function App() {

  const[adSoyad,adSoyadGuncelle]=useState("")
  const[mesaj,mesajGuncelle]=useState("")
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
        <div>
          <label>Ad Soyad</label>
          <input onChange={ olay=>adSoyadGuncelle(olay.target.value)} value={adSoyad} type="text"/>   
        
        </div>
        <div>
        <label>Mesaj</label>
        <textarea onChange={olay=>mesajGuncelle(olay.target.value)} value={mesaj}/>
        <button >Gönder</button>
      </div>
      </form>
      <div>
        <h2>Mesaj Önizleme</h2>
        <div>
          {formGonderildi ? 
          <FormBilgi bilgi1={adSoyad} bilgi2={mesaj}/> :
           <p>Form Henüz Gönderilmedi</p>
}
        </div>
      </div>
     
      
    </section>
    
    </>
  );
}

export default App;
