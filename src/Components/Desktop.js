import TopBar from './desktop/topBar';
import SideBar from './desktop/sideBar';
import style from "./styles/Desktop.module.css"

function Desktop() {
    return(
    <div className={style.body}>
        <div className={style.left}>
            <SideBar />
        </div>
        <div className={style.right}>
            <TopBar className={style.topBar}/>
            <div className={style.content}>
                <h1>Nothing Here For Now</h1>
            </div>
        </div>
    </div>
    );
}

export default Desktop;