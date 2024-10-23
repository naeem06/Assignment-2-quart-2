import Link from "next/link";
import style from "./Header.module.css";
export default function Header() {
  return (
    <div>
      <div className={style.Navbar}>
        <div className={style.logo}>Naeem</div>
        <div className={style.List}>
           <Link href={"/"}><h4>HOME</h4></Link>
           <Link href={"service"}><h4>SERVICE</h4></Link>
          <Link href={"/About"}> <h4>ABOUT US</h4></Link>
        </div>
      </div>
    </div>
  );
}
