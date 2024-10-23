import style from "./Hero.module.css"
export default function Hero(){
    return(
        <div>
             <div className={style.hero}>
       <h1>Hi,</h1> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Accusantium tenetur dolor amet excepturi nulla eos blanditiis dicta maiores earum, <br />fugiat quod aliquam, perferendis nihil assumenda quisquam placeat vitae illum fuga.</p>
      </div>
        </div>
    )
}