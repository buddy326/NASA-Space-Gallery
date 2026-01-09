export default function SideBar(props){

    const { handleToggleModal } = props;

    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents"> 
            <h2>The land of the gods.</h2>
            <div>
                <p>Description</p>
                <p>hdcbdhsbhewbdhb</p>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            </div>
        </div>
    )
}